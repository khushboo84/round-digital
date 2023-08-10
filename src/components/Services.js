/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import picservice1 from "../assets/services-1.jfif";
import listIcon from "../assets/listIcon.png";
import picservice3 from "../assets/services-3.png";
import picservice2 from "../assets/services-2.png";
import picservice4 from "../assets/services-4.png";
import picservicesmain from "../assets/services-main.png";

const Services = () => {
  const [screenSize, setScreenSize] = useState(screen.width);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(screen.width);
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const services = [
    {
      id: 1,
      name: "Strategy services",
      text: "We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.",
      image: picservice1,
      serviceOffered: [
        "Market and competitive research",
        "CRM and sales funnel strategy",
        "Brand positioning and messaging",
        "Automation",
        "UX Consulting",
        "Marketing Strategy",
      ],
    },
    {
      id: 2,
      name: "Marketing services",
      text: "Reality is a new reality. With a well-built digital strategy we leverage this stellar tech to propel your brand forward.",
      image: picservice2,
      serviceOffered: [
        "Digital marketing campaigns",
        "Lead nurturing",
        "Marketing personas",
        "Content creation",
        "Branding",
        "SEO",
      ],
    },
    {
      id: 3,
      name: "Design services",
      text: " We design digital platforms to empower users and your brand'stribe. This deep understanding of what motivates them allows us to forge and fine-tune the most powerful strategies that generate rapid ROI for your business.",
      image: picservice3,
      serviceOffered: [
        "User testing & personas",
        "Wireframing and prototyping",
        "Website design",
        "UI/UX Design",
        "Graphic print design",
        "Animations",
      ],
    },
    {
      id: 4,
      name: "Development services",
      text: " Together, we define, develop, and deliver different design solutions that create an unparalleled competitive advantage for Web3 companies in a sea of competition.",
      image: picservice4,
      serviceOffered: [
        "Website maintenance and hosting",
        "Website building",
        "Platform and data migration",
        "CRM implementation",
        "CRM implementation",
      ],
    },
  ];
  return (
    <>
      {screenSize > 768 ? (
        <div className="">
          <img
            src={picservicesmain}
            className="h-90 w-full"
            alt="Main display "
          />

          <div className="text-lg absolute md:top-40 lg:top-60 left-0 right-0">
            <h1 className="font-bold text-center md:text-3xl lg:text-4xl">
              Make your Digital presence matter
            </h1>
            <p className="py-8 px-10 text-center lg:text-2xl">
              We are a full service technology and digital solutions company
              with over 20 years of experience in industry.
            </p>
            <div className=" flex justify-center ">
              <button className="rounded-full text-sm px-2 py-2 bg-[#DF3A3A] text-white">
                Explore
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <img
            src={picservicesmain}
            className="h-80 w-full"
            alt="Main display "
          />

          <div className="text-sm absolute top-40 ">
            <h1 className="font-bold text-center text-2xl">
              Make your Digital presence matter
            </h1>
            <p className="py-8 px-10">
              We are a full service technology and digital solutions company
              with over 20 years of experience in industry.
            </p>
            <div className=" flex justify-center ">
              <button className="rounded-full text-sm px-2 py-2 bg-[#DF3A3A] text-white">
                Explore
              </button>
            </div>
          </div>
        </div>
      )}

      {screenSize < "768"
        ? services.map((s) => (
            <div className="mx-10">
              <div className="text-sm p-8">
                <h1 className="text-2xl  text-[#DF3A3A] pb-4">{s.name}</h1>
                <p className="">{s.text}</p>
                <ul className="grid grid-rows-3 grid-flow-col gap-2 text-xs text-[#DF3A3A] pt-4">
                  {s.serviceOffered.map((so) => (
                    <span className="flex items-center gap-1">
                      <img src={listIcon} className="w-2 h-1 " alt="listicon" />
                      <li key={s.id}>{so}</li>
                    </span>
                  ))}
                </ul>
              </div>
              <div className="p-10">
                <img src={s.image} className="w-full h-80" alt="section2" />
              </div>
            </div>
          ))
        : services.map((s) =>
            s.id % 2 ? (
              <div className="md:flex flex-row">
                <div className=" basis-1/2 text-sm px-14 lg:py-28 py-10">
                  <h1 className="text-3xl  text-[#DF3A3A] pb-4">{s.name}</h1>
                  <p className="">{s.text}</p>
                  <ul className="grid grid-rows-3 grid-flow-col gap-2 text-xs text-[#DF3A3A] pt-4">
                    {s.serviceOffered.map((so) => (
                      <span className="flex items-center gap-1">
                        <img
                          src={listIcon}
                          className="w-2 h-1 "
                          alt="listicon"
                        />
                        <li key={s.id}>{so}</li>
                      </span>
                    ))}
                  </ul>
                </div>{" "}
                <div className=" basis-1/2 p-10">
                  <img src={s.image} className="w-full h-80" alt="section2" />
                </div>{" "}
              </div>
            ) : (
              <div className="md:flex flex-row">
                <div className=" basis-1/2 p-10">
                  <img src={s.image} className="w-full h-80" alt="section2" />
                </div>{" "}
                <div className="basis-1/2 text-sm px-14 lg:py-28 py-10">
                  <h1 className="text-3xl  text-[#DF3A3A] pb-4">{s.name}</h1>
                  <p className="">{s.text}</p>
                  <ul className="grid grid-rows-3 grid-flow-col gap-2 text-xs text-[#DF3A3A] pt-4">
                    {s.serviceOffered.map((so) => (
                      <span className="flex items-center gap-1">
                        <img
                          src={listIcon}
                          className="w-2 h-1 "
                          alt="listicon"
                        />
                        <li key={s.id}>{so}</li>
                      </span>
                    ))}
                  </ul>
                </div>{" "}
              </div>
            )
          )}
    </>
  );
};

export default Services;
