import Showcase2Card from "../components/showcase2-components/showcase2Card";
import { showCase } from "../constants/showcase";
import ShowCase2HeroSection from "../components/showcase2-components/showcase2HeroSecion";
import { useEffect } from "react";

const ShowCase2 = () => {
  useEffect(() => {
    document.title = "GIS based Projects - GIS LIMITED";
  }, []);
  return (
    <div className="overflow-hidden">
      <ShowCase2HeroSection />
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-2 grid-cols-3 max-lg:grid-rows-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-6 p-10 max-md:px-5 "
      >
        {showCase.map((e, i) => {
          return (
            <Showcase2Card
              href={`/projects/${e.id}`}
              src={e.coverImage}
              title={e.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCase2;
