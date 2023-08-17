import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import classes from '../../styles/BlogPost.module.css'


const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

   
  return (
    <div className={classes.blogsPost}>
        <h1>{blog && blog.title}</h1>
        <div className={classes.para}>{blog && blog.content}</div>
    </div>
  )
}

export async function getServerSideProps(context){
  // console.log(context.query)
  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()


return{
  props:{myBlog},
}
} 

export default Slug;