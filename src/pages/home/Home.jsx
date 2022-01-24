import Gallery from "../../components/gallery/Gallery";
import Intro from "../../components/intro/Intro";
import PackageList from "../../components/packageList/PackageList";
import Services from "../../components/services/Services";
import "./home.scss";

const Home = () => {
  return (
    <main className="home">
      <Intro />
      <PackageList />
      <Services />
      <Gallery />
    </main>
  );
};

export default Home;
