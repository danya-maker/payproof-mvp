/* =========================
   PAYPROOF MVP
========================= */

const SOL_TO_KZT = 138000;

let paymentCount = 3;
let delayCount = 2;
let onTimeCount = 1;
let totalSol = 6.54;


/* TOAST */

function toast(text) {
    const t = document.getElementById("toast");

    if (!t) return;

    t.textContent = text;
    t.classList.add("show");

    setTimeout(() => {
        t.classList.remove("show");
    }, 2500);
}


/* KZT */

function formatKzt(value) {
    return "₸" + Math.round(value).toLocaleString("en-US");
}


/* UPDATE ANALYTICS */

function updateAnalytics() {
    const totalPayroll = document.getElementById("totalPayroll");
    const paymentCountEl = document.getElementById("paymentCount");
    const onTimeEl = document.getElementById("onTimeCount");
    const delayEl = document.getElementById("delayCount");

    const walletEvents = document.getElementById("walletEvents");
    const walletDelays = document.getElementById("walletDelays");

    if (totalPayroll) {
        totalPayroll.textContent =
            totalSol.toFixed(2) + " SOL";
    }

    if (paymentCountEl) {
        paymentCountEl.textContent = paymentCount;
    }

    if (onTimeEl) {
        onTimeEl.textContent = onTimeCount;
    }

    if (delayEl) {
        delayEl.textContent = delayCount;
    }

    if (walletEvents) {
        walletEvents.textContent = paymentCount;
    }

    if (walletDelays) {
        walletDelays.textContent = delayCount;
    }
}


/* RECORD PAYMENT */

function recordPayment() {

    const employee =
        document.getElementById("employeeName");

    const amountInput =
        document.getElementById("paymentAmount");

    const delayInput =
        document.getElementById("paymentDelay");

    const employeeName =
        employee ? employee.value.trim() : "";

    const amount =
        amountInput ? parseFloat(amountInput.value) : 0;

    const delay =
        delayInput ? parseInt(delayInput.value || "0") : 0;

    if (!employeeName) {
        toast("Enter employee name");
        return;
    }

    if (!amount || amount <= 0) {
        toast("Enter a valid amount");
        return;
    }

    if (delay < 0) {
        toast("Delay cannot be negative");
        return;
    }

    paymentCount++;
    totalSol += amount;

    if (delay > 0) {
        delayCount++;
    } else {
        onTimeCount++;
    }

    const table =
        document.getElementById("paymentTable");

    if (table) {

        const row =
            document.createElement("div");

        row.className = "payment-row";

        row.innerHTML = `
            <div>
                <strong>${employeeName}</strong>
                <span>Salary payment</span>
            </div>

            <div>
                ${amount.toFixed(2)} SOL
            </div>

            <div>
                ${delay > 0
                    ? `<span class="status delayed">
                        ${delay} day${delay === 1 ? "" : "s"} late
                       </span>`
                    : `<span class="status paid">
                        On time
                       </span>`
                }
            </div>

            <div>
                ${new Date().toLocaleDateString()}
            </div>
        `;

        table.prepend(row);
    }

    updateAnalytics();

    if (delayCount >= 3) {
        const warning =
            document.getElementById("warning");

        if (warning) {
            warning.textContent =
                "Warning: repeated salary delays detected.";
        }
    }

    toast("Payment recorded");

    if (employee) employee.value = "";
    if (amountInput) amountInput.value = "";
    if (delayInput) delayInput.value = "0";
}


/* SOLANA DEMO EVENT */

function solana() {

    const eventId =
        "PP-" +
        Date.now().toString(36).toUpperCase();

    const eventElement =
        document.getElementById("solanaEvent");

    if (eventElement) {
        eventElement.textContent = eventId;
    }

    toast("Solana event prepared");

    return eventId;
}


/* PHANTOM */

function getPhantomProvider() {

    if (window.phantom &&
        window.phantom.solana &&
        window.phantom.solana.isPhantom
    ) {
        return window.phantom.solana;
    }

    if (
        window.solana &&
        window.solana.isPhantom
    ) {
        return window.solana;
    }

    return null;
}


/* CONNECT PHANTOM */

async function connectPhantom() {

    const provider =
        getPhantomProvider();

    if (!provider) {

        toast("Phantom wallet not found");

        const isMobile =
            /Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
            );

        if (isMobile) {

            const currentUrl =
                encodeURIComponent(
                    window.location.href
                );

            window.location.href =
                https://phantom.app/ul/browse/${currentUrl};
        }

        return;
    }

    try {

        const response =
            await provider.connect();

        const publicKey =
            response.publicKey.toString();

        const wallet =
            document.getElementById("walletAddress");

        const button =
            document.getElementById("phantomButton");

        if (wallet) {
            wallet.textContent =
                publicKey.slice(0, 4) +
                "..." +
                publicKey.slice(-4);
        }

        if (button) {
            button.textContent =
                "Disconnect Phantom";

            button.onclick =
                disconnectPhantom;
        }

        toast("Phantom connected");

    } catch (error) {

        console.error(error);

        toast("Wallet connection cancelled");
    }
}


/* DISCONNECT PHANTOM */

async function disconnectPhantom() {

    const provider =
        getPhantomProvider();

    if (!provider) return;

    try {

        await provider.disconnect();

    } catch (error) {

        console.error(error);
    }

    const wallet =
        document.getElementById("walletAddress");

    const button =
        document.getElementById("phantomButton");

    if (wallet) {
        wallet.textContent =
            "Not connected";
    }

    if (button) {

        button.textContent =
            "Connect Phantom";

        button.onclick =
            connectPhantom;
    }

    toast("Phantom disconnected");
}


/* SETUP PHANTOM */

function setupPhantom() {

    const button =
        document.getElementById("phantomButton");

    if (!button) return;

    button.addEventListener(
        "click",
        connectPhantom
    );

    const provider =
        getPhantomProvider();

    if (provider) {

        provider.on(
            "connect",
            () => {

                const wallet =
                    document.getElementById(
                        "walletAddress"
                    );

                if (wallet && provider.publicKey) {

                    const key =
                        provider.publicKey.toString();

                    wallet.textContent =
                        key.slice(0, 4) +
                        "..." +
                        key.slice(-4);
                }
            }
        );

        provider.on(
            "disconnect",
            () => {

                const wallet =
                    document.getElementById(
                        "walletAddress"
                    );

                if (wallet) {
                    wallet.textContent =
                        "Not connected";
                }
            }
        );
    }
}


/* NAVIGATION */

function setupNavigation() {

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            );
        });
}


/* INITIALIZATION */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateAnalytics();

        setupPhantom();

        setupNavigation();
    }
);
