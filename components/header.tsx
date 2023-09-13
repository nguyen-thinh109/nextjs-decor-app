"use client";
import { NavigationDetails } from "@/src/interfaces";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();

  const navigation: NavigationDetails[] = [
    { name: 'Home', href: '/' },
    { name: 'Promotion', href: '/promotion' },
    { name: 'News', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
  ];
  
  function handleTabChange(number: number): any {
    setActiveTab(number);
  }

  return (
    <div className="w-full px-4 md:px-10 py-6 flex items-center select-none">
      <div className="w-24 flex justify-center">
        <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      </div>

      <div className="flex-1 flex justify-center items-stretch gap-4">
        {navigation.map((item: NavigationDetails, index: number) => (
          // <a key={index} href={item.href}>
            <div key={index} className={`w-28 grid place-items-center relative after:absolute after:h-0.5 after:w-28 after:-bottom-0 after:left-0 after:z-10 after:content-[''] 
            ${activeTab === index && "after:bg-gradient-to-r after:from-transparent after:via-black after:to-transparent"}`}
              onClick={() => handleTabChange(index)}>
              <span>{item.name}</span>
            </div>
          // </a>
        ))}
      </div>

      <div className="relative w-24 flex justify-center">
        <div className="px-1.5 py-px rounded-full grid place-items-center text-xs bg-red-600 text-white absolute transform -translate-y-1/2 translate-x-1/2 z-30">{activeTab}</div>
        <Image src="/cart.svg" alt="cart" className="" width={24} height={24} priority />
      </div>
    </div>
  );
}
