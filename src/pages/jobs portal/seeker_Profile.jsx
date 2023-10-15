import JobsHeader from "../../component/Views/Jobs_Header";
import Footer from "../../component/Views/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const SeekerProfile = () => {
  const user_id = sessionStorage.getItem("user_id"); // get user_id from session storage

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
    if (user_id) {
      axios
        .post(`${process.env.REACT_APP_Base_url}/users/user_details`, {
          user_id: user_id,
        })
        .then((res) => {
          console.log(res.data);
          setJobDetails(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user_id]);

  return (
    <div>
      {/* Navigation Bar*/}
      <JobsHeader />

      {/*end header*/}

      {/* Start home */}
      <section className="bg-half page-next-level">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h4 className="text-uppercase title mb-4">User Detail</h4>
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

      {/* JOB SINGLE START */}
      {jobDetails && (
        <section className="section pb-5 pt-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="text-dark mt-4">User Details :</h5>
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
                            {jobDetails.first_name}
                            {jobDetails.last_name}
                          </p>
                        </div>
                        <div className="job-details-desc-item">
                          <div className="float-left mr-3">
                            <p className="text-muted mb-0">Email</p>
                          </div>
                          <p className="text-muted mb-3 overflow-hidden d-block">
                            {jobDetails.email}
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
                    className="btn btn-primary my-5 p-3 btn-block d-none">
                    download resume
                  </button>
                </>
                <>
                  <button
                    type="button"
                    onClick={() => DownloadFile(jobDetails.resume)}
                    className="btn btn-primary my-5 p-3 btn-block d-none">
                    update
                  </button>
                </>
              </div>

              <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0 d-none">
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

export default SeekerProfile;
