import Footer from "../Views/Footer";
import Header from "../Views/Header";
import Suscribe from "../Suscribe/Suscribe";
import Popular from "../Popular/Popular";
import WalkThrough from "../WalkThrough/WalkThrough";
import AllJobs from "../Jobs/AllJobs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <Header />

      <Banner />

      <Popular />

      <AllJobs />

      <WalkThrough />

      <Suscribe />

      <Footer />
    </div>
  );
};

export default Home;
