import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
const ResultCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        target="_blank"
        to={encodeURI(`https://en.wikipedia.org/wiki/${title}`)}
      >
        <h1 className="text-2xl text-red-500 hover:opacity-90 underline-offset-2">
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
