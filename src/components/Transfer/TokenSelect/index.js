"use client";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import { Tokens } from "@/utils/Tokens";
import { Bridge, Cake } from "@/utils/contracts";
import { expand1Store, useAmountStore, useExpandStore } from "@/utils/state";
import { utils } from 'ethers'
import {
  ApproveButton,
  BrigeButton,
  Button,
  ContinueButton,
} from "@/components/Buttons";
import { parseUnits, parseEther, formatEther } from "viem";

export const TokenSelect = () => {
  const [nAmount, setNamount] = useState('')
  const [approved, setApproved] = useState(false);
  const { expand2 } = expand1Store();
  const { address: userAddress } = useAccount();
  const toggleExpand2 = expand1Store((state) => state.toggleExpand2);
  const toggleExpand3 = useExpandStore((state) => state.toggleExpand);
  const handletoggle = () => {
    toggleExpand2();
    toggleExpand3();
  };

  

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
    args: [Bridge.address, nAmount],
    gas: 400000,
  });
  const { write: approvedt, isSuccess, isLoading, data: tokendata } = useContractWrite(token2);

  const handleApproved = async () => {
    try {
      alert('error')
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
    args: [
      '12532609583862916517',
      userAddress,
      token,
      nAmount,
    ],
    gas: 400000,
  });
  const { write: bridge, isLoading:brLoading, isSuccess:brSuccess, isError:brError ,data:brData } = useContractWrite(config);

  const handlebridge = () => {
    try {
      alert(error)
      bridge?.();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmount = (event) => {
   
  }

  return (
    <div
      style={{ "backdrop-filter": "blur(14px)" }}
      className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${
        expand2 === true && "h-auto"
      } ${expand2 === false && "h-[100px]"}`}
    >
      <div className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex">
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
                    <div className={`w-[95%] ml-auto mr-auto flex ${isSuccess && "hidden"}`}>
                      <div className="w-[60%] flex  py-2 px-2  ml-14 mr-auto ">
                        <p className="w-auto mt-8 mb-4 ml-">Select Token</p>
                        <select
                          placeholder="Select Token"
                          className="w-[70%] mt-7 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
                        >
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
              <div className="mt-5 mb-3 text-md">
                {brLoading && <>br brLoading</>}
                {brError && <div className="w-20 h-8 bg-red-600">br Error</div>}
                {!isSuccess && <Button click={() => handleApproved()} text={`${isLoading ? "Approving..." : "Approve"}`} /> }
                {isSuccess && ( 
                <div className={`${brSuccess && 'hidden'}`}>
                  <BrigeButton
                    click={() => handlebridge()}
                    text={`${ brLoading ? 'bridging...' : 'Cross-Chain'}`}
                  />
                </div>
                )}
              </div>
              {brSuccess && 
              <div className="w-[80%] text-xl mb-3 h-auto text-center ml-auto mr-auto ">
                <p>{`🎉🎉 Kudos!! You Successfully Bridge 🌉 ${nAmount} amount of ${Tokens[0].name} tokens to Polygon Mumbai.`}</p>
                <p className="mt-2">{`Click the Continue Button to Redeem Your $${Tokens[0].symbol} on Mumbai Testnet `}</p>
              </div>
              }
              
              <div className={`w-[97%] mt-5  h-[70px] ml-auto mr-auto mb-6 `}>
                { isSuccess && <ContinueButton
                  click={() => {
                    handletoggle();
                  }}
                  text={"Continue"}
                />}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

const BridgeUi = ({
  error,
  mint,
  toggleExpand3 = { toggleExpand3 },
  toggleExpand2 = { toggleExpand2 },
}) => {
  const [alert, setAlert] = useState(false);
  const handlemint = () => {
    window.alert?.(error);
    mint?.();
  };

  return (
    <div>
      <div className="w-[100%] h-[120px] mt-5 flex flex-col justify-items-center ml-auto mr-auto">
        <div className="w-[95%] ml-auto mr-auto flex ">
          {alert && <Button click={toggleExpand3} text={"Claim"} />}
        </div>
        <div className="mt-5 mb-5">
          <BrigeButton click={() => handlemint()} text={"Cross-Chain"} />
        </div>
        <div className={`w-[97%] mt-5  h-[70px] ml-auto mr-auto mb-6 `}>
          <ContinueButton
            click={() => {
              handletoggle();
            }}
            text={"Continue"}
          />
        </div>
      </div>
    </div>
  );
};

const ApproveUi = ({ setApproved, Bridge }) => {
  const handleContinue = () => {
    setApproved(true);
    console.log("continue clicked");
  };
  return (
    <div>
      <div className="w-[100%] h-[120px] mt-5 flex flex-col justify-items-center ml-auto mr-auto">
        <div className="w-[95%] ml-auto mr-auto flex ">
          <div className="w-[60%] flex  py-2 px-2  ml-14 mr-auto ">
            <p className="w-auto mt-8 mb-4 ml-">Select Token</p>
            <select
              placeholder="Select Token"
              className="w-[70%] mt-7 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
            >
              <option value={"ETH"}>ETH</option>
              <option value={"USDT"}>USDT</option>
            </select>
          </div>
          <input
            placeholder="Enter Amunt"
            className="w-[30%] mt-9 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
            type="text"
          />
        </div>
        <div className="mt-5 mb-5">
          <ApproveButton click={handleContinue} text={"Approve"} />
        </div>
      </div>
    </div>
  );
};
