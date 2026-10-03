PayProof
Every payment. Proven.
PayProof is an MVP designed to make salary payments more transparent, structured, and verifiable for employees and small businesses.
Live Demo: https://payproof-mvp.vercel.app/
Pitch Video: https://drive.google.com/file/d/1k9KLSwMlFVDvyeIhqx_asv0bre69um5C/view?usp=sharing
Demo Video: https://drive.google.com/file/d/1ppSFC5ls3MWH7YkSYOHR19KiFRMolaHZ/view?usp=sharing
Presentation: https://drive.google.com/file/d/1WTvpLlqMet178p1K8cqLgs8XegQiWRWI/view?usp=sharing
Colosseum Submission: Coming soon


⸻


Submission to Solana Create 2026
Name
Role
Danya-maker
Solo Developer


⸻


Problem and Solution
The Problem
Salary delays can lead to misunderstandings and disputes between employees and employers.
Payment information is often scattered across messages, bank statements, and personal records, making it difficult to maintain a clear and consistent payment history.
Our Solution
PayProof creates a unified payment history where salary payments and delays can be recorded and tracked.
The platform helps users:
Record salary payments and payment dates
Maintain a clear payment history
Track delayed payments
Count repeated delays
Generate a warning after the third recorded delay
Prepare payment events for blockchain-based verification


⸻


Why Solana?
Solana can serve as a verification layer for payment events.
In the current MVP, the Solana functionality is demonstrated through a prepared Devnet event rather than a live on-chain transaction.
A future version could store verifiable payment records on-chain while keeping sensitive salary and personal information off-chain.
Solana is suitable for this concept because its low-cost and high-throughput infrastructure can support frequent payment verification events.


⸻


Summary of Features
Feature
Description
Payment History
View recorded salary payments in one place
Payment Recording
Add a new payment to an employee’s history
Delay Tracking
Track delayed salary payments
Delay Counter
Monitor repeated payment delays
Warning System
Generate a warning after three recorded delays
Payment Analytics
View payment volume, delays, and verification status
Solana Layer
Demonstrate how payment events can be prepared for Solana verification
Phantom Connection
Connect a Solana wallet to the MVP


⸻


Tech Stack
Layer
Technology
Frontend
HTML, CSS, JavaScript
Blockchain
Solana / Solana Devnet concept
Wallet
Phantom
Hosting
Vercel


⸻


Architecture
The current MVP follows a simple client-side architecture:
                 ┌─────────────────────┐
                 │       User          │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │    PayProof MVP     │
                 │    HTML/CSS/JS      │
                 └──────────┬──────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
       Payment History   Analytics   Wallet Connection
              │
              ▼
       ┌─────────────────────┐
       │ Solana Verification │
       │      Layer          │
       └──────────┬──────────┘
                  │
                  ▼
            Solana Devnet
            (demo concept)
The MVP currently demonstrates the user flow and preparation of payment events for blockchain verification. It does not claim to execute a real on-chain salary payment.


⸻


How It Works
1. Record
An accounting user records an employee, payment amount, payment date, and delay information.
2. Track
PayProof keeps the payment history in one place and highlights delayed salary payments.
3. Analyze
The dashboard provides payment totals, delay counts, payment volume, and verification status.
4. Prepare for Verification
A payment can be prepared as a blockchain event for future Solana-based verification.


⸻


Quick Start
PayProof is a lightweight frontend MVP.
Run locally
Clone the repository:
git clone https://github.com/danya-maker/payproof-mvp.git
cd payproof-mvp
Then open index.html in a browser.Alternatively, deploy the project to Vercel or another static hosting provider.
Live Version
The deployed MVP is available at:
https://payproof-mvp.vercel.app/


⸻


Roadmap
The next version of PayProof could include:
Solana wallet integration
Real on-chain payment event records
Confirmation of payments by both parties
Integration with payment systems
Automated accounting reports
Secure off-chain storage for detailed payment information
Advanced payment and delay analytics
Scaling for local businesses


⸻


Project Status
MVP / Prototype
PayProof is currently a demonstration project created to showcase the concept, user flow, payment tracking, and potential blockchain integration.
The current Solana functionality is a demonstration of a verification layer and is not a live on-chain payroll system.
PayProof does not determine legal responsibility or provide legal advice.


⸻


Resources
Live MVP: https://payproof-mvp.vercel.app/
Pitch Video: https://drive.google.com/file/d/1k9KLSwMlFVDvyeIhqx_asv0bre69um5C/view?usp=sharing
Demo Video: https://drive.google.com/file/d/1ppSFC5ls3MWH7YkSYOHR19KiFRMolaHZ/view?usp=sharing
Presentation: https://drive.google.com/file/d/1WTvpLlqMet178p1K8cqLgs8XegQiWRWI/view?usp=sharing
GitHub Repository: https://github.com/danya-maker/payproof-mvp
Colosseum Submission: Coming soon


⸻


Built for Solana Create 2026 🇰🇿
PayProof — Every payment. Proven.
