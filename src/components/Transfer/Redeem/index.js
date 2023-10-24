import { useEffect, useState } from "react"
import { expand1Store, useAmountStore, useExpandStore, useMessageIDStore } from "@/utils/state"
import { useAccount, useBalance, useSwitchNetwork } from "wagmi"
import { polygonMumbai } from "wagmi/chains"
import { Tokens } from "@/utils/Tokens"
import { } from "ethers"
import { formatEther, parseEther, parseUnits } from "viem"
import Link from "next/link"
import { Bridge } from "@/utils/contracts"
import { AddButton } from "@/components/Buttons"

export const Redeem = () => {
    const [balance, setBalance] = useState('')
    const [expand1, setExpand1] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const toggleExpand3 = useExpandStore((state) => state.toggleExpand);
    const { expand } = useExpandStore();
    const { messageID } = useMessageIDStore();
    const {amount} = useAmountStore();
    const { switchNetwork:change, isLoading, isSuccess } = useSwitchNetwork({
        chainId: polygonMumbai.id
    })
    const { address:userAddress } = useAccount()
    const { data:BNMBalance } = useBalance({
        address: userAddress,
        chainId: polygonMumbai.id ,
        token: Tokens[0].address2,
    })

    const addToken = async () => {
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                  address: Tokens[0].address2, // The address that the token is at.
                  symbol: Tokens[0].symbol, // A ticker symbol or shorthand, up to 5 chars.
                  decimals: Tokens[0].decimal, // The number of decimals in the token
                  image: Tokens[0].url, // A string url of the token logo
                },
              },
            });
          
            if (wasAdded) {
              console.log('Thanks for your interest!');
              toggleExpand3()
            } else {
              console.log('Your loss!');
            }
          } catch (error) {
            console.log(error);
          }
    }

    
    return(
    <div style={{ "backdrop-filter": "blur(14px)" }} className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${ expand === true && 'h-auto'} ${expand === false && 'h-[100px]'}`}>
        <div onClick={() => toggleExpand3()} className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
           <p>3.</p>
           <p className="ml-2 mr-2">Status</p>
        </div>
        <div onClick={ () => setExpand2(true)} className={`w-[97%] py-2 px-2 ${expand === false && 'hidden' } h-[130px]  mt-4 ml-auto mr-auto`}>
            <div className="w-[100%] text-center">
                <p className="font-extralight text-xl ">Redeem Your Bridged Asset to Your Wallet</p>
            </div>
            <div className="w-[100%] h-16 mt-5 flex justify-items-center ml-auto mr-auto">
                <div className="w-[90%] text-xl mb-1 mt-5 h-auto text-center ml-auto mr-auto ">
                  <p>{`🎉🎉 Your Cross chain transaction is Successfull You will need to wait for 10-20  minutes.`}</p>
                  <p className="mt-2">{`Once Sufficient Blocks have been mined on the Source Block Chain Your transaction will be finalized`}</p>
                </div>
            </div>
        </div>
        {expand && 
        <div className={`h-[40px] w-[97%] ml-auto mr-auto mt-1 py-1 px-1 text-xl text-center ${expand === false && 'hidden' } `}>
            <div className="w-[100%] h-18 mt-2 ml-auto mr-auto">
              {`Bridge Token Balance: ${BNMBalance?.formatted}  $${Tokens[0].symbol}` }  
            </div>
        </div>
        
        }
        <div className={`h-[70px] w-[97%] ml-auto mr-auto mt-3 py-1 px-1 text-xl text-center ${expand === false && 'hidden' }`}>
            <div className="w-[100%] h-36 mt-2 ml-auto mr-auto">
            <p className="mt-2">
                    {`You Can Track The Status of Your Cross-Chain Transaction on the `}
                    <Link
                     href={`https://ccip.chain.link/address/${Bridge.address}`}
                     passHref={true}
                     rel="noopener noreferrer" 
                     target="_blank"
                     className="text-blue-600 text-2xl font-extralight"

                     >{'Bridge Explorer'}</Link>
                  </p>
            </div>
        </div>
        <div onClick={ () => setExpand1(false)} className={`w-[97%] mt-2 mb-8 h-[70px] text-lg py-3 px-3 ml-auto mr-auto mb-6 ${expand === false && 'hidden' }`}>
            <AddButton click={() => addToken()} text={`Add $${Tokens[0]?.symbol} Token to Your Wallet`} />
        </div>

    </div>
    )
}