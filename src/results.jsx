import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import ResultPage from "../components/result-page-components/resultPage";

const Results = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Search Result - GIS LIMITED";
  }, []);

  return (
    <ResultPage searchParams={searchParams} setSearchParams={setSearchParams} />
  );
};

export default Results;
