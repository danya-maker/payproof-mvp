# PayProof — Every payment. Proven.

[![CI](https://github.com/danya-maker/payproof-mvp/actions/workflows/ci.yml/badge.svg)](https://github.com/danya-maker/payproof-mvp/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-14F195.svg)](LICENSE)
[![Solana](https://img.shields.io/badge/Solana-devnet-9945FF.svg)](https://solana.com)
[![Hackathon](https://img.shields.io/badge/Colosseum-2026-14F195.svg)](https://colosseum.org)

> Transparent salary tracking on Solana — keeps payment history in one place, flags delays, and lays the foundation for **verifiable on-chain payment records**.

[Live Demo](https://payproof-mvp.vercel.app) · [Video Walkthrough](https://youtube.com/shorts/9FC9NCuPhs0) · [Docs](docs) · [Colosseum Submission](#)

---

[![PayProof Overview](docs/payproof-overview.png)](docs/payproof-overview.png)

---

## Submission to 2026 Solana National Hackathon

| Name            | Role                    | Contact                                  |
| --------------- | ----------------------- | ---------------------------------------- |
| Rayana     | Founder & Developer     | [Telegram](runmein) ·                    |

---

## Problem and Solution

### 1. Scattered Payment Information

- **Problem:** Salary payments are spread across messages, screenshots and bank statements, so there is no single, consistent payment history.
- **PayProof:** Brings amounts, dates and statuses into one structured place.

### 2. Invisible Payment Delays

- **Problem:** Late payments are hard to notice and even harder to prove when they repeat.
- **PayProof:** Monitors payment status, flags delayed payments and keeps a delay history.

### 3. No Clear Picture of Payment Patterns

- **Problem:** Employees and small businesses can't easily see how payments evolve over time.
- **PayProof:** A simple analytics dashboard shows payment history and patterns.

### 4. No Verifiable Record

- **Problem:** Off-chain notes and screenshots are easy to dispute and impossible to verify.
- **PayProof:** A deployed Anchor program on Solana Devnet is the foundation for on-chain payment records with employer and employee confirmation.

---

## Why Solana

- **Speed** — fast block times and finality make payment confirmation feel instant
- **Cost** — very low transaction fees make recording even small payments on-chain practical
- **Ecosystem** — Phantom Wallet gives users a familiar, one-click way to connect
- **Composability** — Anchor makes it straightforward to extend the program and integrate with other Solana protocols

---

## Summary of Features

- Payment tracking (amount, date, status)
- Delay monitoring and delay history
- Payment analytics dashboard
- Phantom Wallet connection
- Solana Devnet integration
- Deployed Anchor program (`EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p`)

---

## Tech Stack

| Layer             | Technology                |
| ----------------- | ------------------------- |
| On-chain programs | Rust · Anchor Framework   |
| Frontend          | HTML · CSS · JavaScript   |
| Wallet            | Phantom                   |
| Network           | Solana Devnet             |
| Deployment        | Vercel                    |
| Testing           | Anchor Tests (TypeScript) |

---

## Architecture
