import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./service.css";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
const ServicePage = ({ id, title, breif, descr, imageSrc }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
        >
          {title}
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto flex
         p-10 max-sm:px-5 relative items-start gap-16 max-lg:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0 }}
          className="w-2/3 max-lg:w-full flex flex-col gap-5"
        >
          <h1 className="text-[46px] leading-none max-md:text-4xl font-semibold">
            Tuning in to what really matters
          </h1>
          <div className="text-xl flex flex-col gap-3">
            <p>
              We believe that technology and human-centered design are
              revolutionizing brand experiences. Remarkable innovations are
              allowing products to become more sentient and connected, enabling
              greater connection between people. Our role is to ensure that each
              product experience is attuned to people’s needs and relevant to
              the rhythm and habits of their daily lives. Through first and
              secondary research, we identify what will really matter to users
              and we never let go of the vision that inspires great products.
            </p>
            <p>
              Test your ideas with minimal risk. Test even the most complex
              ideas, involving emerging technologies – like blockchain – with
              the help of our expert Outsourceo team. We’ll help you with
              predictions, roadmapping and post-PoC Development analysis, to
              identify the best-fit solution with minimal financial risk.
            </p>
            <p>
              We help companies assess their skills and choose a new direction
              which utilizes the talents of the team and resources most
              productively.
            </p>
            <p>
              As consumers have more and more product choices, the role of
              design to bring clarity and relevance has never been more
              necessary. Design will continue to be the significant difference
              maker and the reason for choosing one product or experience over
              another. On every product we look through the eyes of the user,
              studying the experience critically and empathetically. Our
              creative response combines strategy with execution to deliver
              beautiful, innovative and differentiated design.
            </p>
            <p>
              Our team of software experts will provide a comprehensive project
              evaluation, allowing you to develop your roadmap for success that
              maximises the efficiency of your future projects.
            </p>
            <p>
              When it comes to encapsulating technical innovation in a form that
              chimes with an end user, our early involvement, often before the
              science leaves the bench, can help to ensure that the human
              factors as well as the production design issues are considered at
              the optimum stage in the process.
            </p>
          </div>
          <div className="mt-10">
            <Accordion
              className="text-xl flex flex-col gap-5 "
              allowToggle={true}
            >
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How does SAASworld make money?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What is the Top Rated program?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      What’s the difference between finding clients online,
                      versus locally?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      How does SAASworld make money?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Many people has the notion that enlightenment is one state.
                  Many also believe that when it is attained, a person is
                  forever in that state.For your necessary discernment. Thank
                  you for reading.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/3 max-lg:w-full sticky top-36 questions-card p-8 gap-5 flex flex-col"
        >
          <h1 className="text-center text-2xl font-semibold">
            Have Additional Questions?
          </h1>
          <div className="flex mt-2  gap-3 text-xl items-center">
            <div>
              <FaEnvelope className="text-red-500" />
            </div>
            <p>Office # 420 DHA Phase 90, Karachi, PK</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaPhone className="rotate-90 text-red-500" />
            </div>
            <p>+92 39283848238</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <p>information@office.com</p>
          </div>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-red-500 hover:text-black transition-all duration-300"
          >
            <div className="flex items-center gap-1">
              <p className="text-xl">Contact us</p>
              <FaArrowRight className="text-sm mt-[2px]" />
            </div>
          </Link>
        </motion.div>
      </div>
      <FreeTrial />
    </>
  );
};

export default ServicePage;
