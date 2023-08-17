import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Blog";

const Post = () => {
  let { id } = useParams();
  const ID = parseInt(id);

  const Post = blogPosts.filter((blog) => blog.id === ID);

  return (
    <div>
      <ul>
        {Post.map((post) => (
          <>
            <div className="pt-4 px-4 md:px-10 lg:px-36 xl:px-52">
              <button className="text-white text-xs md:text-sm lg:text-md xl:text-lg font-bold bg-red-500 p-1 rounded">
                {post.genre}
              </button>
              <h1 className="font-bold text-lg py-4 md:text-xl lg:text-2xl xl:text-3xl">
                {post.desc}
              </h1>
              <div className="flex flex-row row text-xs">
                <span className="">
                  {" "}
                  <img
                    src={post.authorImage}
                    alt="blogcard1"
                    className=" basis-1/4 rounded-full h-10 "
                  />
                </span>
                <span className="py-4 basis-2/4 px-2 font-bold text-gray-500  md:text-sm lg:text-md xl:text-lg">
                  {post.authorName}
                </span>
                <span className=" py-4 basis-2/4 font-bold text-gray-500  md:text-sm lg:text-md xl:text-lg">
                  {post.date}
                </span>
              </div>
              <img
                src={post.image}
                alt="temp"
                className="w-full h-60 p-1 pb-4 xl:h-96"
              ></img>
              <p className="p-4 md:text-md lg:text-ld xl:text-xl">
                {post.detailedDesc}
                <br></br>
                {post.detailedDesc}
                <br></br>
                {post.detailedDesc}
              </p>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Post;
