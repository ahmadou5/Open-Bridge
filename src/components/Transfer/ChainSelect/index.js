"use client";
import { Web3Button, Web3Modal, useWeb3Modal } from "@web3modal/react";
import { etherUnits } from "viem";
import { useState } from "react";
import {
  Button,
  ConnectButton,
  ContinueButton,
  DisconnectButton,
} from "@/components/Buttons";
import { useAccount } from "wagmi";
import { expand1Store } from "@/utils/state";

export const ChainSelect = () => {
  const { expand1 } = expand1Store();

  const Expandable = expand1Store((state) => state.toggleExpand1);
  const ExpandableZ = expand1Store((state) => state.toggleExpand2);

  const { open } = useWeb3Modal();

  const [expand2, setExpand2] = useState(false);
  const { address, isConnected, isDisconnected } = useAccount();

  const handleContinue = () => {
    Expandable();
    ExpandableZ();
  };
  return (
    <div
      style={{ "backdrop-filter": "blur(14px)" }}
      className={`w-[95%] z-10 bg-[#0B0E11] backdrop-blur-lg bg-clip-padding bg-opacity-60 py-2 px-2 ml-auto mr-auto mt-6 lg:w-[80%] rounded-3xl ${
        expand1 === true && "h-auto"
      } ${expand1 === false && "h-[100px]"}`}
    >
      <div
        onClick={() => Expandable()}
        className="w-[97%] mt-4 ml-auto mr-auto py-3 cursor-pointer px-3 h-10 flex"
      >
        <p>1.</p>
        <p className="ml-2 mr-2">Route</p>
      </div>
      <div
        className={`w-[97%] py-2 px-2 ${
          expand1 === false && "hidden"
        } h-[230px] ${isConnected && 'h-[90px]'}  mt-4 ml-auto mr-auto`}
      >
        <div className="w-[100%] text-center">
          <p className="font-extralight text-xl">Select the Route for bridging</p>
        </div>
        <div className={`w-[100%] h-36 mt-5 ${isConnected && 'hidden'} ${isConnected && 'h-1'} flex justify-items-center ml-auto mr-auto`}>
          <div className="w-[50%] py-2 px-2  ml-14 mr-auto ">
            <p>Source Chain</p>
            <select
              placeholder="Select source Chain"
              className="w-[80%] mt-3 h-[60px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"
            >
              <option value={"Sepolia"}>Sepolia</option>
              <option value={"mumbai"}>Polygon Mumbai</option>
            </select>
          </div>
          <div className="w-[50%] py-2 px-2 ml-14 mr-auto ">
            <p>Destination Chain</p>
            <select
              placeholder="Select Destination Chain"
              className="w-[80%] mt-3 h-[60px]   ml-auto mr-auto items-center justify-center rounded-md py-2 px-2 bg-slate-600"
            >
              <option value={"mumbai"}>polygon Mumbai</option>
              <option value={"Sepolia"}>Sepolia</option>
            </select>
          </div>
        </div>
      </div>
      {isConnected && <div className={`w-[20%] ml-auto mr-auto h-8 bg-green-600 text-center mb-5 py-1 px-1 rounded-full ${expand1 === false && 'hidden'} `}>Wallet Connected</div>}
      <div
        className={`h-[60px]  w-[97%] ml-auto mr-auto mt-3 ${
          expand1 === false && "hidden"
        }`}
      >
        {isConnected ? (
          <DisconnectButton
            text={address}
            click={() =>
              open({
                modal: "Disconnect",
              })
            }
          />
        ) : (
          <ConnectButton text={"Connect Wallet"} click={() => open()} />
        )}
      </div>
      {isConnected && (
        <>
          <div
            className={`w-[97%] mt-2 h-[70px] ml-auto mr-auto mb-6 py-2 px-2 ${
              expand1 === false && "hidden"
            }`}
          >
            <ContinueButton click={() => handleContinue()} text={"Continue"} />
          </div>
        </>
      )}
    </div>
  );
};
