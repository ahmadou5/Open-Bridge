import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, baseGoerli, polygonMumbai} from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon, baseGoerli, polygonMumbai]
const projectId = 'b9dfdc09e9bde8bbf0d9cc959a918787'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
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
  
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </>
    )
  }