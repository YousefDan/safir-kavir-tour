import Intro from "../../components/intro/Intro";
import PackageList from "../../components/packageList/PackageList";
import Services from "../../components/services/Services";

const Home = () => {
    return ( <main>
        <Intro />
        <PackageList />
        <Services />
    </main> );
}
 
export default Home;