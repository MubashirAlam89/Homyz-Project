import { motion } from "framer-motion";
import { rentHouses } from "../../constants/data";
import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";
import { animationVariants } from "../../constants/animationVariants";
import { useEffect } from "react";

const Featured = () => {
  useEffect(() => {
    document.title = "Featured - Homyz";
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="bg-[url(/showcase2-page-images/showcase2-hero-bg.jpg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl font-semibold"
        >
          Featured
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-2 grid-cols-2  max-sm:grid-cols-1 max-sm:grid-rows-3 p-10 max-md:px-5 "
      >
        {rentHouses.map((e, i) => {
          if (e.type === "featured") {
            return (
              <ExculusivePropertyCard
                href={e.id}
                imgSrc={e.mainImage}
                pricing={e.price}
                titlePart1={"House in "}
                titlePart2={e.name}
                type={e.type}
                key={i}
                cardHeight={"h-80"}
                bgColor={"bg-white"}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Featured;
