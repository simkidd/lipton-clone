import Button from "./Button";

const JoinUs = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto px-2 bg-joinBg py-[70px] rounded-3xl ">
        <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-6 text-center ">
          Get The Best From Our Tea
        </h2>
        <p className="text-lg text-text5 leading-[30px] text-center lg:w-[694px] w-full mx-auto mb-[44px]">
          Sip excellence, discover joy. Our teas are the key to moments that
          elevate, blend, and inspire. Unleash the best from every cup.
        </p>

        <form className="flex items-center gap-5 flex-col lg:flex-row lg:w-[694px] w-full mx-auto">
          <input type="text" placeholder="Enter your email address" className="py-4 px-4 w-full lg:w-11/12 rounded-xl focus:outline-text" />
          <Button className="py-4 px-5 rounded-lg bg-gradient text-white transition duration-300 ease-in-out w-1/3">
            Click To Join
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
