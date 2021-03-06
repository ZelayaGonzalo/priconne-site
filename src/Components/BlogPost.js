import { motion } from 'framer-motion';
import './blogpost.css'
function BlogPost(props){
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container">
          <h2 className="main-title">{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
        </div>
      </motion.div>
    )
}

export default BlogPost