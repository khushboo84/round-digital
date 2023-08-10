import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 bg-white">
      {/* fixed top-0 left-0 find solution for the overlapping */}
      <div className="md:flex flex-row py-6 px-7 font-bold ">
        {/* Logo here */}
        <div className="basis-2/6">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu Icon */}
        <div
          className="md:hidden w-8 h-8 absolute top-6 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {isOpen && (
          <ul className="md:hidden py-2 px-7">
            {links.map((link) => (
              <li className="my-2" key={link.name}>
                <Link to={link.link} className="block font-semibold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Navbar Links */}
        <ul className=" hidden md:flex basis-4/6 pr-6 ">
          {links.map((link) => (
            <li className="my-7 md:my-0 md:ml-16 font-semibold" key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
