import React, { useEffect, useState } from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";
import axios from "axios";

const PostJob = () => {
  const [job_company_email, setJobCompanyEmail] = useState("");
  const [job_description, setJobDescription] = useState("");
  const [job_experience, setJobExperience] = useState("");
  const [job_company_name, setCompanyName] = useState("");
  const [job_category, setJobCategory] = useState("");
  const [job_location, setJobLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [job_salary, setJobSalary] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [job_type, setJobType] = useState("");
  const [user_id, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tk = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user_id");
    setUserId(user);

    setToken(tk);
  }, []);

  console.log(user_id);
  console.log(token);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/categories`)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.info);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login to post a job");
      return;
    } else {
      await axios
        .post(
          `${process.env.REACT_APP_Base_url}/jobs/create_job`,
          {
            user_id: user_id,
            job_title: job_title,
            job_type: job_type,
            job_category: job_category,
            job_location: job_location,
            job_salary: job_salary,
            job_experience: job_experience,
            job_company_email: job_company_email,
            job_company_name: job_company_name,
            job_description: job_description,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          if (res.data.status === 201) {
            window.location.href = "/jobs";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
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
                <h4 className="text-uppercase title mb-4">Create A new Job</h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a href="/" className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Post A Job
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      <div className="container">
        <div className="row text-center p-3">
          <div className="col-md-12">
            {/* <h5>
              <span style={{ color: "red" }}>NB</span>: All job post have a
              24hrs verification period before appearing on the site
            </h5> */}
          </div>
        </div>
      </div>

      {/* POST A JOB START */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="rounded shadow bg-white p-4">
                <div className="custom-form">
                  <div id="message3" />
                  <form onSubmit={handleSubmit}>
                    <h4 className="text-dark mb-3">Post a New Job :</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Job Title</label>
                          <input
                            type="text"
                            className="form-control resume"
                            onChange={(e) => setJobTitle(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Job Type</label>
                          <div className="form-button">
                            <select
                              className="nice-select rounded"
                              onChange={(e) => setJobType(e.target.value)}>
                              <option data-display="Job Type">----</option>
                              <option value={"Full time"}>Full Time</option>
                              <option value={"Part time"}>Part Time</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {categories && (
                        <div className="col-md-6">
                          <div className="form-group app-label mt-2">
                            <label className="text-muted">Job Category</label>
                            <div className="form-button">
                              <select
                                className="nice-select rounded"
                                onChange={(e) =>
                                  setJobCategory(e.target.value)
                                }>
                                <option>----</option>
                                {categories.map((category) => {
                                  return (
                                    <option
                                      value={category.category_name}
                                      key={category._id}>
                                      {category.category_name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Location</label>
                          <input
                            type="text"
                            className="form-control resume"
                            onChange={(e) => setJobLocation(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Experience</label>
                          <input
                            type="number"
                            className="form-control resume"
                            onChange={(e) => setJobExperience(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">
                            Company Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control resume"
                            onChange={(e) => setJobCompanyEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Company Name</label>
                          <input
                            type="text"
                            className="form-control resume"
                            onChange={(e) => setCompanyName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted"> Salary</label>
                          <input
                            type="number"
                            className="form-control resume"
                            placeholder="Enter Salary eg: GH₵ 1000"
                            onChange={(e) => setJobSalary(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group app-label mt-2">
                          <label className="text-muted">Job Description</label>
                          <textarea
                            rows={6}
                            className="form-control resume"
                            defaultValue={""}
                            onChange={(e) => setJobDescription(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block">
                          Post Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* POST A JOB END */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default PostJob;
