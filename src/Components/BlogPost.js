import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import './blogpost.css'
import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';
function BlogPost(props){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className={isMobile ? "main-container blog-mobile":"main-container"}>
          <div className="blog-top">
            <p className="blog-author">By {props.author}</p>
            <p className="blog-date">{props.date}</p>
          </div>
          <h2 className="main-title">{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
        </div>
        <DiscussionEmbed
        className="disquss-embed"
        shortname='priconne-tierlist'
        config={
            {
            url:`https://zelayagonzalo.github.io/${props.url}`,
            identifier: props.url,
            title: props.title,
            language: 'en_US' //e.g. for Traditional Chinese (Taiwan)	
            }
         }
        />
      </motion.div>
    )
}

export default BlogPost