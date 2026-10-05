# PayProof

> Every payment. Proven.

PayProof is an MVP designed to make salary payments more transparent, structured and verifiable for employees and small businesses.

## Live Demo

https://payproof-mvp.vercel.app/

## Problem

Salary delays can create misunderstandings and disputes between employees and employers.

Payment information is often scattered across messages, bank statements and personal records, making it difficult to maintain a clear and consistent payment history.

## Solution

PayProof provides a structured payment history where users can track:

- payment dates
- payment amounts
- payment status
- delayed payments
- delay history
- payment analytics

The project also introduces Solana and Phantom Wallet as the foundation for future verifiable on-chain payment records.

## Why Solana?

Solana can provide a fast and transparent infrastructure for future payment verification.

With blockchain-based records, payment events could become independently verifiable instead of relying only on screenshots, messages or private records.

## How It Works

1. Open PayProof.
2. Connect a Phantom wallet.
3. Add and manage payment records.
4. Track payment history and delays.
5. View payment analytics.
6. Use the Solana integration as the foundation for future on-chain verification.

## Architecture

The current MVP is a client-side web application.

```text
User
  |
  v
PayProof Frontend
  |
  +---- Payment Tracking
  |
  +---- Analytics
  |
  +---- Phantom Wallet
             |
             v
        Solana Devnet
More details are available in docs/architecture.md⁠.
Tech Stack
HTML
CSS
JavaScript
Solana
Phantom Wallet
Vercel
Project Structure
payproof-mvp/
├── docs/
│   └── architecture.md
├── .gitignore
├── CONTRIBUTING.md
├── README.md
└── index.html
Current MVP Scope
The current version focuses on demonstrating the product concept and user experience.
It is intentionally lightweight and primarily client-side.
Production features planned for future versions include:
persistent backend storage
real on-chain payment verification
employer/employee confirmation
payment integrations
advanced analytics
accounting tools
blockchain-based payment history
Submission
Pitch Video
https://youtu.be/8oBv9BfQUGw?si=8JbYKUtcDHIuiZjs
Demo Video
https://youtube.com/shorts/9FC9NCuPhs0?si=d2LifoEddh00wqBn
Presentation
https://drive.google.com/file/d/17vYTGIReccOkHP94adpzW5v4eC5NnjfP/view?usp=drive_link
Roadmap
Phase 1 — MVP
Payment tracking
Delay tracking
Analytics
Phantom Wallet connection
Solana integration concept
Phase 2 — Verification
On-chain payment records
Employer confirmation
Employee confirmation
Transaction verification
Phase 3 — Business Tools
Accounting analytics
Reports
Payment integrations
Business dashboard
License
This project is licensed under the MIT License.✦ PayProof
Every payment. Proven.
<p align="center">
  <strong>Transparent salary tracking for employees and small businesses.</strong><br>
  Track payments, detect delays, connect Phantom and explore Solana-powered verification.
</p>
<p align="center">
  <a href="https://payproof-mvp.vercel.app/">🌐 Live Demo</a>
  ·
  <a href="https://github.com/danya-maker/payproof-mvp">💻 GitHub</a>
  ·
  <a href="https://explorer.solana.com/address/EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p?cluster=devnet">⛓️ Solana Program</a>
</p>


⸻


✨ Overview
PayProof is an MVP designed to make salary payments more transparent, structured and verifiable.
It gives employees and small businesses a simple way to keep payment records in one place, monitor delays and understand payment history through analytics.


⸻


 The Problem
Salary delays can create misunderstandings and disputes between employees and employers.
Payment information is often scattered across:
💬 messages
🏦 bank statements
📝 personal records
📸 screenshots
This makes it difficult to maintain a clear and consistent payment history.


⸻


💡 The Solution
PayProof provides a structured payment history where users can track:
Feature
Description
💸 Payments
Record salary payments and amounts
 Payment dates
Keep a clear payment timeline
 Payment status
Track completed and delayed payments
 Delay tracking
Detect repeated payment delays
 Analytics
Understand payment patterns
 Phantom
Connect a Solana wallet
⛓️ Solana
Foundation for future verification


⸻


⚡ Why Solana?
Solana provides fast and transparent infrastructure for blockchain-based applications.
For PayProof, Solana is used as the foundation for future verifiable payment records.
Instead of relying only on screenshots, messages or private records, future versions can allow payment events to become independently verifiable on-chain.
Current MVP: payment tracking and the product experience are demonstrated client-side.
Future versions: on-chain payment records and transaction verification.


⸻


 How It Works
        👤 User
           │
           ▼
    ┌───────────────┐
    │   PayProof    │
    │   Frontend    │
    └───────┬───────┘
            │
      ┌─────┼─────┐
      ▼     ▼     ▼
  Payments Analytics Phantom
      │             │
      └──────┬──────┘
             ▼
       Solana Devnet
User flow
Open PayProof.
Connect a Phantom wallet.
Add and manage payment records.
Track payment history and delays.
View payment analytics.
Use the Solana integration as the foundation for future on-chain verification.


⸻


 Product
The MVP focuses on a clean and lightweight experience:
Dashboard
Payment history
Delay tracking
Analytics
Phantom wallet connection
Solana Devnet integration


⸻


 Architecture
PayProof combines a client-side web application with a Solana/Anchor program.
                         ┌─────────────────┐
                         │      User       │
                         └────────┬────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │    PayProof Frontend    │
                    │       HTML/CSS/JS       │
                    └───────────┬─────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        Payment Tracking     Analytics      Phantom Wallet
                                                  │
                                                  ▼
                                      ┌─────────────────────┐
                                      │   Solana Devnet     │
                                      │   Anchor Program     │
                                      └─────────────────────┘
More details are available in docs/architecture.md.


⸻


⛓️ Solana Program
Network
Solana Devnet
Program ID
EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p
Explorer
👉 View PayProof Program on Solana ExplorerThe project includes an Anchor program with:
Anchor.toml
Rust smart contract
program Cargo.toml
deployment test
Devnet configuration


⸻


🛠️ Tech Stack
Technology
Purpose
HTML
Frontend structure
CSS
UI and responsive styling
JavaScript
Application logic
Solana
Blockchain infrastructure
Anchor
Solana program framework
Phantom
Wallet connection
Vercel
Deployment


⸻


📁 Project Structure
payproof-mvp/
│
├── docs/
│   └── architecture.md
│
├── programs/
│   └── payproof/
│       ├── src/
│       │   └── lib.rs
│       └── Cargo.toml
│
├── tests/
│   └── payproof.ts
│
├── Anchor.toml
├── Cargo.toml
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
├── style.css
├── script.js
└── Phantom wallet.html


⸻


🚀 Current MVP Scope
Available now
Payment tracking
 Payment status
 Delay tracking
 Payment analytics
 Phantom Wallet connection
 Solana Devnet integration
 Anchor program
 GitHub repository
 Live Vercel demo
Planned
 Persistent backend storage
 Real on-chain payment verification
Employer/employee confirmation
 Payment integrations
Advanced analytics
 Accounting tools
 Blockchain-based payment history


⸻


 Roadmap
Phase 1 — MVP
Payment tracking
Delay tracking
Analytics
Phantom Wallet connection
Solana integration
Phase 2 — Verification
On-chain payment records
Employer confirmation
Employee confirmation
Transaction verification
Phase 3 — Business Tools
Accounting analytics
Reports
Payment integrations
Business dashboard


⸻


🎥 Submission
Pitch
▶️ Watch Pitch Video
Demo
▶️ Watch Demo Video
Presentation
📊 Open Presentation


⸻


🌐 Links
Resource
Link
 Live Demo
payproof-mvp.vercel.app
💻 GitHub
payproof-mvp
 Solana Program
Devnet Explorer


⸻


📄 License
This project is licensed under the MIT License.


⸻


<p align="center">
  <strong>PayProof</strong><br>
  <em>Every payment. Proven.</em>
</p>
