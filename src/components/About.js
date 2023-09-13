import React from "react";
import about1 from "../assets/about1.png";
import map from "../assets/map.png";
import ImageCarousel from "./carousal";
import "../about.css";

const About = () => {
  return (
    <>
      <div className="container mx-auto md:w-3/4">
        <div className="px-4 md:px-10 lg:px-20 xl:px-30">
          <div className="">
            <h1 className="text-center font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6">
              We're here to <br />{" "}
              <span className="font-bold @apply gradient-text">
                gurantee your success
              </span>
            </h1>
            <hr class=" mx-[2%] pb-10 border-t border-gray-300" />
          </div>
          <p className="bg-red-500 rounded-2xl p-2 text-md md:text-lg lg:text-1xl xl:text-2xl pb-20">
            ConsultUs provides consulting services that help business owners and
            leaders build a more valuable business. We worked with their founder
            to build a professional, modern site that follows the StoryBrand
            framework to clearly communicates the value it adds to potential
            clients
          </p>
          <img
            src={about1}
            alt="aboutmain"
            className=" w-full h-[400px] xl:h-[600px] relative bottom-20 -mb-44"
          />
          <div className="">
            <h1 className="text-center font-bold  text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6">
              We're here for you <br />{" "}
              <span className="font-bold @apply gradient-text">
                no matter where you are
              </span>
            </h1>
            <hr class=" mx-[2%] pb-10 border-t border-gray-300" />
          </div>
          <div>
            <img src={map} alt="map" className="p-4 w-full h-1/2" />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl pt-6 @apply gradient-text">
              Our Mission
            </h1>
            <hr class=" mx-[2%] pb-10 border-t border-gray-300" />
          </div>
          <div className="md:grid grid-cols-3">
            <h1 className="text-md font-bold lg:text-xl xl:text-2xl">
              Unmatched service
            </h1>
            <p className=" col-span-2 pb-[5%] text-md md:text-md lg:text-xl xl:text-2xl">
              Support corporate clients and financial investors with their
              growth strategy and international development.
            </p>
            <h1 className="text-md font-bold lg:text-xl xl:text-2xl">
              Specific
            </h1>
            <p className=" col-span-2 pb-[5%] text-md md:text-md lg:text-xl xl:text-2xl">
              ConsultUs’ core expertise lies in the ability to support our
              clients in understanding, analysing and executing commercial and
              investment strategies in specific markets.
            </p>
            <h1 className="text-md font-bold lg:text-xl xl:text-2xl">
              Experience
            </h1>
            <p className=" col-span-2 pb-[5%] text-md md:text-md lg:text-xl xl:text-2xl">
              Experience in working with and assisting a wide range of clients
              from international corporations to small/medium-sized businesses,
              from large corporate debt providers to mid-market private equity
              investors.
            </p>
            <h1 className="text-md font-bold lg:text-xl xl:text-2xl">
              Technology
            </h1>
            <p className=" col-span-2 pb-[5%] text-md md:text-md lg:text-xl xl:text-2xl">
              The best combination of technology and people.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold md:text-2xl lg:text-3xl xl:text-4xl pt-6 font-bold  text-2xl pt-6  @apply gradient-text">
              Our Success Team
            </h1>
            <hr class=" mx-[2%] pb-10 border-t border-gray-300" />

            <ImageCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
