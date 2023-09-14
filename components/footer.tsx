"use client";
import { NavigationBarElements } from "@/src/GlobalConstants";
import { NavigationDetails } from "@/src/interfaces";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();

  return (
    <div className="w-full py-16 flex flex-col items-center relative before:absolute before:bg-gradient-to-r before:from-transparent before:via-red-500 before:to-transparent before:top-0 before:left-0 before:w-full before:h-0.5">
      <div className="w-full flex justify-center items-center gap-4">
        {NavigationBarElements.map((item: NavigationDetails, index: number) => (
          <a key={index} href={item.href}>
            <div key={index}
              className={`w-28 grid place-items-center relative ${path === item.href && "font-bold"}`}>
              <span className="text-lg">{item.name}</span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-4 text-xs">Design: https://dribbble.com/shots/18909362-Strawberry-Cake-Website-Landing-Page-Design</p>
      <p className="text-xs">Design: https://dribbble.com/shots/15263504-Cake-Food-Restaurant-Landing-Page</p>
    </div>
  );
}
