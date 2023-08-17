import React, { useEffect, useState } from "react";
import classes from "@/styles/blogs.module.css";
import Link from "next/link";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={classes.main4}>
      {blogs.map((blogitem) => {
        return (
          <div key={blogitem.slug}>
            <Link href={`/blogPost/${blogitem.slug}`}>
              <h3 className={classes.main2}>{blogitem.title}</h3>
            </Link>
            <p className={classes.mainpara}>
              {blogitem.content.substr(0, 140)}...{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
