"use client";

import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const Pages = [
    {
      name: "Token Bridge",
      url: "",
      status: "Live",
    },
    {
      name: "NFTs Bridge",
      url: "",
      status: "Coming Soon",
    },
    {
      name: "About",
      url: "",
      status: "Coming Soon",
    },
  ];
  return (
    <>
      {/**for mobile view **/}
      <div
        style={{ "backdrop-filter": "blur(12px)" }}
        className=" backdrop-blur-lg bg-clip-padding bg-opacity-60 z-10 fixed text-Black sm:flex w-[100%] h-20 lg:hidden md:hidden"
      >
        <div className="w-[98%] flex flex-row mt-1 py-2 px-2 ml-auto mr-auto h-[90%]">
          <div className="ml-0 mr-auto mt-auto mb-auto">
            <Link href={"/"}>
              <div className="text-xl font-semibold flex">
                <img className="w-12 h-13" src="./assets/body.png" />
                <p className="text-blue-300 font-thin ml-1">Beta</p>
              </div>
            </Link>
          </div>
          <div className="mr-2 ml-auto mt-auto mb-auto">
            <div className="flex flex-row">
              <p className="ml-2  mr-2"></p>
            </div>
          </div>
        </div>
        {show && "Hello"}
      </div>
      {/**for desktop view **/}
      <div
        style={{ "backdrop-filter":"blur(12px)" }}
        className="mb-5 backdrop-blur-lg bg-clip-padding bg-opacity-60 fixed z-10 text-black lg:flex md:flex hidden w-[100%] h-20"
      >
        <div className="py-5 px-5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
          <div className="ml-0 mr-auto">
            <Link href={"/"}>
              <div className="text-sm flex">
                <img className="w-[52px] h-[52px]" src="./assets/body.png" />
                <p className="text-blue-300 font-thin ml-1">Beta</p>
              </div>
            </Link>
          </div>
          <div className="mr-20 ml-auto px-2 py-2">
            <div className="flex flex-row">
              {Pages.map((page, i) => (
                <div
                  key={i}
                  className="flex ml-2 mr-2"
                >
                  <p  className="ml-0 mr-0 text-white cursor-pointer hover:font-light font-bold text-lg">
                    {page.name}
                  </p>
                  <div className={` ${page.status === 'Live' ? 'bg-green-400' : 'bg-gray-400'}  ${ page.status === 'Live' ? 'w-[50px]' : 'w-[101px]' } text-center   rounded-full h-[19px]`}>
                    <p className={` ${page.status === 'Live' ? 'text-black' : 'text-white'} mt-[2px] py-0 px-1 mr-0 text-xs`}>{page.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
