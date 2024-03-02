import Tea1 from "../assets/images/tea-1.png";
import Tea2 from "../assets/images/tea-2.png";
import Tea3 from "../assets/images/tea-3.png";

const TeaWorld = () => {
  return (
    <div className="w-full py-[50px]" id="tea-world">
      <div className="container mx-auto px-2">
        <h2 className="text-text4 text-[40px] leading-[60px] font-semibold mb-[72px] text-center lg:w-[90%] w-full mx-auto">
          Discover Tea Wonders: Explore a World of Flavors!
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="h-[460px] rounded-xl overflow-hidden">
              <img src={Tea1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="py-6">
              <h3 className="text-[32px] text-center mb-3">Chamomile Tea </h3>
              <p className="text-[15px] leading-6 text-center">
                A herbal tea made from dried chamomile flowers, chamomile tea is
                known for its mild and soothing properties, making it a popular
                choice for relaxation.
              </p>
            </div>
          </div>
          <div>
            <div className="h-[460px] rounded-xl overflow-hidden">
              <img src={Tea2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="py-6">
              <h3 className="text-[32px] text-center mb-3">Oolong Tea </h3>
              <p className="text-[15px] leading-6 text-center">
                A partially oxidized tea with a diverse range of flavors, oolong
                tea falls between green and black tea, offering a unique and
                nuanced taste.
              </p>
            </div>
          </div>
          <div>
            <div className="h-[460px] rounded-xl overflow-hidden">
              <img src={Tea3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="py-6">
              <h3 className="text-[32px] text-center mb-3">Rooibos Tea </h3>
              <p className="text-[15px] leading-6 text-center">
                Also known as red tea, rooibos is a herbal tea from South
                Africa. It has a naturally sweet and nutty flavor, making it
                caffeine-free and a popular choice for those seeking a caffeine
                alternative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaWorld;
