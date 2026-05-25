import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";
import { FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[url(/services-page-images/service-hero-bg.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Who We Are</h1>
            <p className="text-xl max-w-md">
              A Kenyan owned Development Consultancy firm established on
              Wednesday 11th April, 2014 and registered under the Companies Act,
              cap 486 of the Laws of Kenya under Registration Number
              CPR/2014/139005.The firm has qualified experience in the
              preparation of County Spatial Plans, Integrated Urban Development
              Plans, Digital topographical Mapping and development of Customized
              Web-based GIS Solutions.
            </p>
          </div>
          <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">20+</h2>
              <p className="text-lg">Completed Projects</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">10+</h2>
              <p className="text-lg">Clients</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                What we offer
              </h1>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Services"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </div>
            <div className="w-full">
              <img
                src="/about-page-images/what-we-do.jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                • Urban Planning and Development
              </h2>
              <p className="text-xl mt-2">
                The strategic process of designing and shaping cities and towns
                to enhance their physical, social, and economic environments,
                focusing on sustainable growth and community well-being
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                • Institutional Development and Governance
              </h2>
              <p className="text-xl mt-2">
                The enhancement and strengthening of institutional frameworks
                and governance structures to improve efficiency, accountability,
                and transparency, facilitating better decision-making and
                service delivery in public and private sectors
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                • Project Management
              </h2>
              <p className="text-xl mt-2">
                The discipline of planning, organizing, motivating, and
                controlling resources to achieve specific goals within a defined
                timeline and budget, applicable across various fields including
                construction, IT, and product development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              What we offer
            </h1>
            <p className="text-xl mt-5">
              We solve our clients’ challenges by providing on-time and
              on-budget GIS services and technical support. Our goal is to
              ensure that every client is completely satisfied with the products
              and services that we provide.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Our Projects</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                20+
              </h1>
              {/* <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div> */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/we-focus.jpg" alt="" />
            </div>

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full ">
              <h1 className="font-semibold ">We focus on </h1>
              <h1 className="font-semibold  text-red-500">
                Providing solutions.
              </h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-3 max-md:grid-cols-1 grid-rows-1 max-md:grid-rows-3 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold"></h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Our Mission
              </h2>
              <p className="mt-2">
                To provide dependable professional Planning, GIS and Development
                Consultancy services.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold"></h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Our Vision
              </h2>
              <p className="mt-2">
                To be a globally reliable professional Planning, GIS and
                Development Consultancy Company
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold"></h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Our Goal
              </h2>
              <p className="mt-2">
                to ensure that every client is completely satisfied with the
                products and services that we provide.
              </p>
            </motion.div>
            
          </div>
        </div>
      </div>
      {/* we focus section start */}
      {/* <div
        className="bg-[50%] max-lg:bg-[55%] max-md:bg-[90%] bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/faq-bannar.jpg')" }}
      >
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 flex justify-end  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 max-lg:w-2/3 max-md:w-full"
          >
            <h1 className="text-5xl ">
              We seek to create value for investors across the
              <span className="text-red-500"> real estate spectrum</span>
            </h1>
            <div className="flex flex-col gap-5 mt-7">
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Investmennt Management</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Investmennt Management</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Investmennt Management</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Investmennt Management</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* appreciation section start */}
      {/* <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              We use Real Estate to show our appreciation of the world.
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              We provide equity and debt capital globally to back projects that
              make an impact.
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-2 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in real estate
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in real estate
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in real estate
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of seccessful experience in real estate
                </p>
              </div>
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Get In Touch"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="/appriciation-section-image.jpg"
                className="absolute w-full h-full object-cover object-center "
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
            </div>
          </div>
        </div>
      </div> */}
      {/* appreciation section end */}
      {/* review section start */}
      {/* <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/jane-cooper.jpg"}
                title={"Jane Cooper"}
                from={"Real Estate"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/robert-fox.jpg"}
                title={"Robert Fox"}
                from={"Creative Director"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/marvin-mckinney.jpg"}
                title={"Marvin Mckinney"}
                from={"CEO of Bimetrix"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Why do people love homyz
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div>
      {/* review section end */}
      {/* partner brand section start */}
      {/* <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div>
        </div>
      </div> */}
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
