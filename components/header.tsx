"use client";
import { NavigationDetails } from "@/src/interfaces";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { NavigationBarElements } from "@/src/GlobalConstants";
import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import animation from "@/public/lotties/hot.json";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";
import signInWithGoogle from "@/src/firebase";

export default function Header() {
  const pathname = usePathname();
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isSignin, setIsLogin] = useState(false);
  const [avatar, setAvatar] = useState('');
  
  useEffect(()=>{
    let isLoggedIn = !!localStorage.getItem('isLoggedIn');
    return setIsLogin(isLoggedIn);
  }, []);

  function handleLogin(): void {
    signInWithGoogle();
    // setIsLogin(!isSignin);
    // if (isSignin) {
    //   localStorage.setItem('isLoggedIn', '1');
    // } else {
    //   localStorage.removeItem('isLoggedIn');
    // }
  }

  function handleLogOut(): void {
    setIsLogin(!isSignin);
  }

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
              <div
                key={index}
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
        <div className="flex justify-start">
          <div
            className="flex flex-col justify-center w-8 h-10 overflow-hidden relative transition-all ease-in-out duration-700"
            onClick={() => {
              setIsUserClicked(false);
              setIsHamburgerClicked(!isHamburgerClicked);
            }}>
            <div className={`bg-black h-0.5 w-8 rounded transition ease-in-out duration-700 absolute top-[8px] ${isHamburgerClicked ? "-translate-x-full" : ""}`}></div>
            <div
              className={`bg-black h-0.5 w-8 rounded transform origin-center transition-all ease-in-out duration-700 absolute translate-middle ${isHamburgerClicked ? "rotate-45" : "rotate-0"}`}></div>
            <div
              className={`bg-black h-0.5 w-8 rounded transform origin-center transition-all ease-in-out duration-700 absolute translate-middle ${
                isHamburgerClicked ? "-rotate-45" : "rotate-0"
              }`}></div>
            <div className={`bg-black h-0.5 w-8 rounded transition ease-in-out duration-700 absolute bottom-[8px] ${isHamburgerClicked ? "translate-x-full" : ""}`}></div>
          </div>
          <div className="ml-2 w-10"></div>
        </div>

        <div className={`w-full bg-white absolute z-50 left-0 bottom-0 translate-y-full rounded-xl transition ease-in-out duration-300 ${isHamburgerClicked ? "" : "-translate-x-full"}`}>
          {NavigationBarElements.map((item: NavigationDetails, index: number) => (
            <a key={index} href={item.href}>
              <div
                className={`flex items-center justify-center w-full px-4 py-6 transition-all ease-in-out duration-1000 ${pathname === item.href && "font-bold"} ${
                  isHamburgerClicked ? "" : "-translate-x-full"
                }`}>
                <div className="relative h-auto">
                  <span className="text-lg">{item.name}</span>
                  {index == 1 ? (
                    <div className="absolute -right-12 -top-3 z-10">
                      {" "}
                      <Lottie animationData={animation} style={{ width: 54, height: 54 }} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </a>
          ))}

          <div onClick={handleLogin} className={`flex items-center justify-center w-full px-4 py-6 transition-all ease-in-out duration-1000 ${isHamburgerClicked ? "" : "-translate-x-full"}`}>
            <div className="relative h-auto">
              <span className="text-lg">{isSignin ? "Đăng xuất" : "Đăng nhập"}</span>
              {isSignin ? (
                <div className="absolute -right-8 top-0 z-10">
                  <AiOutlineLogout style={{ width: 24, height: 24 }} />
                </div>
              ) : (
                <div className="absolute -left-8 top-0 z-10">
                  <AiOutlineLogin style={{ width: 24, height: 24 }} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center justify-center">
          <Image src="/logo/logo2.png" alt="logo" width={150} height={36} priority />
        </div>

        <div className="flex items-center justify-end">
          <a href="/cart" className="relative w-8 flex justify-center block mr-2">
            <div className="px-1.5 py-px rounded-full grid place-items-center text-xs bg-red-600 text-white absolute transform -translate-y-1/2 translate-x-1/2 z-30">0</div>
            <Image src="/icons/cart.svg" alt="cart" className="" width={32} height={32} priority />
          </a>

          <div
            onClick={() => {
              setIsUserClicked(!isUserClicked);
              setIsHamburgerClicked(false);
            }}>
            {isSignin ? (
              <div className="flex justify-center justify-center rounded-full overflow-hidden border-2 border-white border-solid">
                <Image src="/images/cute-mini-strawberry-shortcake-pink.jpg" alt="logo" width={32} height={32} priority />
              </div>
            ) : (
              <HiOutlineUserCircle style={{ width: 36, height: 36 }} />
            )}
          </div>
        </div>

        <div className={`w-full bg-white absolute z-50 left-0 bottom-0 translate-y-full rounded-xl transition ease-in-out duration-300 ${isUserClicked ? "" : "translate-x-full"}`}>
          {isSignin ? (
            <div className={`flex items-center justify-center w-full px-4 py-6 transition-all ease-in-out duration-1000 ${isUserClicked ? "" : "translate-x-full"}`} onClick={handleLogOut}>
              <div className="relative h-auto">
                <span className="text-lg">Đăng xuất</span>
                <div className="absolute -right-8 top-0.5 z-10">
                  <AiOutlineLogout style={{ width: 24, height: 24 }} />
                </div>
              </div>
            </div>
          ) : (
            <div className={`flex items-center justify-center w-full px-4 py-6 transition-all ease-in-out duration-1000 ${isUserClicked ? "" : "translate-x-full"}`} onClick={handleLogin}>
              <div className="relative h-auto">
                <span className="text-lg">Đăng nhập</span>
                <div className="absolute -left-8 top-0.5 z-10">
                  <AiOutlineLogin style={{ width: 24, height: 24 }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
