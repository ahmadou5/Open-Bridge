import '@/styles/globals.css'
import EthProvider from './EthProvider'

export default function App({ Component, pageProps }) {
  return (
    <EthProvider>
      <Component {...pageProps} />
    </EthProvider>
  )
}
