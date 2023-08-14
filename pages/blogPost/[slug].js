import { useRouter } from 'next/router';
import React from 'react';
import classes from '../../styles/BlogPost.module.css'


const Slug = () => {
    const router = useRouter();
    const {slug} = router.query;
   
  return (
    <div className={classes.blogsPost}>
        <h1>Title of the page {slug}</h1>
        <div className={classes.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum consequuntur dolore dolor optio dignissimos ducimus in delectus laboriosam voluptatem perferendis nemo, minima omnis necessitatibus exercitationem impedit cum natus rem atque repudiandae modi sequi earum! Quos explicabo itaque ullam vel, inventore odio dicta aperiam, adipisci veritatis modi sunt provident officiis rem quaerat pariatur? Exercitationem et ad incidunt reiciendis sunt velit aspernatur dolores aliquid ullam nostrum, iure assumenda, similique debitis illo delectus quam vero recusandae ratione, quidem maiores optio deserunt cumque. Minima aspernatur accusantium nesciunt repudiandae deleniti corporis officia, eaque molestias excepturi, ea dignissimos perferendis. Dignissimos dolore aspernatur quia odio amet.</div>
    </div>
  )
}

export default Slug