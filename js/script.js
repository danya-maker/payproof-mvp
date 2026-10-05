const PROGRAM_ID = "EJKAW3jKPKDFUw3b0gVvJMnhY21CR9qg7a8nqaZrZM7p";
const DEVNET_RPC = "https://api.devnet.solana.com";

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
    }
}

async function disconnectWallet() {
    const provider = getPhantom();

    if (provider) {
        try {
            await provider.disconnect();
        } catch (error) {
            console.error(error);
        }
    }

    walletAddress = null;
    updateWalletUI();
}

function updateWalletUI() {
    const buttons = document.querySelectorAll(
        "#connectWallet, #connect-wallet, .connect-wallet, [data-connect-wallet]"
    );

    buttons.forEach((button) => {
        if (walletAddress) {
            button.textContent =
                walletAddress.slice(0, 4) +
                "..." +
                walletAddress.slice(-4);

            button.onclick = disconnectWallet;
        } else {
            button.textContent = "Connect Phantom";
            button.onclick = connectWallet;
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

    document.querySelectorAll(
        "#connectWallet, #connect-wallet, .connect-wallet, [data-connect-wallet]"
    ).forEach((button) => {
        button.addEventListener("click", connectWallet);
    });
});

window.PayProof = {
    programId: PROGRAM_ID,
    network: "devnet",
    connectWallet,
    disconnectWallet,
    checkProgram
};
