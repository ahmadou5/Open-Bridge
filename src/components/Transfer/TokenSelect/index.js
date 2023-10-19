import { useState, useEffect } from "react"

export const TokenSelect = ({expand, handleNext}) => { 
    const [expand1, setExpand1] = useState(expand);
    const [expand2, setExpand2] = useState(false);
    const [token, setToken] = useState("");
    const [amount, setAmount] = useState();

    useEffect(() => {
        setExpand1(expand);
    }, [expand]);

    const next = () => {
        handleNext(token, amount);
        // setExpand1(false);
    }
    return(
    <div style={{ "backdrop-filter": "blur(14px)" }} className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${ expand1 === true && 'h-auto'} ${expand1 === false && 'h-[100px]'}`}>
        <div onClick={() => setExpand1(!expand1)} className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
           <p>2.</p>
           <p className="ml-2 mr-2">Select Token</p>
        </div>
        <div className={`w-[97%] py-2 px-2 ${expand1 === false && 'hidden' } h-[180px]  mt-4 ml-auto mr-auto`}>
            <div className="w-[100%] py-2 px-2  ml-14 mr-auto ">
                <p className="font-extralight ">Select Token to send throuh open bridge</p>
                <select onChange={(e) => setToken(e.target.value)} className="w-[90%] mt-3 h-[70px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"  >
                <option value={'0xbf9036529123de264bfa0fc7362fe25b650d4b16'}>CCIP-BnM</option>
                <option value={'0x73ed16c1a61b098fd6924cce5cc6a9a30348d944'}>CCIP-LnM</option>
                </select>
            </div>
        </div>
        {expand2 && <div className={`h-[160px] w-[97%] ml-auto mr-auto ${expand1 === false && 'hidden' } bg-green-500`}></div>}
        <div className="flex w-[90%] justify-between items-center ml-auto mr-auto">
            <p className={`font-extralight w-[10%] ${expand1 === false && 'hidden' }`}>Amount:</p> 
            <input type="number" onChange={(e) => setAmount(e.target.value)} className={`flex justify-center items-center h-[40px] w-[100%] rounded-full border-solid border-2 border-slate-600 bg-inherit px-3 ${expand1 === false && 'hidden' } `}></input>
        </div>
        <div onClick={ () => next()} className={`flex justify-center items-center rounded-full cursor-pointer w-[97%] mt-5 h-[50px] ml-auto mr-auto mb-6 bg-yellow-600 ${!amount && "opacity-10"} ${expand1 === false && 'hidden' }`}>Transfer</div>
    </div>
    )
}