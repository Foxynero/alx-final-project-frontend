import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/active`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.info.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h4 className="title title-line pb-5">Find Your Dream Job</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center mt-4 pt-2">
              <ul
                className="nav nav-pills nav nav-pills bg-white rounded nav-justified flex-column flex-sm-row"
                id="pills-tab"
                role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link rounded active"
                    id="recent-job-tab"
                    data-toggle="pill"
                    href="#recent-job"
                    role="tab"
                    aria-controls="recent-job"
                    aria-selected="true">
                    Jobs for you
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link rounded"
                    id="full-job-tab"
                    data-toggle="pill"
                    href="#full-job"
                    role="tab"
                    aria-controls="full-job"
                    aria-selected="false">
                    Recent Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="recent-job"
                  role="tabpanel"
                  aria-labelledby="recent-job-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* {beging of the add } */}

                      {data.map((item) => (
                        <div
                          className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden"
                          key={item._id}>
                          <div className="lable text-center pt-2 pb-2">
                            <ul className="list-unstyled best text-white mb-0 text-uppercase">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star" />
                              </li>
                            </ul>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="mo-mb-2">
                                  <img
                                    src="images/featured-job/img-1.png"
                                    alt="mama"
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
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
                              <div className="col-md-3">
                                <div>
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker text-primary mr-2" />
                                    {item.job_location}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2">
                                    <span className="text-primary"> GH₵ </span>
                                    {item.job_salary}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-0">
                                    {item.job_type}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2">
                                    <span className="text-dark">
                                      Experience :
                                    </span>
                                    {item.job_experience} years
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2"></p>
                                </div>
                              </div>
                              <div className="col-md-2">
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
                      ))}

                      {/* {this is where it ends} */}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="full-job"
                  role="tabpanel"
                  aria-labelledby="full-job-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* {beging of the add } */}

                      {data.map((item) => (
                        <div
                          className="job-box bg-white overflow-hidden border rounded mt-4 position-relative overflow-hidden"
                          key={item._id}>
                          <div className="lable text-center pt-2 pb-2">
                            <ul className="list-unstyled best text-white mb-0 text-uppercase">
                              <li className="list-inline-item">
                                <i className="mdi mdi-star" />
                              </li>
                            </ul>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="mo-mb-2">
                                  <img
                                    src="images/featured-job/img-1.png"
                                    alt="mama"
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
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
                              <div className="col-md-3">
                                <div>
                                  <p className="text-muted mb-0">
                                    <i className="mdi mdi-map-marker text-primary mr-2" />
                                    {item.job_location}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2">
                                    <span className="text-primary"> GH₵ </span>
                                    {item.job_salary}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-0">
                                    {item.job_type}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2">
                                    <span className="text-dark">
                                      Experience :
                                    </span>
                                    {item.job_experience} years
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <p className="text-muted mb-0 mo-mb-2">
                                    <span className="text-dark">Notes :</span>{" "}
                                    languages only differ in their grammar.{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-2">
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
                      ))}

                      {/* {this is where it ends} */}
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end containar */}
      </section>
    </>
  );
};

export default AllJobs;
