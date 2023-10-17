import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Base_url}/jobs/categories`)
      .then((res) => {
        setPopular(res.data.info);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <section className="section py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center ">
                <h4 className="title title-line pb-5">Popular Category</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {popular &&
              popular.map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 mt-4 pt-2" key={item._id}>
                    <Link
                      to={{
                        pathname: `/popular-item`,
                        search: `?query=${item.category_name}`,
                      }}>
                      <div className="popu-category-box bg-light rounded text-center p-4">
                        <div className="popu-category-icon mb-3">
                          <i className="mdi mdi-account d-inline-block rounded-pill h3 text-primary" />
                        </div>
                        <div className="popu-category-content">
                          <h5 className="mb-2 text-dark title">
                            {item.category_name}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-4 pt-2">
              <a href="/jobs" className="btn btn-primary-outline">
                Browse All Jobs <i className="mdi mdi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
