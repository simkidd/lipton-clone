import Pack from "../assets/images/lipton-pack.png";
import Woman from "../assets/images/woman-3.png";
import Button from "./Button";

const DoubleGoodness = () => {
  return (
    <div className="w-full pb-[80px] pt-[100px]">
      <div className="container mx-auto px-2 grid lg:grid-cols-2 gap-[100px]">
        <div className="relative flex md:justify-center">
          <div className="overflow-hidden h-[639px] max-w-[575px] rounded-[20px] w-full">
            <img
              src={Woman}
              alt="woman"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[279px] w-[320px] absolute lg:-bottom-[2rem] lg:-right-[6.5rem] -bottom-8 -right-16">
            <img src={Pack} alt="pack" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative">
          <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-6">
            Double The Goodness Twice Daily. Sip To Wellness With Lipton Green
            Tea!
          </h2>
          <p className="text-lg leading-8 text-text8 mb-14">
            Cultivate a daily ritual that nourishes your body and invigorates
            your spirit. Savor the vitality of Lipton Green Tea – a simple, yet
            powerful, commitment to your well-being.
          </p>

          <Button className="py-4 px-9 borde rounded-lg bg-gradient text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoubleGoodness;
