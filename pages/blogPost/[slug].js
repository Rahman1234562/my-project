import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import classes from '../../styles/BlogPost.module.css'


const Slug = () => {
  const [blog, setBlog] = useState();
    const router = useRouter();
        
    useEffect(() => {
      if(!router.isReady) return;
      const {slug} = router.query;
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
        .then((a) => {
          return a.json();
        })
        .then((parsed) => {
          setBlog(parsed);
        });
    }, [router.isReady]);

   
  return (
    <div className={classes.blogsPost}>
        <h1>{blog && blog.title}</h1>
        <div className={classes.para}>{blog && blog.content}</div>
    </div>
  )
}

export default Slug;