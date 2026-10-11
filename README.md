PayProof — Every payment. Proven.
Transparent salary tracking for employees and small businesses, built with Solana in mind.
Live Demo · Video Demo · GitHub Repository · Colosseum Project


⸻




⸻


Submission & Contact
2026 Solana National Hackathon
Founder & Developer: Rayana
Colosseum Project: PayProof
Telegram: @runmein
The Problem
Salary information is often scattered across messages, screenshots, and spreadsheets. Repeated payment delays can be difficult to track, document, and understand.
The Solution
PayProof brings salary payment records into one dashboard, helping employees and small businesses organize payment history, monitor delays, and explore payment patterns.
Key Features
Payment Dashboard — view salary payment records in one place.
Payment History — review payment amounts, dates, and statuses.
Delay Monitoring — track delayed payments and identify recurring patterns.
Analytics — explore payment history through dashboard statistics.
Solana Integration Foundation — an Anchor program deployed to Solana Devnet, providing a foundation for future on-chain payment records.
Demo
Explore the live prototype and see how PayProof organizes salary payment information.
Live Application: payproof-mvp.vercel.app
Video Walkthrough: Watch on YouTube
Hackathon Submission: View PayProof on Colosseum
The prototype uses sample payment data to demonstrate the user experience.
Solana Program
PayProof includes an Anchor program deployed to Solana Devnet.
Network: Solana Devnet
Program ID: EJkAW3JKPKDFUw3b6gVvJMnhY21CR9qg7a8nqaZrZM7p
Solana Explorer: View deployed program
Prototype status: The website currently uses sample payment data. Although the Anchor program is deployed, the frontend does not yet submit or verify real salary-payment transactions on-chain. Displayed balances are illustrative demo data, not real financial information.
Why Solana?
Low transaction costs can make payment-record verification practical.
Fast confirmation can support responsive payment-record workflows.
Anchor framework provides a foundation for developing Solana programs in Rust.
Future verifiability could help employees and businesses independently verify recorded payment events.
These are the benefits PayProof aims to build on as the prototype develops.
Tech Stack
Layer
Technology
Frontend
HTML, CSS, JavaScript
On-chain Program
Rust, Anchor
Blockchain Network
Solana Devnet
Hosting
Vercel
Architecture
PayProof consists of two main components:
Frontend: a dashboard for viewing payment records, monitoring delays, and exploring analytics.
Solana Program: a deployed Anchor program intended to support future on-chain payment-record functionality.
The connection between the frontend and on-chain recording remains future work.
See the Architecture Documentation.
Repository Structure
index.html — web application interface.
programs/payproof/ — Anchor program source code.
Anchor.toml — Anchor project configuration.
Cargo.toml — Rust project configuration.
docs/ — project documentation and architecture.
.github/workflows/build.yml — automated build workflow.
Getting Started
Run the Frontend
Clone the repository:
git clone https://github.com/danya-maker/payproof-mvp.git
cd payproof-mvp
Open index.html in your browser, or use a local static web server.
Alternatively, visit the live demo.
On-Chain Development
The Anchor program has its own Rust and Solana development requirements. See the project configuration files and the Solana documentation before building or deploying it.
Roadmap
☐ Connect the frontend to the deployed Anchor program.
☐ Implement and test on-chain payment recording.
☐ Add transaction confirmation and verification links.
☐ Improve wallet connection and error handling.
☐ Expand automated tests and validation.
License
This project is licensed under the MIT License. See LICENSE.
