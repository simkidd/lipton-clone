import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[50px]">
      <div className="container mx-auto px-2 grid grid-cols-4 mb-[88px]">
        <div>
          <h4>Contact Us</h4>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Help Center</Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Site Map</Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Cookie Notice</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Privacy Notice</Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Lipton Teas and Infusions</Link>
            </li>
            <li>
              <Link to="#" className="text-text8 hover:text-text4">Cookie Details</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-text3">
            Social Media Links
          </h4>
          <ul className="flex gap-5">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-x-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient">
        <div className="container mx-auto px-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
