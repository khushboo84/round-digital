import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="shadow-md w-full px-[10%] bg-white">
        <div className="md:flex flex-row py-6 px-7 font-bold hidden">
          {/* Logo here */}
          <div className="basis-2/6">
            <img src={logo} alt="logo" />
          </div>

          {/* Navbar Links */}
          <ul className=" hidden md:flex basis-4/6 pr-6 ">
            {links.map((link) => (
              <li
                className="my-7 md:my-0 md:ml-16 font-semibold"
                key={link.name}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="w-full" />
        <h1 className="text-center  ">CopyRight&copy;RoundDigital</h1>
      </div>
      <h1 className="text-center hidden max-md:inline px-[30%] ">
        CopyRight&copy;RoundDigital
      </h1>
    </>
  );
};

export default Footer;
