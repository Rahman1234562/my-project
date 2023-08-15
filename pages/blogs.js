import React, { useEffect, useState } from "react";
import classes from "@/styles/blogs.module.css";
import Link from "next/link";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");
    fetch("http://localhost:3000/api/blog")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed)
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={classes.main4}>
      {Blogs.map((blogitem) => {
        return<div key={blogitem.title}>
        <Link href={"/blogPost/learn-javaScript"}>
          <h3 className={classes.main2}>{blogitem.title}</h3></Link>
        <p>javaScript is a language used for web logic</p>
      </div>
      })}
      
      <div>
        <h3 className={classes.main2}>How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>
      </div>
      <div>
        <h3 className={classes.main2}>How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>
      </div>
    </div>
  );
};

export default Blogs;
