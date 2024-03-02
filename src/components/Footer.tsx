import { Link } from "react-router-dom";
import Logo from "../assets/images/lipton-logo.png";

const Footer = () => {
  return (
    <div className="mt-[50px] text-white">
      <div className="container mx-auto px-2 grid gap-4 lg:grid-cols-4 md:grid-cols-3 mb-[88px]">
        <div>
          <h4 className="text-text8 ">Contact Us</h4>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Site Map
              </Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Cookie Notice
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Lipton Teas and Infusions
              </Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">
                Cookie Details
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-text3 mb-6">
            Social Media Links
          </h4>
          <ul className="flex gap-10 text-text4 text-lg">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-gradient">
        <div className="container mx-auto px-2 py-[36px] flex flex-wrap gap-5">
          <div className="w-full lg:w-1/5 flex items-center gap-4">
            <div className="size-[52px] z-[1]">
              <img
                src={Logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3>LIPTON</h3>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            <p className="text-[13px] leading-5 tracking-[-0.96%]">
              &copy; Lipton Teas and Infusions 2024
            </p>
            <p className="text-[13px] leading-5 tracking-[-0.96%]">
              This is a Lipton website, administered by Lipton Teas and
              Infusions.
            </p>
          </div>
          <div className="w-full flex justify-center mt-6">
            <p className="text-[13px] leading-5 tracking-[-0.96%] text-center">
              Built by{" "}
              <a
                href="https://onidev-portfolio.vercel.app/"
                target="_blank"
                className="hover:underline"
              >
                OniDev.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
