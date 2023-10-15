import SearchPage from "../SearchPage/SearchPage";

const Banner = () => {
  return (
    <>
      <section className="bg-home" id="bg-home">
        <div className="bg-overlay" />
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="title-heading text-center text-white">
                    <h6 className="small-title text-uppercase text-light mb-3">
                      Post jobs as an institution or Find your dream job right
                      here as a seeker
                    </h6>
                    <h1 className="heading font-weight-bold mb-4">
                      The Easiest Way to Get Your New Job
                    </h1>
                  </div>
                </div>
              </div>
              <SearchPage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
