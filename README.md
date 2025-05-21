# Coinbase Smart Wallet Transfer Scripts

This repository contains scripts for transferring ETH and ERC20 tokens using Coinbase Smart Wallet.

## Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- A Coinbase Smart Wallet account
- Private key of the owner account

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
OWNER_PRIVATE_KEY=your_private_key_here
COINBASE_ACCOUNT_ADDRESS=your_coinbase_smart_wallet_address
IS_MAINNET=true # false
```

## Available Scripts

### 1. Transfer ETH (`transfer-eth.ts`)

This script transfers ETH from your Coinbase Smart Wallet to a specified address.

```typescript
// Example usage
const ownerAccount = privateKeyToAccount(OWNER_PRIVATE_KEY);
const coinbaseAccount = getAddress(COINBASE_ACCOUNT_ADDRESS);
const recipientAddress = ownerAccount.address;
```

To run:
```bash
npx ts-node transfer-eth.ts
```

### 2. Transfer ERC20 Tokens (`transfer-erc20.ts`)


This script transfers ERC20 tokens from your Coinbase Smart Wallet to a specified address.

```typescript
// Example usage
const tokenAddress = getAddress("0x1e3e1f2f400e72ae9944f906177e39c252348fe4");
const ownerAccount = privateKeyToAccount(OWNER_PRIVATE_KEY);
const coinbaseAccount = getAddress(COINBASE_ACCOUNT_ADDRESS);
const recipientAddress = ownerAccount.address;
```

To run:
```bash
npx ts-node transfer-erc20.ts
```

## How It Works