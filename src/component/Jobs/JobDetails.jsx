import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toast } from "primereact/toast";
import queryString from "query-string";
import Footer from "../Views/Footer";
import Header from "../Views/Header";
import axios from "axios";

const JobDetails = () => {
  const user_id = sessionStorage.getItem("user_id"); // get user_id from session storage
  const user_role = sessionStorage.getItem("role"); // get user_role from session storage
  const [jobDetails, setJobDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const { search } = useLocation();
  const { query } = queryString.parse(search);
  const toast = useRef(null);

  // on change of file
  const onFileChange = (e) => {
    console.log(e.target.files);

    // check if file size is less than 1mb
    if (e.target.files[0].size > 1000000) {
      alert("File size should be less than 1mb");
      e.target.value = "";
      return false;
    }

    setFile(e.target.files[0]);
    console.log(file);
  };

  useEffect(() => {
    if (query) {
      axios
        .post(`${process.env.REACT_APP_Base_url}/jobs/get_job_details`, {
          job_id: query,
        })
        .then((res) => {
          console.log(res.data);
          setJobDetails(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const applyJobHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_id", query);
    formData.append("user_id", user_id);

    if (!user_id) {
      show("Please login to apply for job", 400);
      setTimeout(() => {
        window.location.href = "/login";
      }, 4000);
      // setLoading(false);
    } else {
      axios
        .post(
          `${process.env.REACT_APP_Base_url}/jobs/apply_for_job`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          show(res.data.message, res.data.status);
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // todo: show toast
  const show = (message, status) => {
    toast.current.show({
      severity: status === 200 ? "success" : "error",
      summary: status === 200 ? "success" : "error",
      detail: message,
    });
  };

  return (
    <>
      <Toast ref={toast} />

      <Header />

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
                    <a href="/" className="text-uppercase font-weight-bold">
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
                      Job Detail
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

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
                        <i className="mdi mdi-home mr-1" />
                        {jobDetails.job_company_name}
                      </p>
                    </li>
                  </ul>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                      <p className="text-muted mb-2">
                        <i className="mdi mdi-email mr-1" />
                        {jobDetails.job_company_email}
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

                <>
                  {/* <!-- Button trigger modal --> */}
                  {user_role && user_role === "creator" ? (
                    <button
                      type="button"
                      className="btn btn-primary my-5 p-3 btn-block"
                      onClick={() =>
                        alert("You cannot apply for a job as a creator")
                      }>
                      apply now
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary my-5 p-3 btn-block"
                      data-toggle="modal"
                      data-target="#exampleModal">
                      apply now
                    </button>
                  )}

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            complete job application
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form onSubmit={applyJobHandler}>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12 py-3">
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item">
                                    <div className="input-group mt-2 mb-2">
                                      <div className="custom-file">
                                        <div className="input-group mb-3">
                                          <label
                                            className="input-group-text"
                                            htmlFor="inputGroupFile01">
                                            Upload CV
                                          </label>
                                          <input
                                            type="file"
                                            className="form-control block"
                                            accept="application/pdf,application/msword"
                                            onChange={onFileChange}
                                            required
                                          />
                                        </div>
                                      </div>

                                      <br />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {loading === false ? (
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal">
                                Close
                              </button>
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          ) : (
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal">
                                Close
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary"
                                disabled>
                                Submit
                              </button>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="job-detail rounded border job-overview mt-4 mb-4">
                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-home text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Company name</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_company_name}
                      </h6>
                    </div>
                  </div>

                  <div className="single-post-item mb-4">
                    <div className="float-left mr-3">
                      <i className="mdi mdi-security text-muted mdi-24px" />
                    </div>
                    <div className="overview-details">
                      <h6 className="text-muted mb-0">Experience</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_experience} year(s)
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

      <Footer />
    </>
  );
};

export default JobDetails;
