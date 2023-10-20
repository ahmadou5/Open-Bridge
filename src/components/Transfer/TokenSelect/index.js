import { useState } from "react";
import { expand1Store, useAmountStore } from "@/utils/state";
import { ApproveButton, BrigeButton, Button, ContinueButton } from "@/components/Buttons";

export const TokenSelect = () => {

  const [approved, setApproved] = useState(true)
  const [continue2, setContinue2] = useState(false)
  const { amount } = useAmountStore()
  const { expand2 } = expand1Store();
  const ExpandableY = expand1Store((state) => state.toggleExpand3);
  const ExpandableZ = expand1Store((state) => state.toggleExpand2);
  const handleContinue = () => {
    ExpandableZ();
    ExpandableY();
  }
  const handleApprove = () => {
    setApproved(true)
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
            { approved ? 'Initiate Your Cross Chain Transaction' : 'Select and Approve the Token Your are Wishin to open bridge'}
          </p>
        </div>
        { 
        approved ? 
        <div>
          <div className="w-[100%] h-[120px] mt-5 flex flex-col justify-items-center ml-auto mr-auto">
          <div className="w-[95%] ml-auto mr-auto flex ">

          </div>
          <div className="mt-5 mb-5">
            <BrigeButton text={'Cross-Chain'} />
          </div>
        </div>
        </div> 
        :
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
            <input placeholder="Enter Amunt"  className="w-[30%] mt-9 h-[40px] ml-auto mr-auto items-center justify-center   rounded-md py-2 px-2 bg-slate-600"  type="text" />
          </div>
          <div className="mt-5 mb-5">
            <ApproveButton click={handleApprove()} text={'Approve'} />
          </div>
        </div>
        </div>
        }
      </div>
      
      <div
        className={`w-[97%] mt-2 h-[70px] ml-auto mr-auto mb-6  ${
          expand2 === false && "hidden"
        }`}
      >
        {
          approved &&  <ContinueButton click={handleContinue()} text={'Continue'} />
        }
      </div>
    </div>
  );
};
