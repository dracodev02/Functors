import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import earning1 from "@/public/assets/earning1.png";
import earning2 from "@/public/assets/earning2.png";
import earning3 from "@/public/assets/earning3.png";

const YieldEarning = () => {
  return (
    <div className="w-full max-w-desktop mx-auto">
      <p className="text-center text-[#C1FF72]">
        Functors is built for everyone
      </p>
      <p className="text-center text-size-title uppercase max-w-[928px] mx-auto font-futu_bold">
        Not a trader? No problem stable yield-earning with us
      </p>
      <div className="mt-16 max-md:mt-8 grid place-items-center">
        <div className="relative w-fit md:-translate-x-[20%]">
          <div className="relative top-0 left-0 max-sm:-left-[5%] flex flex-col items-center justify-center gap-y-4 border border-primary rounded-lg p-6 max-sm:p-4 w-fit backdrop-blur-md">
            <div className="absolute w-full h-full rounded-lg top-0 left-0 bg-black/30 -z-[1]"></div>
            <p className="text-center text-[32px] max-lg:text-[24px] max-md:text-sm whitespace-nowrap font-futu_bold">
              {"Deposit your favorite pools"}
            </p>
            <div className="w-full relative aspect-[5/3]">
              <ImageComp
                src={earning1.src}
                className="h-auto w-full absolute top-0 left-0 aspect-[5/3]"
              />
            </div>
          </div>
          <div className="relative -mt-[30%] left-[45%] max-sm:left-[15%] max-sm:-mt-[60px] flex flex-col items-center justify-center gap-y-4 border border-primary rounded-lg p-6 max-sm:p-4 w-fit backdrop-blur-md">
            <div className="absolute w-full h-full rounded-lg top-0 left-0 bg-black/30 -z-[1]"></div>
            <p className="text-center text-[32px] max-lg:text-[24px] max-md:text-sm whitespace-nowrap font-futu_bold">
              {"Learn about the boarding curveols"}
            </p>
            <div className="w-full relative aspect-[5/3]">
              <ImageComp
                src={earning2.src}
                className="h-auto w-full absolute top-0 left-0 aspect-[5/3]"
              />
            </div>
          </div>
          <div className="relative -mt-[20%] left-[5%] max-sm:left-0 max-sm:-mt-[60px] flex flex-col items-center justify-center gap-y-4 border border-primary rounded-lg p-6 max-sm:p-4 w-fit backdrop-blur-md">
            <div className="absolute w-full h-full rounded-lg top-0 left-0 bg-black/30 -z-[1]"></div>
            <p className="text-center text-[32px] max-lg:text-[24px] max-md:text-sm whitespace-nowrap font-futu_bold">
              {"By the end of period, interest is yours"}
            </p>
            <div className="w-full relative aspect-[5/3]">
              <ImageComp
                src={earning3.src}
                className="h-auto w-full absolute top-0 left-0 aspect-[5/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YieldEarning;
