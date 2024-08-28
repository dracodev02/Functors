"use client";
import Introduce from "@/components/Home/Introduce";
import StartTrading from "@/components/Home/StartTrading";
import Trading from "@/components/Home/Trading";
import YieldEarning from "@/components/Home/YieldEarning";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import background from "@/public/assets/background.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[200px] max-md:gap-y-[100px] px-4">
      <ImageComp
        src={background.src}
        className="w-screen h-screen fixed top-0 left-0 -z-[1]"
      />
      <Introduce />
      <Trading />
      <StartTrading />
      <YieldEarning />
    </div>
  );
}
