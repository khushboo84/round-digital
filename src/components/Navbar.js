import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/aboutus" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full ">
      {/* fixed top-0 left-0 find solution for the overlapping */}
      <div className="md:flex flex-row md:px-20 py-8 px-7 font-bold ">
        {/* Logo here */}
        <div className="basis-2/6">RoundDigital</div>

        {/* Menu Icon */}
        <div
          className="md:hidden w-8 h-8 absolute top-6 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* Navbar Links */}
        <ul className="md:flex basis-4/6 pr-6 ">
          {links.map((links) => (
            <li className="my-7 md:my-0 md:ml-16 font-semibold">
              <a href="/">{links.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
