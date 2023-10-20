

export const avalanche = {
  id: 43_114,
  name: 'Avalanche',
  network: 'avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    public: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} 


export const exzo = {
    id: 2370,
    name: 'Exzo',
    network: 'Exzo',
    nativeCurrency: {
      decimals: 18,
      name: 'Exzo',
      symbol: 'XZO',
    },
    rpcUrls: {
      public: { http: ['https://testnet.exzo.technology​'] },
      default: { http: ['https://testnet.exzo.technology​'] },
    },
    blockExplorers: {
      etherscan: { name: 'ExzoScan', url: 'https://testnet.exzoscan.io/' },
      default: { name: 'ExzoScan', url: 'https://testnet.exzoscan.io/' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 11_907_934,
      },
    },
  } 
  
