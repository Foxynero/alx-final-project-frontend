import SearchPage from "../SearchPage/SearchPage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListPopular from "./ListPopular";
import queryString from "query-string";
import Header from "../Views/Header";
import Footer from "../Views/Footer";

const PopularItem = () => {
  const [id, setId] = useState(null);

  const { search } = useLocation();
  const { query } = queryString.parse(search);

  useEffect(() => {
    if (search) {
      setId(query);
    }
  }, [query, search]);

  return (
    <>
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
                  <h4 className="text-uppercase title mb-4">Job view</h4>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end home */}

        <section className="section">
          {/* SEARCH API PAGE */}
          <SearchPage />
          {/* SEARCH API PAGE */}

          <section className="section bg-light">
            <div className="container">{id && <ListPopular info={id} />}</div>
          </section>
        </section>

        {/* subscribe start */}
        <section className="section bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="float-left position-relative notification-icon mr-2">
                  <i className="mdi mdi-bell-outline text-primary" />
                  <span className="badge badge-pill badge-danger">1</span>
                </div>
                <h5 className="mt-2 mb-0">Your Job Notification</h5>
              </div>
              <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
                <form>
                  <div className="form-group mb-0">
                    <div className="input-group mb-0">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email :"
                        required
                        aria-describedby="newssubscribebtn"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary submitBnt"
                          type="submit"
                          id="newssubscribebtn">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* subscribe end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </>
  );
};

export default PopularItem;
