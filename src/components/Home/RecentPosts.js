"use client";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs = [] }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  // Memoize the random selection to avoid unnecessary recalculations
  const getRandomBlogs = useMemo(() => {
    return (arr, num) => {
      if (!arr || arr.length === 0) return [];
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.min(num, arr.length));
    };
  }, []);

  useEffect(() => {
    setRandomBlogs(getRandomBlogs(blogs, 6));
  }, [blogs, getRandomBlogs]);

  // Show loading state if no blogs are available yet
  if (randomBlogs.length === 0) {
    return (
      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
        <div className="w-full flex justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Recent Posts
          </h2>
          <Link
            href="/categories/all"
            className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
          >
            view all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="col-span-1 row-span-1 relative h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {randomBlogs.map((blog) => (
          <article key={blog._id || blog.id || blog.slug} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;