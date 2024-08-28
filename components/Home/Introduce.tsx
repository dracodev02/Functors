import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import functorsApp from "@/public/assets/functorsApp.png";

const Introduce = () => {
  return (
    <div className="max-w-desktop mx-auto mt-32 flex flex-col items-center">
      <p className="text-center text-size-title">
        Fast, Secure, User-Friendly DeFi
      </p>
      <p className="text-center mt-6 max-w-[563px]">
        Effortlessly access perpetual and spot markets. Leverage our BLP Pools
        to boost your capital and achieve sustainable, long-term growth
      </p>
      <ImageComp src={functorsApp.src} className="mt-12" />
    </div>
  );
};

export default Introduce;
