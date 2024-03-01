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
      <div className="container mx-auto px-2 flex items-center justify-center py-7 gap-12">
        <ul className="flex items-center gap-12">
          {menuItem1.map(({ name, href }, i) => (
            <li key={i}>
              <a
                href={href}
                className="uppercase font-semibold text-base text-white hover:text-text5"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <div className="size-[62px]">
          <a href="">
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <ul className="flex items-center gap-12">
          {menuItem2.map(({ name, href }, i) => (
            <li key={i}>
              <a
                href={href}
                className="uppercase font-semibold text-base text-white hover:text-text5"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;