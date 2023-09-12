import { HeaderData } from "@/src/interfaces";
import Image from "next/image";

export default function Header(data: HeaderData) {
  return (
    <div className="w-full px-10 py-6 flex items-center justify-between">
      <div className="">
        <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      </div>

      <div className="">
        <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      </div>

      <div className="relative">
        <div className="grid place-items-center text-lg bg-red absolute top-0 right-0 z-10">{data.activeTab}</div>
        <Image src="/cart.svg" alt="cart" className="" width={24} height={24} priority />
      </div>
    </div>
  );
}
