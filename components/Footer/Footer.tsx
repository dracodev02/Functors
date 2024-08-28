"use client";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logoFunctors from "@/public/assets/logo_func.png";
import logoMonad from "@/public/assets/logo_monad.svg";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[200px] backdrop-blur-lg bg-gradient-to-r from-transparent via-white/20 to-transparent">
      <div className="flex flex-col gap-5 justify-center pt-5 md:mt-32 mt-10">
        <div className="flex items-center gap-2 justify-center">
          <ImageComp
            src={logoFunctors.src}
            className="h-[90px] aspect-square"
          />
          <div className="flex flex-col">
            <p className="text-size-subtitle">Functors</p>
            <div className="flex text-sm">
              <p className="text-white/75 leading-4">Built on</p>{" "}
              <div className=" ml-1 bg-white px-2 rounded-3xl grid place-items-center">
                <ImageComp src={logoMonad.src} className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 justify-center">
          <RiTwitterXFill className="text-2xl" />
          <div className="min-w-[1px] h-[24px] bg-primary"></div>
          <BiLogoDiscordAlt className="text-2xl" />
          <div className="min-w-[1px] h-[24px] bg-primary"></div>
          <FaTelegram className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
