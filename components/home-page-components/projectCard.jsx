import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
const ProjectCard = ({ src, title, href }) => {
  return (
    <div
      style={{ height: 350 }}
      className="card  w-full relative overflow-hidden rounded-lg"
    >
      <img
        src={src}
        className="absolute w-full h-full object-cover object-center hover transition-all duration-500"
        alt=""
      />
      <div className="absolute w-full h-full bg-black/50 "></div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.toLeft}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute w-full h-full bg-white origin-left z-20 "
      >
        <div className=""></div>
      </motion.div>
      <Link
        onClick={scrollToTop}
        to={`/projects/${href}`}
        className="absolute w-full h-full block "
      ></Link>

      <div className="flex flex-col gap-3  text-white absolute bottom-6 left-6 right-6 ">
        <Link
          onClick={scrollToTop}
          to={`/projects/${href}`}
          target="_blank"
          className="text-xl font-medium hover:text-red-500  transition-all"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
