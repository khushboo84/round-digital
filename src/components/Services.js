import React from "react";
import Navbar from "./Navbar";
import picservice1 from "../assets/services-1.jfif";
import listIcon from "../assets/listIcon.png";
import picservice3 from "../assets/services-3.png";
import picservice2 from "../assets/services-2.png";
import picservice4 from "../assets/services-4.png";
import picservicesmain from "../assets/services-main.png";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <div className="absolute top-[30%] xl:left-[25%] lg:left-[15%]">
            <h1 className="font-bold text-5xl text-center">
              Make your Digital presence matter
            </h1>
            <p className="py-8">
              We are a full service technology and digital solutions company
              with over 20 years of experience in industry.
            </p>
            <button className="rounded-full px-8 py-2 mx-80 bg-[#DF3A3A] text-white">
              Explore
            </button>
          </div>
          <img src={picservicesmain} className="w-full" alt="Main display " />
        </div>
        {/* 1 */}
        <div className="flex flex-row md:px-20  md:py-16 px-10 py-8">
          <div className="basis-1/2 py-40 px-10">
            <h1 className="text-3xl  text-[#DF3A3A] pb-4">Strategy services</h1>
            <p className="pb-8 pr-4">
              We fuel the growth of purpose driven brands through strategy
              activation, design empowerment, and market adoption. From
              cultivating new ideas to connecting the dots for customers or
              users, these are our core principles.
            </p>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 text-sm text-[#DF3A3A]">
              <li>Market and competitive research</li>
              <li>CRM and sales funnel strategy</li>
              <li>Brand positioning and messaging</li>
              <li>Automation</li>
              <li>UX Consulting</li>
              <li>Marketing Strategy</li>
            </ul>
          </div>
          <div className="basis-1/2 p-10">
            <img src={picservice1} className="h-[34rem]" alt="section1" />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-row md:px-20  md:py-10 px-10 py-8">
          <div className="basis-1/2 p-10">
            <img src={picservice2} className="h-[34rem]" alt="section2" />
          </div>
          <div className="basis-1/2 py-40 px-10">
            <h1 className="text-3xl  text-[#DF3A3A] pb-4">
              Marketing services
            </h1>
            <p className="pb-8 pr-4">
              Reality is a new reality. With a well-built digital strategy we
              leverage this stellar tech to propel your brand forward.
            </p>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 text-sm text-[#DF3A3A]">
              <li>Digital marketing campaigns</li>
              <li>Lead nurturing</li>
              <li>Marketing personas</li>
              <li>Content creation</li>
              <li>Branding</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-row md:px-20  md:py-10 px-10 py-8">
          <div className="basis-1/2 py-40 px-10">
            <h1 className="text-3xl  text-[#DF3A3A] pb-4">Design services</h1>
            <p className="pb-8 pr-4">
              We design digital platforms to empower users and your brand's
              tribe. This deep understanding of what motivates them allows us to
              forge and fine-tune the most powerful strategies that generate
              rapid ROI for your business.
            </p>
            <ul className="grid grid-rows-3 grid-flow-col gap-2 text-sm text-[#DF3A3A]">
              <li>User testing & personas</li>
              <li>Wireframing and prototyping</li>
              <li>Website design</li>
              <li>UI/UX Design</li>
              <li>Graphic print design</li>
              <li>Animations</li>
            </ul>
          </div>
          <div className="basis-1/2 p-10">
            <img src={picservice3} className="h-[34rem]" alt="section3" />
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-row md:px-20  md:py-10 px-10 py-8">
          <div className="basis-1/2 p-10">
            <img src={picservice4} className="h-[34rem]" alt="section4" />
          </div>
          <div className="basis-1/2 py-40 px-8">
            <h1 className="text-3xl  text-[#DF3A3A] pb-4">
              Development services
            </h1>
            <p className="pb-8 pr-4">
              Together, we define, develop, and deliver different design
              solutions that create an unparalleled competitive advantage for
              Web3 companies in a sea of competition.
            </p>
            <ul className="grid grid-rows-2 grid-flow-col gap-2 text-sm text-[#DF3A3A]">
              <li>Website maintenance and hosting</li>
              <li>Website building</li>
              <li>Platform and data migration</li>
              <li>CRM implementation</li>
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Services;
