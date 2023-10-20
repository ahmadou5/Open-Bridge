import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, arbitrumSepolia, sepolia,  baseGoerli, polygonMumbai, baseSepolia} from 'wagmi/chains'
import { avalanche, exzo } from '@/utils/wagmi'
const chains = [ sepolia, baseSepolia, polygonMumbai, avalanche]
const projectId = 'b9dfdc09e9bde8bbf0d9cc959a918787'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function EthProvider({children}) {
    return (
      <>
        <WagmiConfig config={wagmiConfig}>
          {children}
        </WagmiConfig>
  
        <Web3Modal themeVariables={{'--w3m-color-mix': '#00BB7F','--w3m-color-mix-strength': 40}} themeMode='dark' projectId={projectId} defaultChain={sepolia} ethereumClient={ethereumClient} />
      </>
    )
  }