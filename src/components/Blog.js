/* eslint-disable no-restricted-globals */
import React from "react";
import { useState, useEffect } from "react";
import blogimg from "../assets/blogimg.png";
import blog1 from "../assets/blog-1.jfif";
import blogmainimg from "../assets/blogmainimg.png";
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra1cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 2,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra2cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 3,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra3cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 4,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra4cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 5,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra5cey Wilson",
    date: "10th August 2023",
    genre: "Science",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 6,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra6cey Wilson",
    date: "10th August 2023",
    genre: "Science",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 7,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra7cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 8,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra8cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
  {
    id: 9,
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: blogimg,
    authorImage: blog1,
    authorName: "Tra9cey Wilson",
    date: "10th August 2023",
    genre: "Technology",
    detailedDesc:
      "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
  },
];

const Blog = () => {
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

  return (
    <>
      <div className="container mx-auto xl:w-3/4">
        <div className=" pl-[5%] pr-[5%]">
          <img
            src={blogmainimg}
            alt="Main"
            className="w-full h-80 md:h-96 lg:h-4/5  "
          ></img>
          <div className="card p-12 ">
            <div className="h-3/4 w-full  border-2 border-gray-200 rounded shadow-lg relative bottom-40 bg-white -mb-48 md:w-1/2 ">
              <div className="p-4">
                <button className="text-white text-xs  bg-red-600 p-1 rounded">
                  Technology
                </button>
                <h3 className="font-bold text-lg py-4 lg:text-2xl xl:text-3xl">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h3>
                <div className="flex flex-row row text-xs">
                  <span className="">
                    {" "}
                    <img
                      src={blog1}
                      alt="blogcard1"
                      className=" basis-1/4 rounded-full h-10 "
                    />
                  </span>
                  <span className="py-4 basis-2/4 px-2 font-bold text-gray-500">
                    Tracey Wilson
                  </span>
                  <span className=" py-4 basis-2/4 font-bold text-gray-500">
                    10th August 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {screenSize < 768 ? (
          blogPosts.map((blog) => (
            <Link to={`Post/${blog.id}`}>
              <div className="card p-6 ">
                <div className="h-3/4 w-full  border-2 border-gray-200 rounded">
                  <div className="p-4" key={blog.id}>
                    <img
                      src={blog.image}
                      alt="temp"
                      className="w-full h-60 p-1 pb-4"
                    ></img>
                    <button className="text-red-900 text-xs font-bold bg-red-100 p-1 rounded">
                      {blog.genre}
                    </button>
                    <h1 className="font-bold text-lg py-4">{blog.desc}</h1>
                    <div className="flex flex-row row text-xs">
                      <span className="">
                        {" "}
                        <img
                          src={blog.authorImage}
                          alt="blogcard1"
                          className=" basis-1/4 rounded-full h-10 "
                        />
                      </span>
                      <span className="py-4 basis-2/4 px-2 font-bold text-gray-500">
                        {blog.authorName}
                      </span>
                      <span className=" py-4 basis-2/4 font-bold text-gray-500">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-10">
            {blogPosts.map((blog) => (
              <Link to={`Post/${blog.id}`}>
                <div className="card p-4  ">
                  <div className="h-full  border-2 border-gray-200 rounded-md">
                    <div className="p-4" key={blog.id}>
                      <img
                        src={blog.image}
                        alt="temp"
                        className="w-full h-80 p-1 pb-4"
                      ></img>
                      <button className="text-red-900 text-xs font-bold bg-red-100 p-1 rounded">
                        {blog.genre}
                      </button>
                      <h1 className="font-bold text-lg py-4">{blog.desc}</h1>
                      <div className="flex flex-row row text-xs">
                        <span className="">
                          {" "}
                          <img
                            src={blog.authorImage}
                            alt="blogcard1"
                            className=" basis-1/4 rounded-full h-10 "
                          />
                        </span>
                        <span className="py-4 basis-2/4 px-2 font-bold text-gray-500">
                          {blog.authorName}
                        </span>
                        <span className=" py-4 basis-2/4 font-bold text-gray-500">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
