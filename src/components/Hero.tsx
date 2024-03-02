import Button from "./Button";
import HeroImg from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container h-full mx-auto px-2 flex items-center pt-[132px] pb-[101px]">
        <div className="grid lg:grid-cols-2 gap-[90px]">
          <div className="flex flex-col justify-center">
            <h1 className="text-text font-extrabold text-6xl leading-[84px] mb-5">
              Empower Your Wellness Journey With Lipton Tea
            </h1>
            <p className="text-[#E7E6E6] mb-12 text-xl w-full lg:w-10/12 leading-[30px]">
              Elevate your well-being one cup at a time. Lipton's exceptional
              teas are crafted to nourish your body and soul. Embrace the
              goodness, embrace vitality.
            </p>
            <div className="flex items-center gap-8 flex-wrap">
              <Button className="bg-white py-4 px-9 border-white rounded-lg hover:bg-gray-200 w-full lg:w-fit">
                Click To Buy Now
              </Button>
              <Button className="py-4 px-9 border border-white rounded-lg text-white hover:bg-white hover:text-text5 transition duration-300 ease-in-out w-full  lg:w-fit">
                Join The Tea Club
              </Button>
            </div>
          </div>
          <div className="flex md:justify-center">
            <div className="max-w-[555px] w-full">
              <img
                src={HeroImg}
                alt="hero-img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
