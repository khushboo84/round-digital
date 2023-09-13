/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import "../about.css";
import homeimg from "../assets/homemain.png";
import layer1 from "../assets/layer1.png";
import layer2 from "../assets/layer2.png";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import serviceicon1 from "../assets/serviceicon1.png";
import serviceicon2 from "../assets/serviceicon2.png";
import serviceicon3 from "../assets/serviceicon3.png";
import serviceimage1 from "../assets/serviceimage1.png";
import serviceimage2 from "../assets/serviceimage2.png";
import bgservice from "../assets/bgserviceimage2.png";
import abouthome from "../assets/aboutHome.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import star from "../assets/star.png";
import globe from "../assets/globe.png";
import google from "../assets/google.png";

const Home = () => {
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

  const divStyle = {
    backgroundImage: `url(${globe})`,
    backgroundSize: "cover",
  };
  return (
    <div className="container xl:w-3/4 mx-auto">
      {/* home page text */}
      <div className="px-8 py-4">
        {/* hero section */}
        <div className="md:flex md:flex-row md:items-center">
          <div className="basis-1/2">
            <h1 className="text-3xl lg:text-5xl px-6 max-md:text-center font-bold">
              Delivering top-notce
              <span className="@apply gradient-text"> Solutions </span>to
              enhance your business.
            </h1>
            <h1 className="text-gray-400 px-6 lg:text-xl max-md:text-center font-bold py-4">
              We recognize the utmost importance of product quality for both
              businesses and consumers. Our meticulously crafted test suites
              offer comprehensive insights and coverage for all quality-related
              endeavors.
            </h1>
            {/* explore button */}
            <div className="max-md:text-center px-6">
              <button className="rounded-full px-6 py-2 bg-[#DF3A3A] text-white ">
                Explore
              </button>
            </div>
          </div>
          {/* image */}
          <div className="basis-1/2">
            <div className="text-center py-10 md:px-20">
              <img
                className="w-full h-[300px] md:w-[500px]"
                src={homeimg}
              ></img>
            </div>
          </div>
        </div>
        {/* layers */}
        {/* <div className="relative">
          <img className="absolute right-0" src={layer1}></img>
          <img className="absolute right-0" src={layer2}></img>
        </div> */}
        {/* users */}
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl px-6 md:pt-32 text-center font-semibold">
            <span className="text-[#DF3A3A]">25K+</span> pleased users from
          </h1>
          <div className=" text-sm flex justify-between items-center flex-row gap-10 md:gap-20 py-4 md:py-6">
            <div>
              <img src={item1} className="md:h-[20px]" />
            </div>
            <div>
              <img src={item2} className="md:h-[30px]" />
            </div>
            <div>
              <img src={item3} className="md:h-[20px]" />
            </div>
            <div>
              <img src={item4} className="md:h-[20px]" />
            </div>
            <div>
              <img src={item5} className="md:h-[30px]" />
            </div>
          </div>
        </div>
        <hr className="shadow-md"></hr>
        {/* Features */}
        <div>
          <h1 className="text-2xl md:text-4xl px-6 md:pt-16 text-center font-bold py-10">
            Awesome
            <span className="@apply gradient-text"> Features </span>
          </h1>
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={icon1} className="md:h-[100px] pb-4" />
              </div>
              <h1 className="text-center font-bold text-sm pb-10">
                Ensure Privacy
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={icon2} className="md:h-[100px] pb-4" />
              </div>
              <h1 className="text-center font-bold text-sm pb-10">
                Easy Sort, Classify and Search
              </h1>
            </div>
            <div className="max-md:hidden flex flex-col justify-center items-center">
              <div>
                {/* <h1 className="max-md:hidden text-sm rounded-full relative top-16 -right-10 bg-red-300">
                New
              </h1> */}
                <img src={icon4} className="h-[100px] pb-4" />
              </div>
              <h1 className="text-center font-bold text-sm pb-10">
                Premium Services
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={icon3} className="md:h-[100px] pb-4" />
              </div>
              <h1 className="text-center font-bold text-sm pb-10">
                Ensuring timely works
              </h1>
            </div>
            <div className="max-md:hidden flex flex-col justify-center items-center">
              <div>
                <img src={icon5} className="h-[100px] pb-4" />
              </div>
              <h1 className="text-center font-bold text-sm pb-10">
                Quality Solutions
              </h1>
            </div>
          </div>
        </div>

        {/* Services we provide */}
        {screenSize < 768 ? (
          <>
            <div>
              <h1 className="text-center pt-10 font-bold text-[#DF3A3A]">
                Services we provide
              </h1>
              <h1 className="text-2xl px-6 text-center font-bold py-4">
                The most premium
                <span className="@apply gradient-text"> Services </span>
              </h1>
              <h1 className="text-gray-400 px-6 text-center  py-4">
                Stay focused and productive with a clean clutter-free note
                space. the flexible ways to organize your notes: hashtags ,
                nested notebooks , pining notes to the top of the note list,
                ect.
              </h1>
              <div className="flex flex-col font-bold">
                <div className="flex flex-row px-6 items-center py-4">
                  <img
                    src={serviceicon1}
                    className="bg-gray-300 rounded-full p-1"
                  ></img>
                  <h1 className="pl-2">Web Development</h1>
                </div>
                <div className="flex flex-row px-6 items-center py-4">
                  <img
                    src={serviceicon2}
                    className="bg-gray-300 rounded-full p-1"
                  ></img>
                  <h1 className="pl-2">IT Services</h1>
                </div>
                <div className="flex flex-row px-6 items-center py-4">
                  <img
                    src={serviceicon3}
                    className="bg-gray-300 rounded-full p-1"
                  ></img>
                  <h1 className="pl-2">Branding</h1>
                </div>
              </div>
              <div className="py-10">
                <div className="flex justify-center items-center">
                  <img src={serviceimage1} />
                </div>
                <h1 className="text-2xl px-6 text-center font-bold py-4">
                  The most premium
                  <span className="@apply gradient-text"> Services </span>
                </h1>
                <h1 className="text-gray-400 px-6 text-center  py-4">
                  Stay focused and productive with a clean clutter-free note
                  space. the flexible ways to organize your notes: hashtags ,
                  nested notebooks , pining notes to the top of the note list,
                  ect.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </h1>

                <div className="flex justify-center items-center ">
                  <img src={serviceimage2} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-center font-bold @apply gradient-text">
                  About Us
                </h1>
                <h1 className="text-gray-400 px-6 text-center  py-4">
                  As a distinguished testing service provider, we possess
                  expertise in various testing domains, with a particular
                  emphasis on BFSI and telecom industries. Our reputation as the
                  preferred partner for numerous companies operating in the
                  financial services and telecom sectors speaks volumes. With
                  extensive experience gained from multiple engagements in
                  well-established markets, our Independent Validation & Testing
                  Solutions & Services are purposefully designed to empower
                  organizations in achieving essential application quality
                  benchmarks, all while minimizing costs, time, and future
                  maintenance requirements.
                </h1>
                <div className="flex justify-center items-center">
                  <img src={abouthome} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* section 1 */}
            <div className="pt-32 flex flex-row">
              <div className="basis-1/2 pl-12">
                <img src={serviceimage1} />
              </div>
              <div className="basis-1/2 ">
                <h1 className=" px-8 pt-4 font-bold text-[#DF3A3A]">
                  Services we provide
                </h1>
                <h1 className="text-4xl px-8 font-bold py-2">
                  The most premium
                  <span className="@apply gradient-text"> Services </span>
                </h1>
                <h1 className="text-gray-400 text-lg px-8 py-2">
                  Stay focused and productive with a clean clutter-free note
                  space. the flexible ways to organize your notes: hashtags ,
                  nested notebooks , pining notes to the top of the note list,
                  ect.
                </h1>
                <div className="flex flex-col px-8 font-semibold">
                  <div className="flex flex-row items-center  py-1">
                    <img
                      src={serviceicon1}
                      className="bg-gray-300 rounded-full p-1"
                    ></img>
                    <h1 className="pl-2">Web Development</h1>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <img
                      src={serviceicon2}
                      className="bg-gray-300 rounded-full p-1"
                    ></img>
                    <h1 className="pl-2">IT Services</h1>
                  </div>
                  <div className="flex flex-row items-center py-1">
                    <img
                      src={serviceicon3}
                      className="bg-gray-300 rounded-full p-1"
                    ></img>
                    <h1 className="pl-2">Branding</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* section 2 */}
            <div className="py-20 flex flex-row">
              <div className="basis-1/2">
                <h1 className="text-4xl px-10  font-bold py-4">
                  The most premium
                  <span className="@apply gradient-text"> Services </span>
                </h1>
                <h1 className="text-gray-400 px-10  lg:text-lg py-1">
                  Stay focused and productive with a clean clutter-free note
                  space. the flexible ways to organize your notes: hashtags ,
                  nested notebooks , pining notes to the top of the note list,
                  ect.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </h1>
              </div>
              <div className="basis-1/2">
                <div
                  className="pt-20 flex justify-center items-center "
                  // style={divStyle}
                >
                  <img src={serviceimage2} />
                </div>
              </div>
            </div>
            {/* about */}
            <div className="flex flex-row">
              <div className="basis-1/2 flex justify-center items-center">
                <img src={abouthome} className="h-[400px]" />
              </div>
              <div className="basis-1/2 ">
                <h1 className="text-4xl text-center font-bold @apply gradient-text">
                  About Us
                </h1>
                <h1 className="text-gray-400 px-6 lg:text-lg  py-4">
                  As a distinguished testing service provider, we possess
                  expertise in various testing domains, with a particular
                  emphasis on BFSI and telecom industries. Our reputation as the
                  preferred partner for numerous companies operating in the
                  financial services and telecom sectors speaks volumes. With
                  extensive experience gained from multiple engagements in
                  well-established markets, our Independent Validation & Testing
                  Solutions & Services are purposefully designed to empower
                  organizations in achieving essential application quality
                  benchmarks, all while minimizing costs, time, and future
                  maintenance requirements.
                </h1>
              </div>
            </div>
          </>
        )}

        {/* Testimonials */}
        {screenSize < 768 ? (
          <div>
            <h1 className="text-2xl md:text-4xl px-6 md:pt-16 text-center font-bold py-10 @apply gradient-text">
              Testimonials
            </h1>
            <div className="sm:px-14" style={divStyle}>
              {/* card */}
              <div className=" px-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                <div className="flex justify-center items-center px-4 ">
                  <img src={user1} className="w-[150px]" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <img src={star} />
                  </div>
                  <h1 className="text-[12px] py-4">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </h1>
                  <h1 className="text-[8px]">
                    JURGEN K. / Senior Marketing At Brator
                  </h1>
                </div>
              </div>
              {/* card 2*/}
              <div className=" px-4 ml-14  mt-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                <div className="flex justify-center items-center px-4 ">
                  <img src={user2} className="w-[150px]" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <img src={star} />
                  </div>
                  <h1 className="text-[12px] py-4">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </h1>
                  <h1 className="text-[8px]">
                    JURGEN K. / Senior Marketing At Brator
                  </h1>
                </div>
              </div>
              {/* card 3 */}
              <div className=" px-4  mt-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                <div className="flex justify-center items-center px-4 ">
                  <img src={user3} className="w-[150px]" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <img src={star} />
                  </div>
                  <h1 className="text-[12px] py-4">
                    “You can even send emails to Evernote and gatherall of the
                    things you need in a single place.”
                  </h1>
                  <h1 className="text-[8px]">
                    JURGEN K. / Senior Marketing At Brator
                  </h1>
                </div>
              </div>

              {/* end */}
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row py-20">
              <div className="basis-1/2">
                <h1 className="text-2xl md:text-4xl px-6  font-bold  @apply gradient-text">
                  Testimonials
                </h1>
                <h1 className="text-gray-400 px-6 py-4 lg:text-lg ">
                  Rounddigital is loved from thoudsands customer worldwide and
                  get trusted from big companies.
                </h1>
                <img src={google} className="px-10 py-2 h-[70px]" />
                <h1 className="text-4xl px-10 text-blue-700 font-bold">
                  4.8/5
                </h1>
                <img src={star} className="px-10" />
                <h1 className="text-sm px-10">Based on 1,258 reviews</h1>
              </div>
              <div className="basis-1/2 " style={divStyle}>
                <div className="lg:ml-[30%]">
                  {/* card */}
                  <div className=" px-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                    <div className="flex justify-center items-center px-4 ">
                      <img src={user1} className="w-[150px]" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <img src={star} />
                      </div>
                      <h1 className="text-[12px] py-4">
                        “You can even send emails to Evernote and gatherall of
                        the things you need in a single place.”
                      </h1>
                      <h1 className="text-[8px]">
                        JURGEN K. / Senior Marketing At Brator
                      </h1>
                    </div>
                  </div>
                  {/* card 2*/}
                  <div className=" px-4 ml-14  mt-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                    <div className="flex justify-center items-center px-4 ">
                      <img src={user2} className="w-[150px]" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <img src={star} />
                      </div>
                      <h1 className="text-[12px] py-4">
                        “You can even send emails to Evernote and gatherall of
                        the things you need in a single place.”
                      </h1>
                      <h1 className="text-[8px]">
                        JURGEN K. / Senior Marketing At Brator
                      </h1>
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className=" px-4  mt-4 py-1 rounded-lg shadow-md flex flex-row bg-white w-[300px]">
                    <div className="flex justify-center items-center px-4 ">
                      <img src={user3} className="w-[150px]" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <img src={star} />
                      </div>
                      <h1 className="text-[12px] py-4">
                        “You can even send emails to Evernote and gatherall of
                        the things you need in a single place.”
                      </h1>
                      <h1 className="text-[8px]">
                        JURGEN K. / Senior Marketing At Brator
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-4xl px-6 md:pt-16 text-center font-bold py-10 @apply gradient-text">
                Join into our Hub
              </h1>
              <div className=" flex flex-row bg-[#E14242] text-white py-10">
                <div className="basis-1/2 px-12">
                  <h1 className="text-sm">Why Choose us</h1>
                  <h1 className="text-4xl font-bold py-4">
                    Because we provide most premium services
                  </h1>
                  <h1 className="text-md">
                    Mean if he they been no hold mr. Is at much do made. Latter
                    person am secure of estate genius at.
                  </h1>
                </div>
                <div className="basis-1/2 ">
                  <div className="flex flex-col gap-4 py-8 justify-center items-center text-white">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="px-6 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Contact"
                      className="px-6 py-2"
                    />
                    <button className="px-6  rounded-full text-black bg-white ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
