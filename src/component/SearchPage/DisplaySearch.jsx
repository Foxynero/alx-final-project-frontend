import React, { useEffect, useState } from "react";
import Header from "../Views/Header";
import SearchPage from "./SearchPage";
import Footer from "../Views/Footer";
import { useLocation, Link } from "react-router-dom";

const DisplaySearch = () => {
  let location = useLocation();
  console.log(location);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (location.state) {
      setCategory(location.state.jobs);
    }
  }, [location.state]);

  return (
    <>
      <Header />

      {/* Start home */}
      <section className="bg-half page-next-level">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h4 className="text-uppercase title mb-4">Search Results </h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a href="/" className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#/" className="text-uppercase font-weight-bold">
                      Jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* SEARCH API PAGE */}
      <SearchPage />
      {/* SEARCH API PAGE */}

      {/* DISPLAY SEARCH RESULTS */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div>
                  <div className="row">
                    {category.length !== 0 && category.length !== null ? (
                      <>
                        {category &&
                          category.map((item) => (
                            <div
                              className="col-lg-4 col-md-12 py-2"
                              key={item._id}>
                              <div className="job-box bg-white overflow-hidden border  rounded position-relative overflow-hidden">
                                <div className="p-4">
                                  <div className="row align-items-center">
                                    <div className="col-md-6">
                                      <div className="mo-mb-2">
                                        <img
                                          src="images/featured-job/img-1.png"
                                          alt="mama"
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div>
                                        <h5 className="f-18">
                                          <a href="#/" className="text-dark">
                                            {item.job_title}
                                          </a>
                                        </h5>
                                        <p className="text-muted mb-0">
                                          {item.job_category}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3 bg-light">
                                  <div className="row">
                                    <div className="col-md-5">
                                      <div>
                                        <p className="text-muted mb-0 mo-mb-2">
                                          <span className="text-dark">
                                            GH₵ :
                                          </span>
                                          {item.job_salary}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-2">
                                      <div>
                                        <p className="text-muted mb-0 mo-mb-2">
                                          {" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-5">
                                      <div>
                                        <Link
                                          to={{
                                            pathname: `/job-details`,
                                            search: `?query=${item._id}`,
                                          }}
                                          className="text-primary">
                                          Apply Now
                                          <i className="mdi mdi-chevron-double-right" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </>
                    ) : (
                      <div className="col-12 text-center">
                        <p>No Job(s) Found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end containar */}
      </section>
      {/* DISPLAY SEARCH RESULTS */}

      {/* FOOTER */}
      <Footer />
      {/* FOOTER */}
    </>
  );
};

export default DisplaySearch;
