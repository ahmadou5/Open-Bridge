import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: '500' , subsets: ['latin']})
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${poppins.className}`}
    >
      <Navbar />
      Tele Chain
    </main>
  )
}
