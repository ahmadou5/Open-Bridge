import { ChainSelect } from "./ChainSelect"
import { TokenSelect } from "./TokenSelect"
import { Redeem } from "./Redeem"

export const Transfer = ({bridge}) => {
    return(
    <div className="w-[100%] h-[900px]">
        <ChainSelect />
        <TokenSelect />
        <Redeem />

    </div>
    )
}