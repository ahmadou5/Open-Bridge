import { useState } from "react"
import { expand1Store } from "@/utils/state"

export const Redeem = () => {
    const [expand1, setExpand1] = useState(false)
    const [expand2, setExpand2] = useState(false)
    const { expand3 } = expand1Store();
    return(
    <div style={{ "backdrop-filter": "blur(14px)" }} className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${ expand1 === true && 'h-auto'} ${expand1 === false && 'h-[100px]'}`}>
        <div onClick={() => setExpand1(true)} className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
           <p>3.</p>
           <p className="ml-2 mr-2">Redeem</p>
        </div>
        <div onClick={ () => setExpand2(true)} className={`w-[97%] py-2 px-2 ${expand1 === false && 'hidden' } h-[230px]  mt-4 ml-auto mr-auto`}>
            <div className="w-[100%] text-center">
                <p className="font-extralight ">Redeem Your Bridged Asset to Your Wallet</p>
            </div>
            <div className="w-[100%] h-36 mt-5 flex justify-items-center ml-auto mr-auto">
                
            </div>
        </div>
        {expand2 && <div className={`h-[160px] w-[97%] ml-auto mr-auto mt-3 ${expand1 === false && 'hidden' } bg-green-500`}></div>}
        <div onClick={ () => setExpand1(false)} className={`w-[97%] mt-2 h-[70px] ml-auto mr-auto mb-6 bg-yellow-600 ${expand1 === false && 'hidden' }`}></div>
    </div>
    )
}