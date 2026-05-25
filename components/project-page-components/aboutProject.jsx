import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWindows,
} from "react-icons/fa";
import "./aboutProject.css";
import Button from "../buttons-component/solidbutton";
import { Link, useParams } from "react-router-dom";
import { showCase } from "../../constants/showcase";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { scrollToTop } from "../../constants/scrollToTop";
import { useEffect } from "react";
const AboutProject = ({ heroImageSrc, attachment }) => {
  const param = useParams();
  const project = showCase[param.id - 1];
  useEffect(() => {
    document.title = `${project.city} - GIS LIMITED`;
  }, [param]);
  return (
    <div className="overflow-hidden">
      <div
        className={`h-screen relative  ${heroImageSrc} ${attachment} bg-top bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${project.coverImage})`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/50">
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-8xl max-lg:text-6xl max-md:text-5xl  font-semibold text-white"
          >
            {project.city}
          </motion.h1>
        </div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="flex mx-auto p-10 max-sm:px-5 gap-16 max-sm:gap-14 max-md:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-5"
        >
          <h1 className="text-5xl font-bold">{project.city}</h1>
          <p className="text-xl">{project.shortDescription}</p>
          <Link to={"/contact"} onClick={scrollToTop}>
            <Button
              content={"Contact Us"}
              fontSize={"text-xl max-md:text-xl"}
              padding={"px-4 py-2"}
            />
          </Link>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeRight}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="">
            <h2 className="text-xl mb-2 ">Client</h2>
            <h3 className="text-xl opacity-80">{project.client}</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Start Date</h2>
            <h3 className="text-xl opacity-80">{project.start_date}</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">End Date</h2>
            <h3 className="text-xl opacity-80">{project.end_date}</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Services</h2>
            <h3 className="text-xl opacity-80">{project.services} </h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Share on</h2>
            <div className="text-xl text-red-500 flex gap-3">
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaFacebookF />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaInstagram />
              </a>
              <a
                style={{ borderWidth: 1 }}
                className="w-12 h-12  border-red-500 rounded-full  flex justify-center  items-center"
                href=""
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* description */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeRight}
        viewport={{ once: true, amount: 0.05 }}
        style={{ maxWidth: 1200 }}
        className="text-lg mx-auto p-10 max-sm:px-5 max-sm:pt-5  max-sm:mb-8 mb-20"
      >
        <p>
       {project.info1}
        </p>
        <div className="p-5 px-10 max-sm:px-4">
          <h2 className="text-2xl text-center font-semibold p-5 max-sm:p-3 border-l-4 border-red-500">
           {project.title1}
          </h2>
        </div>
        <p>
          {project.info2}
        </p>
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="text-2xl font-semibold">
            {project.title2}
          </h2>
          <p>
           {project.info3}
          </p>
          <p>
            {project.info4}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {project.moreImages.map((e, i) => {
          return (
            <motion.div
              key={i}
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                className={"w-full object-cover"}
                style={{ height: 420 }}
                src={e}
                alt="e"
              />
            </motion.div>
          );
        })}
      </div>
      <div className=" flex">
        <Link
          onClick={scrollToTop}
          to={project.prevHref}
          id="prev-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <FaArrowLeft className="prev-arrow transition-all" />
          <p className="transition-all">Prev post</p>
        </Link>
        <div className="w-1/5 py-7 border-l-2 border-r-2 flex justify-center items-center">
          <FaWindows />
        </div>
        <Link
          onClick={scrollToTop}
          to={project.nextHref}
          id="next-btn"
          className="w-2/5  hover:text-red-500  py-7 flex justify-center items-center gap-3"
        >
          <p className="transition-all">Next post</p>
          <FaArrowRight className="next-arrow transition-all " />
        </Link>
      </div>
     
    </div>
  
);
};

export default AboutProject;
