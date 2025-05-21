export const CoinbaseABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }],
    name: "AlreadyOwner",
    type: "error",
  },
  { inputs: [], name: "Initialized", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }],
    name: "InvalidEthereumAddressOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256", name: "key", type: "uint256" }],
    name: "InvalidNonceKey",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes", name: "owner", type: "bytes" }],
    name: "InvalidOwnerBytesLength",
    type: "error",
  },
  { inputs: [], name: "LastOwner", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "NoOwnerAtIndex",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "ownersRemaining", type: "uint256" },
    ],
    name: "NotLastOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "SelectorNotAllowed",
    type: "error",
  },
  { inputs: [], name: "Unauthorized", type: "error" },
  { inputs: [], name: "UnauthorizedCallContext", type: "error" },
  { inputs: [], name: "UpgradeFailed", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "index", type: "uint256" },
      { internalType: "bytes", name: "expectedOwner", type: "bytes" },
      { internalType: "bytes", name: "actualOwner", type: "bytes" },
    ],
    name: "WrongOwnerAtIndex",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      { indexed: false, internalType: "bytes", name: "owner", type: "bytes" },
    ],
    name: "AddOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      { indexed: false, internalType: "bytes", name: "owner", type: "bytes" },
    ],
    name: "RemoveOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [],
    name: "REPLAYABLE_NONCE_KEY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "addOwnerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "x", type: "bytes32" },
      { internalType: "bytes32", name: "y", type: "bytes32" },
    ],
    name: "addOwnerPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes4", name: "functionSelector", type: "bytes4" },
    ],
    name: "canSkipChainIdValidation",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { internalType: "bytes1", name: "fields", type: "bytes1" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      { internalType: "address", name: "verifyingContract", type: "address" },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: 'target', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'data', type: 'bytes' }
    ],
    name: 'execute',
    outputs: [{ name: '', type: 'bytes' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: "bytes32", name: "hash", type: "bytes32" }],
    name: "replaySafeHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "hash", type: "bytes32" }],
    name: "validateUserOp",
    outputs: [
      { internalType: "uint256", name: "validationData", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
] as const;
