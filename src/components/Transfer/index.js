import { ChainSelect } from "./ChainSelect"
import { TokenSelect } from "./TokenSelect"
import { Redeem } from "./Redeem"
import { useState } from "react"

export const Transfer = () => {
    const [sourceChain, setSourceChain] = useState("");
    const [destChain, setDestChain] = useState("");
    const [expandTokenSelect, setExpandTokenSelect] = useState(false);
    const [expandRedeem, setExpandRedeem] = useState(false);


    const handleChainSelectNext = (source, destination) => {
        setSourceChain(source);
        setDestChain(destination);
        setExpandTokenSelect(true);
    }

    const transfer = (token, amount) => {
        // Implement
        // Initiate transfer through chainlink CCIP
        // setExpandRedeem(true);
    }

    const redeem = () => {
        // Implement
        // Initiate transfer through chainlink CCIP
    }

    return(
    <div className="w-[100%] h-[1200px]">
        <ChainSelect expand={true} handleNext={handleChainSelectNext} />
        <TokenSelect expand={expandTokenSelect} handleNext={transfer} />
        <Redeem expand={expandRedeem} handleNext={redeem}/>

    </div>
    )
}