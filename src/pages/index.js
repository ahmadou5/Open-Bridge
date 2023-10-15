import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Web3Button } from '@web3modal/react'
import { useBalance, useAccount, useBlockNumber } from 'wagmi'
import { useState } from 'react'
import { Hero } from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: '500' , subsets: ['latin']})
export default function Home() {

  const [balance, setBalance] = useState(0);
  const { data:blockdata , onBlock } = useBlockNumber()
  const { address, isConnected, isConnecting } = useAccount()
  const { data, isError, isLoading } = useBalance({
    address: address ,
  })
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${poppins.className}`}
    >
      <Navbar />
      <Hero />
      <div className='mt-32 mb-[300px]'>
        <Web3Button />
        { isLoading ? <>Loading...</> : data?.formatted }
        { isConnecting && <>Loading....</>}
        { `block : ${ blockdata?.toString()}`}
      </div>
      
    </main>
  )
}
