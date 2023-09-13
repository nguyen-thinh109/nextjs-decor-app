"use client";
import { NavigationDetails } from "@/src/interfaces";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { NavigationBarElements } from "@/src/GlobalConstants";
import { ActiveTabContext } from "@/src/Contexts";

export default function Header() {
  const [currentTab, setCurrentTab] = useContext(ActiveTabContext);
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();

  useEffect(()=>{
    // return setActiveTab(currentTab || 0)
  }, [currentTab])
  
  function handleTabChange(number: number): any {
    setActiveTab(number);
  }

  return (
    <div className="w-full px-4 md:px-10 py-6 flex items-center select-none">
      <div className="w-40 flex justify-center">
        <Image src="/logo2.png" alt="logo" width={150} height={36} priority />
      </div>

      <div className="flex-1 flex justify-center items-stretch gap-4">
        {NavigationBarElements.map((item: NavigationDetails, index: number) => (
          // <a key={index} href={item.href}>
            <div key={index} className={`w-28 transition-all grid place-items-center relative after:absolute after:h-0.5 after:w-28 after:-bottom-3 after:left-0 after:z-10 after:content-[''] 
            ${activeTab === index && "font-bold after:bg-gradient-to-r after:from-transparent after:via-black after:to-transparent"}`}
              onClick={() => setCurrentTab(index)}>
              <span className="text-lg">{item.name}</span>
            </div>
          // </a>
        ))}
      </div>

      <div className="relative w-40 flex justify-center">
        <div className="px-1.5 py-px rounded-full grid place-items-center text-xs bg-red-600 text-white absolute transform -translate-y-1/2 translate-x-1/2 z-30">0</div>
        <Image src="/cart.svg" alt="cart" className="" width={32} height={32} priority />
      </div>
    </div>
  );
}
