const SOL_TO_KZT = 138000;

let paymentCount = 3;
let delayCount = 2;
let onTimeCount = 1;
let totalSol = 6.54;

/* TOAST */
function toast(text){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => {
    t.classList.remove("show");
  }, 2500);
}

/* KZT FORMAT */
function formatKzt(value){
  return "₸" + Math.round(value).toLocaleString("en-US");
}

/* UPDATE ANALYTICS */
function updateAnalytics(){
  const totalKzt = totalSol * SOL_TO_KZT;

  const totalPayrollEl = document.getElementById("totalPayroll");
  if(totalPayrollEl) totalPayrollEl.textContent = totalSol.toFixed(2) + " SOL";

  const totalPayrollKztEl = document.getElementById("totalPayrollKzt");
  if(totalPayrollKztEl) totalPayrollKztEl.textContent = "≈ " + formatKzt(totalKzt);

  const countEl = document.getElementById("count");
  if(countEl) countEl.textContent = paymentCount;

  const onTimeEl = document.getElementById("onTime");
  if(onTimeEl) onTimeEl.textContent = onTimeCount;

  const delaysEl = document.getElementById("delays");
  if(delaysEl) delaysEl.textContent = delayCount;

  const walletEventsEl = document.getElementById("walletEvents");
  if(walletEventsEl) walletEventsEl.textContent = paymentCount;

  const walletDelaysEl = document.getElementById("walletDelays");
  if(walletDelaysEl) walletDelaysEl.textContent = delayCount;
}

/* RECORD PAYMENT */
function recordPayment(){
  const amountInput = document.getElementById("amount");
  const lateInput = document.getElementById("late");
  const employeeInput = document.getElementById("employeeName");

  const amount = Number(amountInput.value);
  const late = lateInput.value;
  const employee = employeeInput.value.trim() || "Employee";

  if(!amount || amount <= 0){
    toast("Enter a payment amount in SOL.");
    return;
  }

  if(late === ""){
    toast("Enter the number of days late.");
    return;
  }

  const daysLate = Number(late);

  paymentCount++;
  totalSol += amount;

  if(daysLate > 0){
    delayCount++;
  } else {
    onTimeCount++;
  }

  const row = document.createElement("div");
  row.className = "payment";

  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  row.innerHTML = `
    <span>${date}</span>
    <span>${amount.toFixed(2)} SOL</span>
    <span class="${daysLate > 0 ? "delayed" : "paid"}">
      ${daysLate > 0 ? daysLate + " days late" : "✓ On time"}
    </span>
    <span class="chain">Blockchain ready</span>
  `;

  const historyEl = document.getElementById("history");
  if(historyEl) historyEl.prepend(row);

  updateAnalytics();

  const warning = document.getElementById("warning");
  if(warning){
    if(delayCount >= 3){
      warning.classList.add("critical");
      warning.innerHTML = `
        <strong>⚠ Critical payment warning:</strong>
        ${delayCount} payment delays have been recorded. Accounting attention is required.
      `;
    } else {
      warning.classList.remove("critical");
      warning.innerHTML = `
        <strong>⚠ Payment warning:</strong>
        ${delayCount} payment delays are currently recorded. A critical warning appears after the third delay.
      `;
    }
  }

  amountInput.value = "";
  lateInput.value = "";
  employeeInput.value = "";

  toast("✓ Payment for " + employee + " recorded.");
}

/* SOLANA EVENT */
function solana(){
  const id = "PAYPROOF-" + Date.now().toString(36).toUpperCase();
  const eventIdEl = document.getElementById("eventId");
  const eventEl = document.getElementById("event");

  if(eventIdEl) eventIdEl.textContent = "Solana Devnet · Demo Event ID: " + id;
  if(eventEl) eventEl.classList.add("show");

  toast("✓ Blockchain event prepared.");
}

/* PHANTOM WALLET */
let phantomProvider = null;

function getPhantomProvider(){
  if(window.phantom && window.phantom.solana){
    return window.phantom.solana;
  }
  if(window.solana && window.solana.isPhantom){
    return window.solana;
  }
  return null;
}

function shortAddress(address){
  if(!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-6);
}

function setWalletConnected(address){
  const button = document.getElementById("connectWalletBtn");
  const wallet = document.getElementById("walletAddress");

  if(!button || !wallet) return;

  wallet.style.display = "inline-flex";
  wallet.textContent = shortAddress(address);
  button.textContent = "Disconnect";
}

function setWalletDisconnected(){
  const button = document.getElementById("connectWalletBtn");
  const wallet = document.getElementById("walletAddress");

  if(!button || !wallet) return;

  wallet.style.display = "none";
  wallet.textContent = "Not connected";
  button.textContent = "Connect Phantom";
}

async function connectPhantom(){
  phantomProvider = getPhantomProvider();

  if(!phantomProvider){
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if(isMobile){
      const phantomBrowseUrl =
        "https://phantom.app/ul/browse/" + encodeURIComponent(window.location.href);
      window.location.href = phantomBrowseUrl;
      return;
    }

    window.open("https://phantom.app/download", "_blank", "noopener,noreferrer");
    toast("Opening Phantom download...");
    return;
  }

  try{
    const response = await phantomProvider.connect();
    const publicKey = response?.publicKey || phantomProvider.publicKey;

    if(!publicKey){
      throw new Error("Phantom connected but public key was not returned.");
    }

    const address = publicKey.toString();
    localStorage.setItem("payproof_wallet", address);
    setWalletConnected(address);
    toast("✓ Phantom connected");
  } catch(error){
    console.error("Phantom connection error:", error);
    if(error?.code === 4001){
      toast("Connection cancelled in Phantom.");
    } else {
      toast("Could not connect to Phantom.");
    }
  }
}

async function disconnectPhantom(){
  if(!phantomProvider) return;

  try{
    await phantomProvider.disconnect();
  } catch(error){
    console.error("Phantom disconnect error:", error);
  }

  setWalletDisconnected();
}

function setupPhantom(){
  phantomProvider = getPhantomProvider();

  if(!phantomProvider){
    return;
  }

  if(phantomProvider.isConnected && phantomProvider.publicKey){
    setWalletConnected(phantomProvider.publicKey.toString());
  }

  phantomProvider.on?.("connect", (publicKey) => {
    if(publicKey){
      setWalletConnected(publicKey.toString());
    }
  });

  phantomProvider.on?.("disconnect", () => {
    setWalletDisconnected();
  });

  phantomProvider.on?.("accountChanged", (publicKey) => {
    if(publicKey){
      setWalletConnected(publicKey.toString());
    } else {
      setWalletDisconnected();
    }
  });
}

document.getElementById("connectWalletBtn")?.addEventListener("click", async () => {
  phantomProvider = getPhantomProvider();

  if(phantomProvider?.isConnected || phantomProvider?.publicKey){
    await disconnectPhantom();
  } else {
    await connectPhantom();
  }
});

window.addEventListener("load", () => {
  setupPhantom();
  setTimeout(setupPhantom, 300);
  setTimeout(setupPhantom, 1000);
});

/* INITIALIZE */
updateAnalytics();
