import Image from "../assets/images/green-cup.png";
import Play from "../assets/images/play.png";

const GreenTeaVideo = () => {
  return (
    <div className="w-full py-[50px]" id="recipes">
      <div className="container mx-auto px-2">
        <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-6 text-center ">
          How To Make Green Tea
        </h2>
        <p className="text-lg text-text8 leading-[30px] text-center lg:w-[75%] w-full mx-auto">
          Learn how to make green tea to be proud of. With these easy steps you
          can banish bitterness and stay hydrated withLipton Green Tea.
        </p>

        <div className="w-full lg:h-[600px] rounded-xl overflow-hidden relative">
          <img
            src={Image}
            alt="tea cup"
            className="w-full h-full object-cover"
          />
          <div className="bg-gradient flex items-center justify-center absolute top-0 w-full h-full mix-blend-soft-light"></div>
          <div className="flex items-center justify-center absolute top-0 w-full h-full">
            <button className="w-[80px] h-[80px]">
              <img
                src={Play}
                alt="play button"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenTeaVideo;
