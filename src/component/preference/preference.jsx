import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Preference = () => {
  // get preference from session storage
  const preference = sessionStorage.getItem("preference");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/active`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {preference && preference === true ? (
        <>
          <section className="section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content mt-2" id="pills-tabContent">
                    <div>
                      <div className="row">
                        {data.map((item) => (
                          <div
                            className="col-lg-4 col-md-12 py-2"
                            key={item._id}>
                            <div className="job-box bg-white overflow-hidden border  roundedposition-relative overflow-hidden">
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
                                        <span className="text-dark">GH₵ :</span>
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
                                          pathname: `/job_details`,
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end containar */}
          </section>
        </>
      ) : (
        <>
          <section className="section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content mt-2" id="pills-tabContent">
                    <div>
                      <div className="row">
                        {data.map((item) => (
                          <div
                            className="col-lg-4 col-md-12 py-2"
                            key={item._id}>
                            <div className="job-box bg-white overflow-hidden border  roundedposition-relative overflow-hidden">
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
                                        <span className="text-dark">GH₵ :</span>
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
                                          pathname: `/job_details`,
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
            {/* end containar */}
          </section>
        </>
      )}
    </>
  );
};

export default Preference;
