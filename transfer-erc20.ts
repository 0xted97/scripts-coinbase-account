import {
  createPublicClient,
  createWalletClient,
  encodeFunctionData,
  erc20Abi,
  getAddress,
  http,
  parseUnits,
} from "viem";
import { privateKeyToAccount, privateKeyToAddress } from "viem/accounts";
import {
  COINBASE_ACCOUNT_ADDRESS,
  DEFAULT_CHAIN,
  OWNER_PRIVATE_KEY,
} from "./constants";
import { CoinbaseABI } from "./coinbase.abi";

// Example usage
async function main() {
  // NOTE: Change to the token address you want to transfer
  const tokenAddress = getAddress("0x1e3e1f2f400e72ae9944f906177e39c252348fe4");

  
  const ownerAccount = privateKeyToAccount(OWNER_PRIVATE_KEY);
  const coinbaseAccount = getAddress(COINBASE_ACCOUNT_ADDRESS);
  const recipientAddress = ownerAccount.address;

  const publicClient = createPublicClient({
    transport: http(),
    chain: DEFAULT_CHAIN,
  });

  const walletClient = createWalletClient({
    account: ownerAccount,
    chain: DEFAULT_CHAIN,
    transport: http(),
  });

  const balance = await publicClient.readContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [coinbaseAccount],
  });

  const data = encodeFunctionData({
    abi: erc20Abi,
    functionName: "transfer",
    args: [recipientAddress, balance],
  });

  try {
    const tx = await walletClient.writeContract({
      address: coinbaseAccount,
      abi: CoinbaseABI,
      functionName: "execute",
      args: [tokenAddress, 0n, data],
    });
    console.log("Transaction sent:", tx);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

main();
