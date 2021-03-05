import { motion } from 'framer-motion';
function BlogPost(props){
    const parser = new DOMParser()
    const doc = parser.parseFromString(props.body,"text/html");
    return(
        <motion.div className="main-content" initial={{y:"-100vh"}} animate={{y:0}} exit={{x:"-100vw"}} transition={{duration:0.3}} >
        <div className="main-container" dangerouslySetInnerHTML={{ __html: props.body }}>
        </div>
      </motion.div>
    )
}

export default BlogPost