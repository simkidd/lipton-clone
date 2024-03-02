import Image1 from "../assets/images/green-cup-top.png";
import Image2 from "../assets/images/tea-cup.png";
import Image3 from "../assets/images/cookies.png";
import Image4 from "../assets/images/tea-pot.png";
import Button from "./Button";

const BestTea = () => {
  return (
    <div className="w-full py-[50px]" id='our-teas'>
      <div className="container mx-auto px-2">
        <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-6 text-center ">
          Get The Best From Our Tea
        </h2>
        <p className="text-lg text-text8 leading-[30px] text-center lg:w-[75%] w-full mx-auto mb-[72px]">
          Sip excellence, discover joy. Our teas are the key to moments that
          elevate, blend, and inspire. Unleash the best from every cup.
        </p>

        <div className="grid lg:grid-cols-2 gap-[24px]">
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Image1} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold lg:text-[32px] text-[28px] text-white">
                Make Green Tea
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Image2} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold lg:text-[32px] text-[28px] text-white">
                How To Make Milk Tea
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Image3} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold lg:text-[32px] text-[28px] text-white">
                The Perfecta Tea Pairing
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Image4} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold lg:text-[32px] text-[28px] text-white">
                The Joy of Organic Black Tea
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[52px] flex lg:justify-end justify-center pr-[15px]">
          <Button className="py-4 px-5 rounded-lg bg-gradient text-white hover:scale-[1.02] transition duration-300 ease-in-out">
            Click Here to Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BestTea;
