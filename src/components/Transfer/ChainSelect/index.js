import { useState, useEffect } from "react"

export const ChainSelect = ({expand, handleNext}) => {
    const [expand1, setExpand1] = useState(expand);
    const [sourceChain, setSourceChain] = useState("");
    const [destChain, setDestChain] = useState("");
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        setExpand1(expand);
    }, [expand]);

    const next = () => {
        if(!isConnected) {
            return;
        }
        handleNext(sourceChain, destChain);
        setExpand1(false);
    }

    const connectWallet = () => {
        //Implement 
        setIsConnected(true);
    }

    const disconnectWallet = () => {
        //Implement
        setIsConnected(false);
    }
    
    return(
    <div  style={{ "backdrop-filter": "blur(14px)" }} className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${ expand1 === true && 'h-auto'} ${expand1 === false && 'h-[100px]'}`}>
        <div onClick={() => setExpand1(!expand1)} className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
           <p>1.</p>
           <p className="ml-2 mr-2">Source</p>
        </div>
        <div className={`w-[97%] py-2 px-2 ${expand1 === false && 'hidden' } h-[230px]  mt-4 ml-auto mr-auto`}>
            <div className="w-[100%] text-center">
                <p className="font-extralight ">Select Token to send throuh open bridge</p>
            </div>
            <div className="w-[100%] h-36 mt-5 flex justify-items-center ml-auto mr-auto">
                <div className="w-[50%] py-2 px-2  ml-14 mr-auto ">
                    <p>Source Chain</p>
                    <select placeholder="Select source Chain" onChange={(e) => setSourceChain(e.target.value)} className="w-[80%] mt-3 h-[60px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"  >
                    <option value={'BaseGoerli'}>BaseGoerli</option>
                    </select>
                </div>
                <div className="w-[50%] py-2 px-2 ml-14 mr-auto ">
                    <p>Destination Chain</p>
                    <select placeholder="Select Destination Chain" onChange={(e) => setDestChain(e.target.value)}  className="w-[80%] mt-3 h-[60px]   ml-auto mr-auto items-center justify-center rounded-md py-2 px-2 bg-slate-600"  >
                        <option value={'sepolia'}>Sepolia</option>
                    </select>
                </div>
            </div>
        </div>
        {isConnected ? 
            <div onClick={() => disconnectWallet()} className={`flex justify-center items-center cursor-pointer h-[30px] w-[300px] rounded-full ml-auto mr-auto ${expand1 === false && 'hidden' } bg-green-500`}>Disconnect: 0x1b8...c684</div> :
            <div onClick={() => connectWallet()} className={`flex justify-center items-center cursor-pointer h-[30px] w-[300px] rounded-full ml-auto mr-auto ${expand1 === false && 'hidden' } bg-green-500`}>Connect Wallet</div>
        }
        <div onClick={ () => next()} className={`flex justify-center items-center rounded-full cursor-pointer w-[97%] mt-5 h-[50px] ml-auto mr-auto mb-6 bg-yellow-600 ${!isConnected && "opacity-10"} ${expand1 === false && 'hidden' }`}>Next</div>
    </div>
    )
}