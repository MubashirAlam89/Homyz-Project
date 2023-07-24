import { useEffect } from "react";
import Section from "../components/showcase1-components/section";
import { showCase } from "../constants/showcase";
const showcase1 = () => {
  useEffect(() => {
    document.title = "Showcase 1 - Homyz";
  }, []);
  return (
    <>
      {showCase.map((e, i) => {
        return (
          <Section
            key={i}
            url={e.coverImage}
            href={`/projects/${e.id}`}
            title={e.city}
            desc={e.shortDescription}
            attachment={e.id % 2 !== 0 ? "bg-fixed" : ""}
          />
        );
      })}
    </>
  );
};

export default showcase1;
