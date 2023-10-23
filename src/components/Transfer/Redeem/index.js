import { useEffect, useState } from "react"
import { expand1Store, useAmountStore, useExpandStore, useMessageIDStore } from "@/utils/state"
import { useAccount, useBalance, useSwitchNetwork } from "wagmi"
import { polygonMumbai } from "wagmi/chains"
import { Tokens } from "@/utils/Tokens"
import { } from "ethers"
import { formatEther, getContract, parseEther } from "viem";
import {TokenAbi} from "../../../utils/Token";

export const Redeem = () => {
    const [balance, setBalance] = useState('')
    const [expand1, setExpand1] = useState(false)
    const [expand2, setExpand2] = useState(false)
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
    
    return(
    <div style={{ "backdrop-filter": "blur(14px)" }} className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${ expand === true && 'h-auto'} ${expand === false && 'h-[100px]'}`}>
        <div className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
           <p>3.</p>
           <p className="ml-2 mr-2">Status</p>
        </div>
        <div onClick={ () => setExpand2(true)} className={`w-[97%] py-2 px-2 ${expand === false && 'hidden' } h-[130px]  mt-4 ml-auto mr-auto`}>
            <div className="w-[100%] text-center">
                <p className="font-extralight ">Your token will appear in your wallet within 20-30 minutes.</p>
            </div>
            <div className="w-[100%] h-36 mt-5 ml-auto mr-auto">
                You bridged {amount} CCIP-BnM from Sepolia to Polygon Mumbai
               {/* {`${messageID} CCIP ${balance}`} */}
               <p className="mt-5">
                    Current Balance: {BNMBalance?.formatted} CCIP-BnM
                </p>
            </div>
        </div>
        <a href={`https://ccip.chain.link/msg/${messageID}`} target="_blank">
            <div className={`flex justify-center items-center rounded-full cursor-pointer w-[40%] mt-2 h-[40px] ml-auto mr-auto mb-6 bg-green-500 ${expand === false && 'hidden' }`}>View on Explorer</div>
        </a>
    </div>
    )
}