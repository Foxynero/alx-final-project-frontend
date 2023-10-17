import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ListPopular = ({ info }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (info) {
      axios
        .post(`${process.env.REACT_APP_Base_url}/jobs/get_jobs_by_category`, {
          job_category: info,
        })
        .then((res) => {
          console.log(res.data);
          setCategory(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [info]);

  return (
    <>
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
    </>
  );
};

export default ListPopular;
