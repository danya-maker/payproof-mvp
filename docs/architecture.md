# PayProof Architecture

## Overview

PayProof is a client-side MVP for transparent and verifiable salary payment tracking.

## Architecture

The current MVP consists of a browser-based frontend:

- index.html — application UI, styles and client-side logic
- Phantom Wallet — wallet connection
- Solana Devnet — blockchain integration concept/demo
- Vercel — deployment and hosting

## Data Flow

1. User opens PayProof.
2. User connects a Phantom wallet.
3. Payment records are created and displayed in the application.
4. Payment history and delays are tracked.
5. Solana/Devnet functionality provides the foundation for future on-chain verification.

## Current MVP

The current version is primarily client-side. It does not yet use a production backend or database.

Future versions can add:

- persistent database storage
- real on-chain payment verification
- employer and employee confirmation
- payment analytics
- accounting integrations
