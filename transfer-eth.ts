import {
  createPublicClient,
  createWalletClient,
  encodeFunctionData,
  erc20Abi,
  getAddress,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import {
  COINBASE_ACCOUNT_ADDRESS,
  DEFAULT_CHAIN,
  OWNER_PRIVATE_KEY,
} from "./constants";
import { CoinbaseABI } from "./coinbase.abi";

// Example usage
async function main() {
  const ownerAccount = privateKeyToAccount(OWNER_PRIVATE_KEY);
  const coinbaseAccount = getAddress(COINBASE_ACCOUNT_ADDRESS);

  const publicClient = createPublicClient({
    transport: http(),
    chain: DEFAULT_CHAIN,
  });

  const walletClient = createWalletClient({
    account: ownerAccount,
    chain: DEFAULT_CHAIN,
    transport: http(),
  });

  const balance = await publicClient.getBalance({
    address: coinbaseAccount,
  });
  console.log("🚀 ~ main ~ balance:", balance)


  try {
    const tx = await walletClient.writeContract({
      address: coinbaseAccount,
      abi: CoinbaseABI,
      functionName: "execute",
      args: [ownerAccount.address, balance, '0x'],
    });
    console.log("Transaction sent:", tx);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

main();
