export const Hero = () => {
  return (
    <div id="bg" className="w-[100%] h-auto lg:h-[900px] mt-20 text-2xl">
      {/** mobile view */}
      <div className=" drop-shadow-2xl mt-1 hidden  w-[100%] lg :hidden md:hidden">
        mobile
      </div>
      {/** desktop view */}
      <div className="drop-shadow-2xl lg:flex md:flex w-[100%]">
        {/** content view */}
        <div className="w-[100%] mt-20 mb-4 lg:mt-32 lg:mb-8 text-white text-center h-">
          <div className="mt-6 mb-6">
            <p className="font-extralight text-xl lg:text-8xl">Open Bridge</p>
          </div>
          <div className="mt-20 mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <p className="mt-2 mb-2 font-extrabold text-md lg:text-xl">
              Portal is a bridge that offers unlimited transfers across chains
              for tokens and NFTs wrapped by Wormhole.
            </p>
            <p className="mt-2 mb-2 font-extrabold text-md lg:text-xl">
              Unlike many other bridges, you avoid double wrapping and never
              have to retrace your steps.
            </p>
          </div>
        </div>
        {/** img view */}
        <div></div>
      </div>
    </div>
  );
};
