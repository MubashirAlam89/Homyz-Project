import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Home - GIS LIMITED";
  }, []);
  return <HomePage />;
};

export default Home;
