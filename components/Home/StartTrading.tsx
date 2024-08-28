import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import startTrading1 from "@/public/assets/start_trading1.png";
import startTrading2 from "@/public/assets/start_trading2.png";
import startTrading3 from "@/public/assets/start_trading3.png";
import startTrading4 from "@/public/assets/start_trading4.png";

type StartTradingItem = {
  src: string;
  title: string;
  description: string;
};

const StartTrading = () => {
  const items: StartTradingItem[] = [
    {
      src: "assets/start_trading1.png",
      title: "Non-custodial",
      description: "Full costody of your funds. No need to deposit or sign up.",
    },
    {
      src: "assets/start_trading2.png",
      title: "Transparent and Public",
      description:
        "100% on-chain data on blockchain including trades, fee, profit...",
    },
    {
      src: "assets/start_trading3.png",
      title: "Decentralized Oracle Prices",
      description:
        "Median spot prices fetched from Chainlink Oracle system. No scam wicks.",
    },
    {
      src: "assets/start_trading4.png",
      title: "Synthetic leverage",
      description:
        "Support wide ranges of assets from cryptocurrencies to forex.",
    },
  ];

  return (
    <div className="w-full max-w-desktop mx-auto">
      <p className="text-center text-[#C1FF72]">One-click Trading</p>
      <p className="text-center text-size-title uppercase font-futu_bold">
        Start trading in just few steps
      </p>
      <div className="grid grid-cols-2 gap-4 mt-16 max-md:mt-8 max-md:grid-cols-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[228px] px-6 py-8 border-primary border rounded"
          >
            <ImageComp
              src={item.src}
              className="absolute w-full h-full -z-[1] top-0 left-0"
            />
            <p className="text-size-subtitle uppercase font-futu_bold">
              {item.title}
            </p>
            <p className="text-[#f8f8f8bf">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartTrading;
