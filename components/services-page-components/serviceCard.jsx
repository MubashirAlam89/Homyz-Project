import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
const ServiceCard = ({ id, title, imgSrc, iconSrc, brief }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 470 }}
      className="service-card w-full relative "
    >
      <img
        src={imgSrc}
        className="w-full h-full absolute object-cover"
        alt={imgSrc}
      />
      <div className="w-full h-full absolute bg-black/50"></div>
      <div className="it-container px-4 w-full h-full absolute text-white hover:bg-red-500 transition-all duration-500 flex flex-col justify-center items-center gap-2">
        <img src={iconSrc} className="w-16 " alt={iconSrc} />
        <h2 className="service-heading text-3xl title-font font-semibold -mb-36 transition-all duration-200 ">
          {title}
        </h2>
        <p className="it-content text-xl mt-10 max-w-md opacity-0  text-center  scale-y-0 transition-all duration-75 origin-top">
          {brief}
        </p>
        <Link
          to={`/services/${id}`}
          onClick={scrollToTop}
          className="it-content text-xl mt-10 font-semibold  opacity-0 scale-y-0 transition-all duration-75 origin-top hover:text-black"
        >
          <div className="flex justify-between gap-3 items-center">
            <p className="duration-150">Read More </p>
            <FaArrowRight className="duration-150" style={{ marginTop: 2 }} />
          </div>
        </Link>
      </div>
     
    </motion.div>
  );
};

export default ServiceCard;
