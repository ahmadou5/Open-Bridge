import { ChainSelect } from "./ChainSelect"
import { TokenSelect } from "./TokenSelect"
import { Redeem } from "./Redeem"

export const Transfer = () => {
    return(
    <div className="w-[100%] h-[1200px]">
        <ChainSelect />
        <TokenSelect />
        <Redeem />

    </div>
    )
}