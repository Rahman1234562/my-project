import React from 'react';
import classes from "@/styles/blogs.module.css";
import Link from 'next/link';


const Blogs = () => {
  return (
    <div className={classes.Blogs}>
        <h2 className={classes.popular}>Popular Blogs</h2>
        <Link href={"/blogPost/learn-javaScript"}> <h3 className={classes.main2}>How to learn javaScript in 2023?</h3></Link>
        <p>javaScript is a language used for web logic</p>
        <h3 className={classes.main2}>How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>
        <h3 className={classes.main2}>How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>

    </div>
  )
}

export default Blogs;