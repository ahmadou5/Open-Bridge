
export const Button = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-black  bg-white rounded-lg  w-[230px] h-[45px]">
          <p className="text-sm  mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };

  
export const AddButton = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-white  bg-green-500 rounded-full  w-[280px] h-[47px]">
        <p className="text-sm  mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};

  export const BrigeButton = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-black hover:drop-shadow-2xl hover:bg-slate-300  bg-white rounded-full  w-[320px] h-[38px]">
          <p className="text-sm  mt-auto mb-auto font-bold ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };

  export const ApproveButton = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-white hover:bg-green-400 bg-green-500 rounded-full  w-[190px] h-[33px]">
          <p className="text-sm  mt-auto mb-auto font-bold ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };

  export const ConnectButton = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-ehite hover:bg-blue-400  bg-blue-500 rounded-full  w-[30%] h-[35px]">
          <p className="text-sm  mt-auto mb-auto font-bold ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };  
export const DisconnectButton = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer hover:bg-blue-400 text-white  bg-blue-500 rounded-full  w-[66%] h-[34px]">
        <p className="text-xm  mt-auto mb-auto font-extrabld ml-auto mr-auto">{text}</p>
        <p className="text-xm  mt-auto mb-auto font-extrabld ml-auto mr-auto">{'Disconnect'}</p>
      </div>
    </div>
  );
};

export const ContinueButton = ({text, click}) => {
  return (
    <div>
      <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer  text-white hover:bg-blue-400 bg-blue-500 rounded-full  w-[60%] h-[33px]">
        <p className="text-xm  mt-auto mb-auto font-bold ml-auto mr-auto">{text}</p>
      </div>
    </div>
  );
};
  
  export const WButton = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer bg-white rounded-lg w-32 h-8">
          <p className="text-sm  text-black mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };
  
  export const BButton = ({text, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row ml-auto mr-auto py-1 px-1 cursor-pointer bg-black w-auto rounded-lg lg:w-[180px] h-[38px]">
          <p className="text-sm  text-white mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
        </div>
      </div>
    );
  };
  
  export const LoginButton = ({text, source, click}) => {
    return (
      <div>
        <div onClick={click} className=" flex flex-row mt-4 mb-4 ml-auto mr-auto py-2 px-2 cursor-pointer  text-white  bg-black rounded-2xl  w-[230px] h-12">
          <p className="text-sm  mt-auto mb-auto font-light ml-auto mr-auto">{text}</p>
          <img src={`./${source}`} className="text-sm rounded-full h-7 w-7   font-light ml-auto mr-auto"/>
        </div>
      </div>
    );
  };