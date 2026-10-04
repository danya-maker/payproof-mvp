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
This project is licensed under the MIT License.
