import WhatWeDoCard from "./whatwedocard";
import Button from "../buttons-component/solidbutton";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { useToast } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className="  flex bg-[url('/hero-bg-image.jpg')] pt-36 pb-18 bg-top bg-no-repeat bg-cover  ">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12"
        >
          <motion.h1
            variants={animationVariants.fadeLeft}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-4xl max-w-lg "
          >
            Urban and Regional planning and GIS Development
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeLeft}
            className="text-xl max-lg:mx-auto max-w-md  "
          >
            Here to provide dependable professional Planning, GIS and
            Development Consultancy services that meets our clients’ desires and
            promotes sustainable development
          </motion.p>
          <motion.div
            variants={animationVariants.fadeLeft}
            id="search-inp"
            className="max-w-xl max-lg:mx-auto max-lg:w-full relative"
          >
            <Link onClick={scrollToTop} to={"/contact"}>
              <Button
                content={"Hire  Us"}
                fontSize={"text-xl"}
                padding={"px-5 py-2"}
                furtherClasses={"mt-8"}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={animationVariants.fadeLeft}
            className="flex max-lg:flex-col max-lg:items-center gap-10 w-full justify-between items-end mt-4"
          >
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl title-font font-bold"></h2>
                <p className="text-lg"></p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl title-font font-bold"></h2>
                <p className="text-lg"></p>
              </div>
            </div>
            <div className="flex gap-12 max-sm:flex-wrap  justify-center">
              <div className="flex justify-start items-center gap-2">
                <h2 className="text-2xl"></h2>
              </div>
              <div className="flex justify-start items-center gap-2">
                <h2 className="text-2xl"></h2>
              </div>
              <div className="flex justify-start items-center gap-2">
                <h2 className="text-2xl"></h2>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* </Reveal> */}
      </div>
      {/* about section */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex justify-between items-start p-10 py-28 max-md:py-16 gap-5 max-md:px-5 max-md:flex-col max-md:items-center max-md:text-center"
        >
          <div className="w-2/4 max-md:w-full ">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomOut}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-5xl max-md:text-4xl font-bold title-font">
                We build quality GIS projects
                <span className=" text-red-500 title-font "> since 2014</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-2/4 max-md:w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xl">
                Here to provide dependable professional Planning, GIS and
                Development Consultancy services that meets our clients’ desires
                and promotes sustainable development.
              </p>
              <Link onClick={scrollToTop} to={"/about"}>
                <Button
                  content={"About Us"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* what we do section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex gap-5 justify-between items-start p-10 py-28 max-md:py-16 max-md:px-5 max-lg:flex-col max-lg:items-center  max-lg:gap-12"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/3 max-lg:w-full max-lg:text-center flex flex-col gap-2 items-start max-lg:items-center"
          >
            <h2 className="text-5xl max-md:text-4xl font-bold title-font">
              What we do
            </h2>
            <p className="text-xl">
              We solve our clients’ challenges by providing on-time and
              on-budget GIS services and technical support. Our goal is to
              ensure that every client is completely satisfied with the products
              and services that we provide.
            </p>
            <Link onClick={scrollToTop} to={"/services"}>
              <button
                style={{ borderWidth: 1.5, borderRadius: 4 }}
                className="bg-transparent  text-black border-red-500 text-xl px-5 py-2 duration-300 hover:bg-red-500 hover:text-white transition-all mt-5 max-md:mt-3"
              >
                Portfolio
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="cards w-2/3 max-lg:w-full flex justify-center max-md:flex-col max-md:items-center gap-7"
          >
            <div className="flex flex-col gap-7 ">
              <WhatWeDoCard
                iconSrc={"/icons/reliability.png"}
                iconAlt={"reliability"}
                title={"Reliability"}
                desc={
                  " At GIS Limited, we prioritize reliability in every aspect of our services, ensuring your projects succeed."
                }
              />
              <WhatWeDoCard
                iconSrc={"/icons/communication.png"}
                iconAlt={"communication"}
                title={"communication"}
                desc={
                  "We believe in clear, open communication, fostering strong relationships and ensuring your project goals are met."
                }
              />
            </div>
            <div className="flex flex-col gap-7">
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 bg-gradient-to-t from-white to-transparent"
              ></div>
              <WhatWeDoCard
                iconSrc={"/icons/quality-first.png"}
                iconAlt={"quality-first"}
                title={"Quality First"}
                desc={
                  "Quality is not just our goal; it's our standard. We strive to exceed expectations with every GIS solution we deliver."
                }
              />
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 h-36 bg-gradient-to-b from-white to-transparent"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* what we do section end */}

      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="max-md:px-5 py-10 mx-auto grid grid-cols-2 grid-rows-1 gap-10 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-5"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              We use GIS services to show our appreciation of the world.
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
                  6
                </h2>
                <p className="text-xl">
                  Years of successful experience in offering GIS services
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  7
                </h2>
                <p className="text-xl">
                  Years of successful experience in Urban Planning
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  Years of successful experience in Project Management
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  9
                </h2>
                <p className="text-xl">
                  Years of successful experience in Consultancy
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
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] gap-1 ">
            <div className=" h-full w-full  relative overflow-hidden rounded-lg">
              <img
                src="/appriciation-section-image.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 py-0 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20  "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* appreciation section end */}
      {/* review section start */}

      {/* review section end */}
      {/* partner brand section start */}

      {/* partner brand section end */}
    </div>
  );
};

export default HomePage;
