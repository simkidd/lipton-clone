import { useEffect, useState } from "react";
// import { Link, AnchorAnchorLink } from "react-router-dom";
import Logo from "../assets/images/lipton-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Menu {
  name: string;
  href: string;
}

const menuItem1: Menu[] = [
  { name: "our teas", href: "#our-teas" },
  { name: "tea world", href: "#tea-world" },
  { name: "recipes", href: "#recipes" },
];
const menuItem2: Menu[] = [
  { name: "heart health", href: "#health" },
  { name: "green tea", href: "#matcha" },
  { name: "our purpose", href: "#about-us" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full fixed z-10 bg-white lg:bg-transparent">
      <div
        className={`hidden container mx-auto px-2 lg:flex items-center py-7 gap-12 text-white transition duration-300 ease-in-out ${
          scrolled && "bg-white !text-text4 rounded-full mt-2 shadow-lg"
        }`}
      >
        <ul className="flex items-center gap-12 w-4/5 justify-end">
          {menuItem1.map(({ name, href }, i) => (
            <li key={i}>
              <AnchorLink
                href={href}
                className={`uppercase font-semibold text-base hover:text-text5 transition duration-300 ease-in-out ${
                  scrolled && "hover:text-text7"
                }`}
              >
                {name}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <div className="size-[62px] w-1/6">
          <AnchorLink href="#home">
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </AnchorLink>
        </div>
        <ul className="flex items-center gap-12 w-4/5">
          {menuItem2.map(({ name, href }, i) => (
            <li key={i}>
              <AnchorLink
                href={href}
                className={`uppercase font-semibold text-base hover:text-text5 transition duration-300 ease-in-out ${
                  scrolled && "hover:text-text7"
                }`}
              >
                {name}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile nav */}
      <div className="container mx-auto px-2 flex items-center justify-between bg-white shadow-md md:shadow-none py-4 lg:hidden">
        <div className="size-[52px] z-[1]">
          <AnchorLink href="#home">
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </AnchorLink>
        </div>
        <button className="size-[52px] z-[1]" onClick={handleMenu}>
          {showMenu ? "Close" : "Menu"}
        </button>

        <ul
          className={`absolute top-[84px] w-full h-[calc(100vh-84px)] bg-text7 flex flex-col items-end justify-center gap-6 px-8 transition duration-500 ease-in-out ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          {menuItem1.map(({ name, href }, i) => (
            <li
              key={i}
              className="hover:-translate-x-2 transition duration-500 ease-in-out"
            >
              <AnchorLink
                href={href}
                className="uppercase font-semibold transition duration-300 ease-in-out text-white hover:text-text5 text-xl"
                onClick={handleMenu}
              >
                {name}
              </AnchorLink>
            </li>
          ))}
          {menuItem2.map(({ name, href }, i) => (
            <li
              key={i}
              className="hover:-translate-x-2 transition duration-500 ease-in-out"
            >
              <AnchorLink
                href={href}
                className="uppercase font-semibold transition duration-300 ease-in-out text-white hover:text-text5 text-xl"
                onClick={handleMenu}
              >
                {name}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
