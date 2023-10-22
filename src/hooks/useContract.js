'use client'
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import { Bridge } from '@/utils/contracts'
import { useAmountStore, expand1Store } from '@/utils/state'
import { Tokens } from '@/utils/Tokens'
import { useRef } from 'react'

const bridgeToken = Tokens.find((token) => token.symbol === 'LNM' )
console.log(bridgeToken);


export const useBridge = async () => {
    
  const token = Tokens[0].address
  const { config, error } = usePrepareContractWrite({
    address: Bridge.address,
    abi: [
      {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "_destinationChainSelector",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transferTokensPayNative",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "messageId",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    ],
    functionName: "transferTokensPayNative",
    args: [
      16015286601757825753,
      userAddress,
      token,
      1000,
    ],
    value: 0.0000000000003444,  
   
  });
  const {
    write: mint,
    data
  } = useContractWrite(config);
    return { write ,data , isSuccess, isLoading, isError}
}
