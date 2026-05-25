import { useEffect } from "react";
import Section from "../components/showcase1-components/section";
import { showCase } from "../constants/showcase";
const showcase1 = () => {
  useEffect(() => {
    document.title = " Urban Planning Projects -GIS LIMITED";
  }, []);
  return (
    <div className="overflow-hidden">
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
    </div>
  );
};

export default showcase1;
