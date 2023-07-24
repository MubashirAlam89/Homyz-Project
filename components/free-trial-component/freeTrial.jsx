import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const FreeTrial = () => {
  return (
    <div
      className="py-28 max-sm:py-20 px-10 max-sm:px-5 flex flex-col justify-center items-center text-center gap-8 max-sm:gap-6 bg-red-500 bg-no-repeat text-white bg-center bg-cover"
      style={{
        backgroundImage: `url("/trial-bg.png")`,
      }}
    >
      <h1 className=" text-5xl max-sm:text-4xl font-semibold">
        {" "}
        IMPROVE YOUR BUSINESS AND MAKE YOUR WORK EASY
      </h1>
      <Link onClick={scrollToTop} to="/contact">
        <Button
          content={"Start free trial"}
          fontSize={"text-2xl max-sm:text-xl"}
          padding={"px-6 py-2"}
          styles={{ borderColor: "white" }}
        />
      </Link>
    </div>
  );
};

export default FreeTrial;
