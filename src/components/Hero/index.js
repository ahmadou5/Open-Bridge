'use client'
export const Hero = () => {
  return (
    <div id="bg" className="w-[100%] mb-[240px] h-auto lg:h-[500px] mt-20 text-2xl">
      {/** mobile view */}
      <div className=" drop-shadow-2xl mt-1 hidden  w-[100%] lg :hidden md:hidden">
        mobile
      </div>
      {/** desktop view */}
      <div className="drop-shadow-2xl lg:flex md:flex w-[100%]">
        {/** content view */}
        <div className="w-[100%] mt-20 mb-4 lg:mt-32 lg:mb-8 text-white text-center h-">
          <div className="mt-4 mb-4">
            <p className="font-extrabold text-5xl lg:text-8xl">Open Bridge</p>
          </div>
          <div className="mt-20 mb-18 w-[95%] lg:w-[70%] ml-auto mr-auto">
            <p className="mt-1 mb-2 font-light text-sm lg:text-sm">
              Open Bridge is a bridge that offers unlimited transfers across chains
              for tokens and NFTs.
            </p>
            <p className="mt-1 mb-2 font-light text-sm lg:text-sm">
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
