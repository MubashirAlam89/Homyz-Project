import "./section.css";
import { Link } from "react-router-dom";
import Button from "../buttons-component/solidbutton";
import { scrollToTop } from "../../constants/scrollToTop";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
const Section = ({ url, title, desc, href, attachment }) => {
  return (
    <div
      className={`h-screen flex   ${attachment} bg-top relative bg-no-repeat bg-cover  items-center`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/50 "></div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.zoomOut}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col max-w-lg ml-28 max-lg:ml-10 max-sm:mx-auto max-sm:px-5  text-white items-start gap-6 relative  w-fit max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:text-center "
      >
        <h1 className="text-6xl max-sm:text-[42px] font-semibold">{title}</h1>
        <p className="text-2xl  max-sm:w-full">{desc}</p>
        <Link onClick={scrollToTop} to={href}>
          <Button
            content={"See More"}
            fontSize={"text-2xl"}
            padding={"px-8  py-3 max-sm:py-2 max-sm:px-5"}
          />
        </Link>
      </motion.div>
      <div className="fixed bottom-0 right-0 m-4">
        <Link
          to="https://wa.me/+2547"
          target="_blank"
          class="whatsapp-popup"
          className="flex items-center"
        >
          <FaWhatsapp
            size={50}
            className="text-4xl text-green-500 animate-pulse"
          />
        </Link>
      </div>
    </div>
  );
};

export default Section;
