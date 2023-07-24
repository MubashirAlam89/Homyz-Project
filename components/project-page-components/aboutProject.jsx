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
    document.title = `${project.city} - Homyz `;
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
          <h1 className="text-8xl max-lg:text-6xl max-md:text-5xl  font-semibold text-white">
            {project.city}
          </h1>
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
          <h1 className="text-4xl font-bold">{project.city}</h1>
          <p className="text-xl">{project.shortDescription}</p>
          <Button
            content={"Contact Us"}
            fontSize={"text-2xl max-md:text-xl"}
            padding={"px-8  py-3 max-md:px-6 max-md:py-2"}
          />
          {/* <button className="bg-red-500 border-2 text-white border-red-500 text-2xl rounded-md px-8 py-3 duration-300 hover:bg-white hover:text-red-500 transition-all">
            Visie Site
          </button> */}
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
            <h3 className="text-xl opacity-80">Insight Studio</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Date</h2>
            <h3 className="text-xl opacity-80">December 7, 2022</h3>
          </div>
          <div className="">
            <h2 className="text-xl mb-2 ">Services</h2>
            <h3 className="text-xl opacity-80">Art Direction, Website</h3>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          dolorum enim, veniam totam eius tempora facere assumenda! Iste quod,
          assumenda totam fugiat omnis, similique maxime magnam nulla inventore
          et suscipit sapiente? Exercitationem assumenda mollitia neque quaerat
          blanditiis et consectetur necessitatibus.
        </p>
        <div className="p-5 px-10 max-sm:px-4">
          <h2 className="text-2xl text-center font-semibold p-5 max-sm:p-3 border-l-4 border-red-500">
            Recognised and awarded on multiple occasions for producing
            consistently outstanding products
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe
          iste sed quibusdam ad voluptatem optio? Soluta veritatis dicta
          consectetur numquam quibusdam voluptate est voluptatum tenetur?
          Debitis cum quo nostrum suscipit qui id odio, doloribus voluptates
          vero vitae quidem facilis cupiditate libero minima impedit quod natus
          expedita quibusdam necessitatibus sapiente ratione pariatur, animi
          error. Excepturi voluptates minus iusto explicabo assumenda suscipit,
          et laboriosam nemo, quia blanditiis aut atque exercitationem dolorem.
        </p>
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="text-2xl font-semibold">
            The path towards customer-centricity
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            asperiores quidem maiores odio quaerat totam expedita reiciendis,
            nobis ducimus eius, mollitia eaque esse dignissimos ipsum ex sit
            laudantium tempore! Illo velit deserunt nulla hic modi rem
            architecto nesciunt cum magnam, optio, dolore aut porro vel
            voluptatibus eius sed inventore ad dignissimos perferendis error
            ipsam, in unde consequuntur? Totam incidunt nulla, odit repellendus
            doloribus numquam error commodi laboriosam, facilis vel quo quaerat
            repudiandae earum. Distinctio at voluptatem, magni blanditiis
            pariatur deserunt nobis modi quaerat voluptates sit. Quam dolores
            quos nihil tenetur eos vero autem sint dolorem eius. Tempora
            molestiae earum ducimus?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            asperiores quidem maiores odio quaerat totam expedita reiciendis,
            nobis ducimus eius, mollitia eaque esse dignissimos ipsum ex sit
            laudantium tempore! Illo velit deserunt nulla hic modi rem
            architecto nesciunt cum magnam, optio, dolore aut porro vel
            voluptatibus eius sed inventore ad dignissimos perferendis error
            ipsam, in unde consequuntur? Totam incidunt nulla, odit repellendus
            doloribus numquam error commodi laboriosam, facilis vel quo quaerat
            repudiandae earum. Distinctio at voluptatem, magni blanditiis
            pariatur deserunt nobis modi quaerat voluptates sit. Quam dolores
            quos nihil tenetur eos vero autem sint dolorem eius. Tempora
            molestiae earum ducimus?
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
