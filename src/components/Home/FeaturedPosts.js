import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  // Function to get random unique blogs
  const getRandomBlogs = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const featuredBlogs = getRandomBlogs(sortedBlogs, 3);
  const [featuredBlogOne, featuredBlogTwo, featuredBlogThree] = featuredBlogs;

  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={featuredBlogOne} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={featuredBlogTwo} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={featuredBlogThree} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
