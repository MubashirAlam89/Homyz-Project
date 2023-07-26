import { Button, Input, Toast, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultCard from "./resultCard";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";

const ResultPage = ({ searchParams, setSearchParams }) => {
  const [inpValue, setInpValue] = useState(searchParams.get("query"));
  const [btnLoader, setBtnLoader] = useState(false);
  const [data, setData] = useState([]);

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
  const search = () => {
    setBtnLoader(true);
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${inpValue}`
      )
      .then((res) => {
        console.log(res.data.query.search);
        setData(res.data.query.search);
        console.log(res);
        setBtnLoader(false);
      })
      .catch((error) => {
        setBtnLoader(false);
        errorToast(error.message, "error");
      });
  };

  const handleSearch = () => {
    const inp = document.getElementById("inpValue");
    if (inp.value && inp.value.trim()) {
      search();
    } else {
      errorToast("Fill the first first!", "error");
    }
  };

  useEffect(() => {
    search();
  }, [searchParams]);
  useState(() => {
    setInpValue(searchParams.get("query"));
  }, [searchParams]);
  return (
    <div
      style={{ maxWidth: 1200 }}
      className=" mx-auto mt-32 max-md:mt-20 flex flex-col gap-10 p-10 max-md:px-5  "
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-5xl font-semibold">Serch results</h1>
        <div className="flex items-center max-sm:flex-col gap-4 mt-5">
          <Input
            id="inpValue"
            value={inpValue}
            size={"lg"}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(e) => {
              setInpValue(e.target.value);
            }}
            placeholder="Search"
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#d5515e" }}
            backgroundColor={"#d5515e"}
            color={"white"}
            borderColor={"#d5515e"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={handleSearch}
            className="max-sm:w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Search
          </Button>
        </div>
      </motion.div>
      {data && data.length > 0 ? (
        data.map((e, i) => {
          return (
            <motion.div
              key={i}
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ResultCard title={e.title} ind={i} desc={e.snippet} />
            </motion.div>
          );
        })
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <h1 className="text-3xl font-medium opacity-70">
            {btnLoader
              ? "Searching..."
              : data.length === 0
              ? "Result not found!"
              : ""}
          </h1>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
