import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  //   const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [job_title, setJobTitle] = useState("");
  const [job_category, setJobCategory] = useState("");
  const [job_location, setJobLocation] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/categories`)
      .then((res) => {
        setPopular(res.data.info);
        console.log(res.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_Base_url}/jobs/job_search`, {
        job_title,
        job_category,
        job_location,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          navigate("/search_results", { state: { jobs: res.data.info } });
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="home-form-position">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-registration-form p-4 mb-3">
              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="registration-form-box">
                      <i className="fa fa-briefcase" />
                      <input
                        type="text"
                        id="exampleInputName1"
                        className="form-control rounded registration-input-box"
                        placeholder="Job keywords..."
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="registration-form-box">
                      <i className="fa fa-location-arrow" />
                      <input
                        type="text"
                        className="form-control rounded registration-input-box"
                        placeholder="Location..."
                        onChange={(e) => setJobLocation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="registration-form-box">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-primary btn-block"
                        defaultValue="Submit"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
