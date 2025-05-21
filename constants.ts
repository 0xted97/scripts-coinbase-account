import { arbitrum } from "viem/chains";

import { arbitrumSepolia, mainnet } from 'viem/chains';
import dotenv from 'dotenv';
import { Address, Hex } from "viem";

dotenv.config();

if (!process.env.OWNER_PRIVATE_KEY) {
  throw new Error('OWNER_PRIVATE_KEY is required in .env file');
}

if (!process.env.COINBASE_ACCOUNT_ADDRESS) {
  throw new Error('COINBASE_ACCOUNT_ADDRESS is required in .env file');
}

const IS_MAINNET = process.env.IS_MAINNET === 'true';
export const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY as Hex;
export const COINBASE_ACCOUNT_ADDRESS = process.env.COINBASE_ACCOUNT_ADDRESS as Address;
export const DEFAULT_CHAIN = IS_MAINNET ? arbitrum : arbitrumSepolia;

console.log('Current chain:', DEFAULT_CHAIN.name);