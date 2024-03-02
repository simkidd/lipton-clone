import Woman1 from "../assets/images/woman-1.png";
import Woman2 from "../assets/images/woman-2.png";
import Man from "../assets/images/man.png";

const ThreeImages = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-3 gap-[32px]">
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Woman2} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold text-[28px] text-white">Sip Serenity</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Man} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold text-[28px] text-white">Thrive In Wellness</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-[460px] relative">
            <img className="w-full h-full object-cover" src={Woman1} alt="" />
            <div className="flex items-center justify-center absolute top-0 bottom-0 w-full h-full bg-overlayBg opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <p className="font-semibold text-[28px] text-white">Smile With Flavour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeImages;
