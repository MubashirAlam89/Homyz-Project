import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
const ResultCard = ({ title, desc, ind }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        target="_blank"
        to={encodeURI(`https://en.wikipedia.org/wiki/${title}`)}
      >
        <p className="float-left title-font mr-2 h-7  mt-[0.1px] font-semibold  text-2xl text-red-500">
          {ind + 1}
          {"."}
        </p>
        <h1 className="text-2xl font-semibold text-red-500 hover:opacity-80 transition-all duration-200 underline uppercase ">
          {title}
        </h1>
      </Link>
      <Link
        target="_blank"
        to={encodeURI(`https://en.wikipedia.org/wiki/${title}`)}
      >
        <p className="text-2xl " dangerouslySetInnerHTML={{ __html: desc }}></p>
      </Link>
    </div>
  );
};

export default ResultCard;
