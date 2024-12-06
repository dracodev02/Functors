"use client";
import Button from "@/package/@ui-kit/Button/Button";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logoFunc from "@/public/assets/logo_func.png";
import logoMonad from "@/public/assets/logo_monad.svg";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

type HeaderItem = {
  title: string;
  link: string;
};

const Header = () => {
  const [isShowMenu, toggleMenu] = useState(false);

  const items: HeaderItem[] = [
    { title: "Products", link: "/products" },
    { title: "Synthetic", link: "/synthetic" },
    { title: "Gamification", link: "/gamification" },
  ];

  return (
    <div className="max-w-desktop border border-primary rounded-[124px] overflow-hidden fixed w-full left-1/2 -translate-x-1/2 backdrop-blur-md z-10">
      <div
        className={`bg-[#8242a1] absolute w-full h-full top-0 left-0 flex items-center justify-between p-4 transition-all ${
          !isShowMenu && "-translate-y-full"
        }`}
      >
        <div className="flex gap-4 items-center">
          {items.map((item, index) => (
            <a key={index} href={item.link} className="font-futu_bold">
              {item.title}
            </a>
          ))}
        </div>
        <IoClose
          onClick={() => toggleMenu((prev) => !prev)}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="absolute w-full h-full bg-black/20 -z-[1]"></div>
      <div className="flex justify-between items-center h-[72px] max-md:h-[64px] p-4">
        <div className="flex items-center gap-1">
          <ImageComp src={logoFunc.src} className="w-11 h-11" />
          <div className="flex flex-col">
            <p className="uppercase font-futu_bold">Functors</p>
          </div>
        </div>
        <div className="flex gap-4 items-center h-full">
          <div className="flex gap-4 max-md:hidden opacity-70 pointer-events-none">
            {items.map((item, index) => (
              <a key={index} href={item.link} className="font-futu_bold">
                {item.title}
              </a>
            ))}
          </div>
          <Link href={"https://app.functors.xyz/"}>
            <Button title="Launch App" className="h-full font-futu_bold" />
          </Link>

          <IoMenu
            onClick={() => toggleMenu((prev) => !prev)}
            className="text-2xl max-md:block hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
