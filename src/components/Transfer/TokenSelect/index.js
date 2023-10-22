"use client";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite, useAccount } from 'wagmi'
import { Tokens } from "@/utils/Tokens";
import { Bridge, Cake } from "@/utils/contracts";
import { expand1Store, useAmountStore, useExpandStore } from "@/utils/state";
import {
  ApproveButton,
  BrigeButton,
  Button,
  ContinueButton,
} from "@/components/Buttons";


export const TokenSelect = () => {
  const [approved, setApproved] = useState(false);
  const { amount } = useAmountStore();
  const { expand2 } = expand1Store();
  const { address: userAddress } = useAccount();


  const toggleExpand2 = expand1Store((state) => state.toggleExpand2);
  const toggleExpand3 = useExpandStore((state) => state.toggleExpand);
  const handletoggle = () => {
    toggleExpand2();
    toggleExpand3();
  };
  
  const token = Tokens[0].address
  const { config, error } = usePrepareContractWrite({
    address: Cake.address,
    abi: [
      {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
    ],
    functionName:"mint",
    args: [
      userAddress,
      1000000000000,
    ],
    gas: 400000,
   
  });
  const {
    write: mint,
    data
  } = useContractWrite(config);
  
  const handlemint = () => {
    try {
      mint?.()

    } catch (error) {
      console.log(error)
    }
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
          <p className="font-extralight ">
            {approved
              ? "Initiate Your Cross Chain Transaction"
              : "Select and Approve the Token Your are Wishin to open bridge"}
          </p>
        </div>
        {
          <div>
          <div className="w-[100%] h-[120px] mt-5 flex flex-col justify-items-center ml-auto mr-auto">
            <div className="w-[95%] ml-auto mr-auto flex ">
              
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
    mint?.()
  }

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

const ApproveUi = ({ setApproved , Bridge}) => {
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
