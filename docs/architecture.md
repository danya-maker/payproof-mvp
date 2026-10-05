# Architecture

PayProof is a lightweight web application connected to a Solana Anchor program via Phantom Wallet.

## Components

| Component | Location | Responsibility |
| --- | --- | --- |
| Web app | `index.html` · `style.css` · `script.js` | UI, payment tracking, delay monitoring, analytics |
| Wallet layer | Phantom (browser extension) | Wallet connection and transaction signing |
| Solana program | `programs/payproof/src/lib.rs` | On-chain foundation for verifiable payment records |
| Tests | `tests/payproof.ts` | Anchor tests for the program |
| Deployment | Vercel | Hosting of the web app |

## Data flow

1. The user opens the web app and connects a Phantom wallet.
2. Payments (amount, date, status) are entered and displayed in the dashboard.
3. The app marks delayed payments and builds delay history and analytics.
4. The Anchor program on Solana Devnet is the foundation for recording and verifying payments on-chain (planned in Phase 2).

## Solana

- Network: Solana Devnet
- Program ID: `EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p`
- [View on Solana Explorer](https://explorer.solana.com/address/EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p?cluster=devnet)
