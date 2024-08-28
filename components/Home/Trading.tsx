import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import trading1 from "@/public/assets/trading1.png";
import trading2 from "@/public/assets/trading2.png";
import trading3 from "@/public/assets/trading3.png";
import trading4 from "@/public/assets/trading4.png";

const Trading = () => {
  return (
    <div className="flex max-w-desktop w-full mx-auto justify-between md:items-center max-md:flex-col gap-y-8">
      <div className="max-w-[500px]">
        <p className="text-size-title uppercase font-futu_bold">
          Trading with 100x supported
        </p>
        <p className="mt-4">
          With synthetic system, we support many kinds of asset on Functors from
          cryptocurrencies to forex & commodities.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="pt-6">
          <ImageComp src={trading1.src} className="w-full" />
        </div>
        <ImageComp src={trading3.src} className="w-full" />
        <div className="pb-6">
          <ImageComp src={trading2.src} className="w-full" />
        </div>

        <ImageComp src={trading4.src} className="w-full" />
      </div>
    </div>
  );
};

export default Trading;
