import JobsHeader from "../../component/Views/Jobs_Header";
import Footer from "../../component/Views/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";

const AppliedJobDetails = () => {
  const { search } = useLocation();
  const { query } = queryString.parse(search);
  // get user_id from session storage
  // const user_id = sessionStorage.getItem("user_id");

  const [jobDetails, setJobDetails] = useState([]);

  // todo: add a button to download a file
  const DownloadFile = async (file_url) => {
    // write a javascript code to download a file from a url
    try {
      const response = await axios.get(file_url, { responseType: "blob" });

      // Create a download link and trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(new Blob([response.data]));
      downloadLink.setAttribute("download", "downloadedFile.pdf"); // Set the desired file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  useEffect(() => {
    if (query) {
      axios
        .post(
          `${process.env.REACT_APP_Base_url}/jobs/view_job_applied_details`,
          {
            job_id: query,
          }
        )
        .then((res) => {
          console.log(res.data);
          setJobDetails(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  return (
    <div>
      {/* Navigation Bar*/}
      {/* <Header /> */}
      <JobsHeader />

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
                        <i className="mdi mdi-home mr-1" />
                        {jobDetails.company_name}
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
                    <h5 className="text-dark mt-4">Seeker Details :</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="job-detail border rounded mt-2 p-4">
                      <div className="job-detail-desc">
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">Name</p>
                          </div>
                          <p className="text-muted mb-3 overflow-hidden d-block">
                            {jobDetails.user_name}
                          </p>
                        </div>
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">Email</p>
                          </div>
                          <p className="text-muted mb-3 overflow-hidden d-block">
                            {jobDetails.user_email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <>
                  <button
                    type="button"
                    onClick={() => DownloadFile(jobDetails.resume)}
                    className="btn btn-primary my-5 p-3 btn-block">
                    download resume
                  </button>
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
                        {jobDetails.company_name}
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
                  {jobDetails && (
                    <div className="single-post-item mb-4">
                      <div className="float-left mr-3">
                        <i className="mdi mdi-calendar-today text-muted mdi-24px" />
                      </div>
                      <div className="overview-details">
                        <h6 className="text-muted mb-0">Date Applied</h6>
                        <h6 className="text-black-50 pt-2 mb-0">
                          {jobDetails.date_applied}, {jobDetails.time_applied}
                        </h6>
                      </div>
                    </div>
                  )}

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
                      <h6 className="text-muted mb-0">job type</h6>
                      <h6 className="text-black-50 pt-2 mb-0">
                        {jobDetails.job_type}
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

export default AppliedJobDetails;
