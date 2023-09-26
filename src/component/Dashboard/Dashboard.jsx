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
      {/* HEAD */}
      <Header />
      {/* END OF HEADER */}

      {/* Start Home */}
      <Banner />
      {/* end home */}

      {/* popular category start */}
      <Popular />
      {/* popular category end */}

      {/* all jobs start */}
      <AllJobs />
      {/* all jobs end */}

      {/* How it Work start */}
      <WalkThrough />
      {/* How it Work end */}

      {/* subscribe start */}
      <Suscribe />
      {/* subscribe end */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
};

export default Home;
