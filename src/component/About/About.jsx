import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const About = () => {
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
                <h4 className="text-uppercase title mb-4">About Us</h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a
                      href="index.html"
                      className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-uppercase font-weight-bold">
                      Pages
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      About
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* ABOUT US START */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-4">
              <img
                src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                className="img-fluid rounded shadow"
                alt=".."
              />
            </div>
            <div className="col-lg-7 col-md-8">
              <div className="about-desc ml-lg-4">
                <h4 className="text-dark">About us</h4>
                <p className="text-muted">
                  Aenean eros et nisl sagittis as vestibulum at Nullam nulla
                  eros ultricies site amet nonummy id imperdiet feugiat pede as
                  Sed lectuse Donec mollis hendrerit Phasellus at nec sem in at
                  pellentesque facilisis at Praesent congue erat at massa Sed
                  sit cursus turpis vitae tortor that a Donec posuere as
                  vulputate arcu Phasellus accumsan velit.
                </p>
                <p className="text-muted">
                  Maecenas tempus tellus eget as that condimentum rhoncus sem
                  quam semper libero amete adipiscing sem neque sed ipsum Nam
                  quam nunce blandit at luctus pulvinar hendrerit id lorem
                  Maecenas nec et ante tincidunt tempus.
                </p>
                <p className="text-muted">
                  Sed consequat leo eget bibendum sodales augue at velit cursus
                  nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US END */}

      {/* COUNTER START */}
      <section className="section bg-light">
        <div className="container">
          <div className="blog-post-counter">
            <div className="row" id="counter">
              <div className="col-md-3 col-6 border-right">
                <div className="p-4">
                  <div className="blog-post counter-content text-center">
                    <h1
                      className="counter-value font-weight-light text-dark mb-2"
                      data-count={2030}>
                      0
                    </h1>
                    <p className="counter-name text-muted f-15 text-uppercase mb-2">
                      Jobs
                    </p>
                    <i className="mdi mdi-account-multiple h3 text-muted" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 border-right">
                <div className="p-4">
                  <div className="blog-post counter-content text-center">
                    <h1
                      className="counter-value font-weight-light text-dark mb-2"
                      data-count={3500}>
                      0
                    </h1>
                    <p className="counter-name text-muted f-15 text-uppercase mb-2">
                      Applications
                    </p>
                    <i className="mdi mdi-file h3 text-muted" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 border-right">
                <div className="p-4">
                  <div className="blog-post counter-content text-center">
                    <h1
                      className="counter-value font-weight-light text-dark mb-2"
                      data-count={1250}>
                      0
                    </h1>
                    <p className="counter-name text-muted f-15 text-uppercase mb-2">
                      Companies
                    </p>
                    <i className="mdi mdi-bank h3 text-muted" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="p-4">
                  <div className="blog-post counter-content text-center">
                    <h1
                      className="counter-value font-weight-light text-dark mb-2"
                      data-count={4000}>
                      0
                    </h1>
                    <p className="counter-name text-muted f-15 text-uppercase mb-2">
                      Employers
                    </p>
                    <i className="mdi mdi-account-group h3 text-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COUNTER END */}

      {/* COMPANY TESTIMONIAL START */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h4 className="text-dark font-weight-">Company Testimonial</h4>
              <div className="blog-post-border mt-3 mb-3" />
              <h5 className="text-muted mb-1">Themes code Pvt.Ltd</h5>
              <p className="mb-4 f-16">
                <a href className="text-muted">
                  <i className="mdi mdi-earth mr-2" />
                  Themescodeltd.co.in
                </a>
              </p>
              <p className="text-muted f-14">
                Maecenas tempus tellus et condimentum that as rhoncus sem quam
                semper adipiscing sem neque sed ipsum Nam quam nunc blandit at
                luctus at id lorem maecenas nec odio et ante tincidunt tempus
                Donec vitae venenatis faucibus quis ante.
              </p>
              <div className="job-details-desc-item">
                <div className="float-left mr-3">
                  <i className="mdi mdi-minus text-muted f-16" />
                </div>
                <p className="text-muted f-14 mb-1">
                  Aenean leo ligula porttitor eu consequat eleifend enim.
                </p>
              </div>
              <div className="job-details-desc-item">
                <div className="float-left mr-3">
                  <i className="mdi mdi-minus text-muted f-16" />
                </div>
                <p className="text-muted f-14 mb-1">
                  Quisque rutrum Aenean imperdiet nisi vel augue.
                </p>
              </div>
              <div className="job-details-desc-item mb-4">
                <div className="float-left mr-3">
                  <i className="mdi mdi-minus text-muted f-16" />
                </div>
                <p className="text-muted f-14 mb-1">
                  Maecenas tempus tellus sem semper libero.
                </p>
              </div>
              <ul className="list-inline pt-4 border-top mb-4">
                <li className="list-inline-item">
                  <a href="#" className="btn btn-primary-outline">
                    Learn More
                  </a>
                </li>
                <li className="list-inline-item float-right mt-2">
                  <ul className="list-inline bolg-post-icon mb-0">
                    <li className="list-inline-item f-20">
                      <a href className>
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item f-20">
                      <a href className>
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item f-20">
                      <a href className>
                        <i className="mdi mdi-whatsapp" />
                      </a>
                    </li>
                    <li className="list-inline-item f-20">
                      <a href className>
                        <i className="mdi mdi-instagram" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="blog-post-testi">
                <div className="row align-items-center">
                  <div className="col-md-3 col-4">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">
                      <a
                        className="nav-link about-us active"
                        id="v-pills-home-tab"
                        data-toggle="pill"
                        href="#v-pills-home"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true">
                        <div className="blog-post-testi-img">
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                          <div className="blog-post-overlay">
                            <div className="blog-post-testi-icon text-center">
                              <i className="mdi mdi-plus-circle-outline text-white h4" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link about-us"
                        id="v-pills-profile-tab"
                        data-toggle="pill"
                        href="#v-pills-profile"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false">
                        <div className="blog-post-testi-img">
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                          <div className="blog-post-overlay">
                            <div className="blog-post-testi-icon text-center">
                              <i className="mdi mdi-plus-circle-outline text-white h4" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link about-us"
                        id="v-pills-messages-tab"
                        data-toggle="pill"
                        href="#v-pills-messages"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false">
                        <div className="blog-post-testi-img">
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                          <div className="blog-post-overlay">
                            <div className="blog-post-testi-icon text-center">
                              <i className="mdi mdi-plus-circle-outline text-white h4" />
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className="nav-link about-us"
                        id="v-pills-settings-tab"
                        data-toggle="pill"
                        href="#v-pills-settings"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false">
                        <div className="blog-post-testi-img">
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                          <div className="blog-post-overlay">
                            <div className="blog-post-testi-icon text-center">
                              <i className="mdi mdi-plus-circle-outline text-white h4" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-9 col-8">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab">
                        <div>
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        <div>
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">
                        <div>
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab">
                        <div>
                          <img
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            alt
                            className="img-fluid mx-auto d-block rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COMPANY TESTIMONIAL START */}

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

export default About;
