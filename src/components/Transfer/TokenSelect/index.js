"use client";
import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useAccount,
  useSwitchNetwork,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import { Tokens } from "@/utils/Tokens";
import { Bridge, Cake } from "@/utils/contracts";
import { expand1Store, useAmountStore, useExpandStore, useMessageIDStore } from "@/utils/state";
import {
  BrigeButton,
  Button,
  ContinueButton,
} from "@/components/Buttons";

import { parseUnits, parseEther, formatEther, getContract } from "viem";
import Link from "next/link";
import { polygonMumbai } from "viem/chains";

export const TokenSelect = () => {
  
  const [nAmount, setNamount] = useState("0");
  const [approved, setApproved] = useState(false);
  const { expand2 } = expand1Store();
  const { address: userAddress } = useAccount();
  const toggleExpand2 = expand1Store((state) => state.toggleExpand2);
  const toggleExpand3 = useExpandStore((state) => state.toggleExpand);
  const updateMessageID = useMessageIDStore((state) => state.addMessageID);
  const handletoggle = () => {
    toggleExpand2();
    toggleExpand3();
    change(polygonMumbai.id);
  };

  const {
    switchNetwork: change,
    isLoading: chainLoad,
    isSuccess: chainSuccess,
  } = useSwitchNetwork({
    chainId: polygonMumbai.id,
  });

  const { config: token2 } = usePrepareContractWrite({
    address: Tokens[0].address,
    abi: [
      {
        inputs: [
          { internalType: "address", name: "spender", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "approve",
    args: [Bridge.address, parseUnits(nAmount, 18)],
    gas: 400000,
  });
  const {
    write: approvedt,
    isSuccess,
    isLoading,
    data: tokendata,
  } = useContractWrite(token2);
  const publicClient = usePublicClient();
  const {data: walletClient} = useWalletClient();

  const handleApproved = async () => {
    try {
      console.log("error");

      await approvedt?.();
      
    } catch (error) {
      console.log(error);
    }
  };

  const token = Tokens[0].address;
  const { config, error } = usePrepareContractWrite({
    address: Bridge.address,
    abi: Bridge.abi,
    functionName: "transferTokensPayLINK",
    args: ["12532609583862916517", userAddress, token, parseUnits(nAmount, 18)],
    gas: 300000,
  });
  const {
    write: bridge,
    isLoading: brLoading,
    isSuccess: brSuccess,
    isError: brError,
    data: brData,
  } = useContractWrite(config);

  const handlebridge = async () => {
    try {

      console.log(error);
      console.log(parseUnits(nAmount,18))
      bridge?.();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmount = (event) => {};

  return (
    <div
      style={{ "backdrop-filter": "blur(14px)" }}
      className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${
        expand2 === true && "h-[380px]"
      } ${expand2 === false && "h-[100px]"}`}
    >
      <div onClick={toggleExpand2} className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
        <p>2.</p>
        <p className="ml-2 mr-2">Select Token and Bridge</p>
      </div>
      <div
        className={`w-[97%] py-2 px-2 ${
          expand2 === false && "hidden"
        } h-[230px]  mt-4 ml-auto mr-auto`}
      >
        <div className="w-[100%] text-center">
          <p className="font-extralight text-xl ">
            {isSuccess
              ? "Initiate Your Cross Chain Transaction"
              : "Select and Approve the Token Your are Wishin to open bridge"}
          </p>
        </div>
        {
          <div>
            <div className="w-[100%] h-[120px] mt-5 flex flex-col justify-items-center ml-auto mr-auto">
              <div className="w-[95%] ml-auto mr-auto flex ">
                {!approved && (
                  <>
                    <div
                      className={`w-[95%] ml-auto mr-auto flex ${
                        isSuccess && "hidden"
                      }`}
                    >
                      <div className="w-[60%] flex  py-2 px-2  ml-14 mr-auto ">
                        <p className="w-auto mt-8 mb-4 ml-">Select Token</p>
                        <select
                          placeholder="Select Token"
                          className="w-[70%] mt-7 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
                        >
                          <option value={"ETH"}></option>
                          <option value={"ETH"}>CCIP BNM</option>
                        </select>
                      </div>
                      <input
                        onChange={(e) => setNamount(e.target.value)}
                        placeholder="Enter Amount"
                        className="w-[30%] mt-9 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
                        type="number"
                      />
                    </div>
                  </>
                )}
              </div>
              {brData && (
                <div
                  className={`w-[20%] ${
                    !brSuccess && "hidden"
                  } py-1 px-1 ml-auto mr-auto text-center rounded-lg h-8 bg-green-600`}
                >
                  <Link
                    href={`https://sepolia.etherscan.io/tx/${brData?.hash}`}
                    passHref={true}
                     rel="noopener noreferrer" 
                     target="_blank"
                  >
                    {`view on Etherscan`}
                  </Link>
                </div>
              )}
              <div className="mt-5 mb-3 text-md">
                {!isSuccess && (
                  <Button
                    click={() => handleApproved()}
                    text={`${isLoading ? "Approving..." : "Approve"}`}
                  />
                )}
                {isSuccess && (
                  <div className={`${brSuccess && "hidden"}`}>
                    <BrigeButton
                      click={() => handlebridge()}
                      text={`${brLoading ? "bridging..." : "Cross-Chain"}`}
                    />
                  </div>
                )}
              </div>
              {brSuccess && (
                <div className="w-[90%] text-xl mb-3 h-auto text-center ml-auto mr-auto ">
                  <p>{`🎉🎉 Kudos!! You Successfully Request to Bridge 🌉 ${nAmount} amount of ${Tokens[0].name} tokens to Polygon Mumbai.`}</p>
                  <p className="mt-2">{`Click the Continue Button to Redeem Your $${Tokens[0].symbol} on Mumbai Testnet `}</p>
                </div>
              )}

              <div className={`w-[97%] mt-5  h-[70px] ml-auto mr-auto mb-6 `}>
                {isSuccess && (
                  <ContinueButton
                    click={() => {
                      handletoggle();
                    }}
                    text={"Continue"}
                  />
                )}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
