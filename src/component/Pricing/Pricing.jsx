import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const Pricing = () => {
  return (
    <div>
      {/* Loader */}
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
      {/* Loader */}

      {/* Navigation Bar*/}
      <Header />
      {/*end header*/}

      {/* Start home */}
      <section className="bg-half page-next-level">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h4 className="text-uppercase title mb-4">Pricing</h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a href="/" className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#/" className="text-uppercase font-weight-bold">
                      Pages
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Pricing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* PRICING START */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="pricing-box border rounded pt-4">
                <div className="pl-2 pr-2">
                  <h6 className="text-center text-uppercase font-weight-bold">
                    Free
                  </h6>
                  <p className="text-muted text-center mb-0 price mt-3 p-1">
                    <span className="text-primary font-weight-normal h1">
                      <sup className="h5">$</sup>00/
                    </span>
                    Month
                  </p>
                  <div className="pricing-plan-item text-center">
                    <ul className="list-unstyled mb-4">
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Bandwidth: 1GB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Onlinespace: 50MB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Support: No
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Domain: 5
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Hidden Fees: No
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center border-top p-4">
                  <a href="#" className="btn btn-block btn-primary-outline">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="pricing-box border rounded pt-4">
                <div className="pl-2 pr-2">
                  <h6 className="text-center text-uppercase font-weight-bold">
                    Economy
                  </h6>
                  <p className="text-muted text-center mb-0 price mt-3 p-1">
                    <span className="text-primary font-weight-normal h1">
                      <sup className="h5">$</sup>70/
                    </span>
                    Month
                  </p>
                  <div className="pricing-plan-item text-center">
                    <ul className="list-unstyled mb-4">
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Bandwidth: 1.5GB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Onlinespace: 500MB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Support: Yes
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Domain: 10
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Hidden Fees: Yes
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center border-top p-4">
                  <a href="#" className="btn btn-block btn-primary">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="pricing-box border rounded pt-4">
                <div className="pl-2 pr-2">
                  <h6 className="text-center text-uppercase font-weight-bold">
                    Deluxe
                  </h6>
                  <p className="text-muted text-center mb-0 price mt-3 p-1">
                    <span className="text-primary font-weight-normal h1">
                      <sup className="h5">$</sup>95/
                    </span>
                    Month
                  </p>
                  <div className="pricing-plan-item text-center">
                    <ul className="list-unstyled mb-4">
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Bandwidth: 2GB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Onlinespace: 1GB
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Support: Yes
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Domain: 15
                      </li>
                      <li className="text-muted">
                        <i className="mdi mdi-minus mr-2" />
                        Hidden Fees: No
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center border-top p-4">
                  <a href="#" className="btn btn-block btn-primary-outline">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING END */}

      {/* subscribe start */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="float-left position-relative notification-icon mr-2">
                <i className="mdi mdi-bell-outline text-primary" />
                <span className="badge badge-pill badge-danger">1</span>
              </div>
              <h5 className="mt-2 mb-0">Your Job Notification</h5>
            </div>
            <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
              <form>
                <div className="form-group mb-0">
                  <div className="input-group mb-0">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your email :"
                      required
                      aria-describedby="newssubscribebtn"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary submitBnt"
                        type="submit"
                        id="newssubscribebtn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};

export default Pricing;
