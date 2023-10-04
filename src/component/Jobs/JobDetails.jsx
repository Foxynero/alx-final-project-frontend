import React, { useEffect, useState } from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";
import axios from "axios";
import { useLocation } from "react-router-dom";

const JobDetails = () => {
  const location = useLocation();
  const query = location.search;

  // get the value after the equal sign
  const job_id = query.split("=")[1];

  const [jobDetails, setJobDetails] = useState([]);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_Base_url}/jobs/job_details`,
        {
          job_id: job_id,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setJobDetails(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [job_id]);

  return (
    <div>
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
                <h4 className="text-uppercase title mb-4">Job Detail</h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a
                      href="index.html"
                      className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#/" className="text-uppercase font-weight-bold">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Job Detail two
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* JOB SINGLE START */}
      {jobDetails && (
        <section className="section pb-5 pt-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="job-detail text-center job-single border rounded p-4">
                  <div className="job-single-img mb-2">
                    <img
                      src="images/featured-job/img-1.png"
                      alt="job"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <h4 className>
                    <a href="#/" className="text-dark">
                      {jobDetails.job_title}
                    </a>
                  </h4>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                      <p className="text-muted mb-2">
                        <i className="mdi mdi-email mr-1" />
                        {jobDetails.job_company_email}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted mb-2">
                        <i className="mdi mdi-phone mr-1" />
                        {jobDetails.job_company_phone}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="text-dark mt-4">Job Description :</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="job-detail border rounded mt-2 p-4">
                      <div className="job-detail-desc">
                        <p className="text-muted mb-3">
                          {jobDetails.job_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="text-dark mt-4">How To Apply :</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="job-detail border rounded mt-2 p-4">
                      <div className="job-detail-desc">
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">1 )</p>
                          </div>
                          <p className="text-muted mb-3 overflow-hidden d-block">
                            Make sure to carefully read the job description to
                            know what the job requires
                          </p>
                        </div>
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">2 )</p>
                          </div>
                          <p className="text-muted mb-3 overflow-hidden d-block">
                            Upload your CV or Resume to the job application form
                            <br />
                            <span style={{ color: "red" }}>
                              (NB: File size should be less than 3mb)
                            </span>
                          </p>
                        </div>
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">3 )</p>
                          </div>
                          <p className="text-muted mb-0 overflow-hidden d-block">
                            Qualified applicants will be contacted via email or
                            phone within a fortnight
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-12 py-3">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <div className="input-group mt-2 mb-2">
                          <form onSubmit={uploadImage}>
                            <div className="custom-file">
                              <div className="input-group mb-3">
                                <input
                                  type="file"
                                  className="form-control"
                                  id="inputGroupFile02"
                                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                  onChange={(e) => setFile(e.target.files[0])}
                                />
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-sm ml-2 btn-block my-3">
                              Submit CV
                            </button>
                          </form>
                          <br />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="job-detail rounded border job-overview mt-4 mb-4">
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-security text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Experience</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_experience}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-currency-usd text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Salary</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        GH₵ {jobDetails.job_salary} / month
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-apps text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Category</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_category}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-human-male-female text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Gender</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_gender}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-calendar-today text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Date Posted</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.date}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-email text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Email</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_company_email}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-phone-classic text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Contact No</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_company_phone}
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-map-marker text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Location</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_location}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* JOB SINGLE END */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};

export default JobDetails;
