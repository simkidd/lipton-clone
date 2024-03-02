import { Link } from "react-router-dom";
import Logo from "../assets/images/lipton-logo.png";

interface Menu {
  name: string;
  href: string;
}

const menuItem1: Menu[] = [
  { name: "our teas", href: "" },
  { name: "tea world", href: "" },
  { name: "recipes", href: "" },
];
const menuItem2: Menu[] = [
  { name: "heart health", href: "" },
  { name: "green tea", href: "" },
  { name: "our purpose", href: "" },
];

const Header = () => {
  return (
    <div className="w-full fixed z-10">
      <div className="container mx-auto px-2 flex items-center  py-7 gap-12">
        <ul className="flex items-center gap-12 w-4/5 justify-end">
          {menuItem1.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                to={href}
                className="uppercase font-semibold text-base text-white hover:text-text5"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="size-[62px] w-1/6">
          <a href="">
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <ul className="flex items-center gap-12 w-4/5">
          {menuItem2.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                to={href}
                className="uppercase font-semibold text-base text-white hover:text-text5"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
