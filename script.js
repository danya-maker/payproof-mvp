const PROGRAM_ID = "EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p";
const DEVNET_RPC = "https://api.devnet.solana.com";
const WALLET_BUTTON_SELECTOR = "#connectWalletBtn, #connectWallet, #connect-wallet, .connect-wallet, [data-connect-wallet]";

let walletAddress = null;

function getPhantom() {
    if (window.solana && window.solana.isPhantom) {
        return window.solana;
    }

    if (window.phantom?.solana?.isPhantom) {
        return window.phantom.solana;
    }

    return null;
}

async function connectWallet() {
    const provider = getPhantom();

    if (!provider) {
        alert("Phantom wallet is not installed.");
        return;
    }

    try {
        const response = await provider.connect();
        walletAddress = response.publicKey.toString();

        updateWalletUI();

        console.log("Phantom connected:", walletAddress);
        console.log("PayProof Program ID:", PROGRAM_ID);
        console.log("Network: Solana Devnet");
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Please approve the connection in Phantom and try again.");
    }
}

async function disconnectWallet() {
    const provider = getPhantom();

    if (provider) {
        try {
            await provider.disconnect();
        } catch (error) {
            console.error("Disconnect failed:", error);
        }
    }

    walletAddress = null;
    updateWalletUI();
}

function updateWalletUI() {
    const buttons = document.querySelectorAll(WALLET_BUTTON_SELECTOR);

    buttons.forEach((button) => {
        if (!button) return;

        if (walletAddress) {
            button.textContent = walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4);
            button.onclick = disconnectWallet;
            button.setAttribute("aria-label", "Disconnect wallet");
        } else {
            button.textContent = "Connect Phantom";
            button.onclick = connectWallet;
            button.setAttribute("aria-label", "Connect Phantom");
        }
    });
}

async function checkProgram() {
    try {
        const response = await fetch(DEVNET_RPC, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: 1,
                method: "getAccountInfo",
                params: [
                    PROGRAM_ID,
                    {
                        encoding: "base64"
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.result?.value) {
            console.log("✅ PayProof program found on Solana Devnet.");
            console.log("Program ID:", PROGRAM_ID);
            return true;
        }

        console.warn("PayProof program was not found.");
        return false;
    } catch (error) {
        console.error("Devnet connection error:", error);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateWalletUI();
    checkProgram();

    document.querySelectorAll(WALLET_BUTTON_SELECTOR).forEach((button) => {
        button.addEventListener("click", () => {
            if (walletAddress) {
                disconnectWallet();
            } else {
                connectWallet();
            }
        });
    });
});

window.PayProof = {
    programId: PROGRAM_ID,
    network: "devnet",
    connectWallet,
    disconnectWallet,
    checkProgram
};
