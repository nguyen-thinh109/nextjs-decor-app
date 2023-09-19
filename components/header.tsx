"use client";
import { NavigationDetails } from "@/src/interfaces";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { NavigationBarElements } from "@/src/GlobalConstants";
import { useState } from 'react';
import Lottie from "lottie-react";

export default function Header() {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {/*tablet & desktop mode*/}
      <div className="hidden md:block w-full px-4 px-10 py-6 flex items-center select-none">
        <div className="w-40 flex justify-center">
          <Image src="/logo/logo2.png" alt="logo" width={150} height={36} priority />
        </div>

        <div className="flex-1 flex justify-center items-stretch gap-4">
          {NavigationBarElements.map((item: NavigationDetails, index: number) => (
            <a key={index} href={item.href}>
              <div key={index}
                className={`w-28 transition-all duration-500 grid place-items-center relative after:absolute after:h-px after:w-28 after:-bottom-3 after:left-0 after:z-10 after:content-[''] 
            ${pathname === item.href && "font-bold after:bg-gradient-to-r after:from-transparent after:via-black after:to-transparent"}`}>
                <span className="text-lg">{item.name}</span>
              </div>
            </a>
          ))}
        </div>

        <a href="/cart" className="relative w-40 flex justify-center block">
          <div className="px-1.5 py-px rounded-full grid place-items-center text-xs bg-red-600 text-white absolute transform -translate-y-1/2 translate-x-1/2 z-30">0</div>
          <Image src="/icons/cart.svg" alt="cart" className="" width={32} height={32} priority />
        </a>
      </div>

      {/*mobile mode*/}
      <div className="w-full md:hidden flex items-center p-4 relative">
        <div className={`flex flex-col justify-center w-8 h-10 overflow-hidden relative transition-all ease-in-out duration-700 ${isClicked ? "" : "gap-1"}`} onClick={() => { setIsClicked(!isClicked) }}>
          <div className={`bg-black h-1 w-8 rounded transform origin-center transition ease-in-out duration-700 ${isClicked ? "rotate-45 absolute translate-middle" : "rotate-0"}`}></div>
          <div className={`bg-black h-1 w-8 rounded transition ease-in-out duration-700 ${isClicked ? "-translate-x-full" : ""}`}></div>
          <div className={`bg-black h-1 w-8 rounded transform origin-center transition ease-in-out duration-700 ${isClicked ? "-rotate-45 absolute translate-middle" : "rotate-0"}`}></div>
        </div>
        <div className={`w-full bg-white absolute z-50 left-0 bottom-0 translate-y-full rounded-xl transition ease-in-out duration-300 ${isClicked ? "" : "-translate-x-full"}`}>
          {NavigationBarElements.map((item: NavigationDetails, index: number) => (
            <a key={index} href={item.href}>
              <div key={index} className={`flex items-center justify-center gap-1 w-full px-4 py-6 transition-all ease-in-out duration-1000 ${pathname === item.href && "font-bold"} ${isClicked ? "" : "-translate-x-full"}`}>
                <span className="text-lg mr-2">{item.name}</span>
                {item.image ? <Lottie
                  animationData={item.image}
                  autoplay
                  loop
                  width={24}
                  height={24}
                /> : <></>}
              </div>
            </a>
          ))}
        </div>
        <div className="flex-1 flex justify-center justify-center">
          <Image src="/logo/logo2.png" alt="logo" width={150} height={36} priority />
        </div>
        <a href="/cart" className="relative w-10 flex justify-center block">
          <div className="px-1.5 py-px rounded-full grid place-items-center text-xs bg-red-600 text-white absolute transform -translate-y-1/2 translate-x-1/2 z-30">0</div>
          <Image src="/icons/cart.svg" alt="cart" className="" width={32} height={32} priority />
        </a>
      </div>
    </>
  );
}
