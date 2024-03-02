import MachaTea from "../assets/images/macha-tea.png";

const Matcha = () => {
  return (
    <div className="w-full py-[50px]" id="matcha">
      <div className="container mx-auto px-2">
        <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-[72px] text-center lg:w-[90%] w-full mx-auto">
          Sip, Smile, Thrive: Feel-Good Teas for Your Everyday Well-Being
        </h2>
        <div className=" grid lg:grid-cols-2 gap-[100px]">
          <div className="flex md:justify-center">
            <div className="overflow-hidden h-[557px] w-full max-w-[478px] rounded-[20px]">
              <img
                src={MachaTea}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:mt-[80px]">
            <h2 className="text-gradient text-[32px] leading-[60px] font-semibold mb-10">
              Matcha Green Tea
            </h2>
            <p className="text-lg leading-8 text-text8 mb-10">
              Legend has it that Buddhist monks used Matcha to enhance their
              focus for long hours of mediation, and to be alert and present in
              the moment. Todays's Matchaleaf comes from . shade grown . green
              tea whose chlorophyll-rich leaves are finally ground into a
              brillaiant green powder, prixed for its abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matcha;
