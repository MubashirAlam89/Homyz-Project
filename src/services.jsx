import { useEffect } from "react";
import ServicesComponent from "../components/services-page-components/services";

const Services = () => {
  useEffect(() => {
    document.title = "Services - GIS LIMITED";
  }, []);
  return (
    <div className="overflow-hidden">
      <ServicesComponent />
    </div>
  );
};

export default Services;
