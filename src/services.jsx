import { useEffect } from "react";
import ServicesComponent from "../components/services-page-components/services";

const Services = () => {
  useEffect(() => {
    document.title = "Servics - Homyz";
  }, []);
  return <ServicesComponent />;
};

export default Services;
