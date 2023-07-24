import { useEffect } from "react";
import AboutPage from "../components/about-page-componenets/about";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Homyz";
  }, []);
  return <AboutPage />;
};

export default About;
