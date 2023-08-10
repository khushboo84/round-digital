import React from "react";
import Navbar from "./components/Navbar";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import temppicture from "./assets/temp2.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="md:flex">
        <div className="basis-1/2 bg-indigo-100">
          <div className="md:my-16">
            <h1 className=" md:text-4xl text-3xl font-bold md:px-18 px-10 max-sm:text-center pt-10 lg:text-6xl lg:text-center lg:mt-20">
              Get In Touch!
            </h1>
            <h2 className=" md:text-1xl text-lg md:px-20 px-10 max-sm:text-center py-4 lg:text-2xl lg:text-center">
              We are help for you! How can we help you?
            </h2>
          </div>
          <div className=" md:px-16 px-10 pb-20 ">
            <input
              placeholder="Email Address"
              type="text"
              className="rounded w-full h-10"
            ></input>
            <textarea
              placeholder="Your Message"
              type="text"
              className="resize-none rounded w-full h-60 mt-4"
            ></textarea>
            <button className="rounded w-full h-10 bg-[#DF3A3A] mt-4 font-bold">
              Submit
            </button>
          </div>
        </div>

        <div className="basis-1/2 md:p-18 p-10">
          <div className="md:m-10 m-14 lg:m-20">
            <img src={temppicture} alt="contact" className="h-80 w-full"></img>
          </div>

          {/* <div>
            <MapPinIcon className="w-10 h-10 fill-red-400" />{" "}
            <span>6th Avenue, Wall Street, New York</span>
          </div> */}
          <div className="flex flex-row max-sm:hidden">
            <div className="basis-1/6">
              <MapPinIcon className="md:w-10 md:h-14 sm:w-5 sm:h-5 fill-red-400" />
            </div>
            <div className="basis-5/6 md:text-2xl sm:text-md">
              6th Avenue, Wall Street, New York
            </div>
          </div>
          {/* <div>
            <EnvelopeIcon className="w-10 h-10 fill-red-400" />
            rounddigital@gmail.com
          </div> */}
          <div className="flex flex-row max-sm:hidden">
            <div className="basis-1/6">
              <EnvelopeIcon className="md:w-10 md:h-14 sm:w-5 sm:h-5 fill-red-400" />
            </div>
            <div className="basis-4/6 md:text-2xl sm:text-md">
              rounddigital@gmail.com
            </div>
          </div>
          {/* <div>
            <PhoneIcon className="w-10 h-10 fill-red-400" /> 602- 213-4143
          </div> */}
          <div className="flex flex-row max-sm:hidden">
            <div className="basis-1/6 ">
              <PhoneIcon className="md:w-10 md:h-14 sm:w-5 sm:h-5 fill-red-400" />
            </div>
            <div className="basis-4/6 md:text-2xl sm:text-md">
              602- 213-4143
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
