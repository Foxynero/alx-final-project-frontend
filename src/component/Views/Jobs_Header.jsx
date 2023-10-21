import React, { useEffect, useState } from "react";
import A from "../images/logo-light.png";
import B from "../images/logo-dark.png";
import axios from "axios";

const JobsHeader = () => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // get role from session storage
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    const tk = sessionStorage.getItem("token");
    setToken(tk);

    if (token) {
      axios
        .post(
          `${process.env.REACT_APP_Base_url}/users/user_details`,
          {
            user_id: sessionStorage.getItem("user_id"),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);

          setUserData(res.data.info);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  // todo: logout
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <header id="topnav" className="defaultscroll scroll-active">
        {/* Tagline STart */}
        <div className="tagline">
          <div className="container">
            <div className="float-left">
              <div className="phone">
                <a href="tel:+233 501592984" style={{ color: "#fff" }}>
                  <i className="mdi mdi-phone-classic" /> +233 501000000
                </a>
              </div>
              <div className="email">
                <a href="mailto:flexywork327@gmail.com">
                  <i className="mdi mdi-email" /> customerservices@fefhub.com
                </a>
              </div>
            </div>
            <div>
              {token === null ? null : (
                <>
                  {userData && (
                    <div className="float-right">
                      <ul
                        className="topbar-list list-unstyled d-flex"
                        style={{ margin: "11px 0px" }}>
                        <li className="list-inline-item">
                          <section
                            style={{ marginTop: "6px" }}
                            className="d-flex justify-content-center">
                            <div className="d-flex">
                              <span className="rounded-circle bg-light text-dark p-2">
                                {userData?.first_name[0]}{" "}
                                {userData?.last_name[0]}
                              </span>
                            </div>
                          </section>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <a
                              className="btn dropdown-toggle"
                              href="#/"
                              role="button"
                              data-toggle="dropdown"
                              aria-expanded="false">
                              {userData?.first_name} {userData?.last_name}
                            </a>

                            <div className="dropdown-menu">
                              {role && role === "seeker" ? (
                                <a
                                  className="dropdown-item text-dark"
                                  href="/seeker-profile">
                                  profile
                                </a>
                              ) : null}
                              <a
                                className="dropdown-item text-dark"
                                href="#/"
                                onClick={handleLogout}>
                                logout
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* Tagline End */}

        {/* Menu Start */}
        <div className="container">
          {/* Logo container*/}
          <div>
            <a href="/" className="logo">
              <img src={A} alt=".." className="logo-light" height={18} />
              <img src={B} alt=".." className="logo-dark" height={18} />
            </a>
          </div>
          {role && role === "seeker" ? (
            <div className="buy-button">
              <a href="/jobs-portal" className="btn btn-primary">
                <i className="mdi mdi-cloud-upload" /> Applied jobs
              </a>
            </div>
          ) : (
            <div className="buy-button">
              <a href="/post-job" className="btn btn-primary">
                <i className="mdi mdi-cloud-upload" /> Want to post?
              </a>
            </div>
          )}

          {/* End Logo container*/}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a href="#/" className="navbar-toggle">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {role && role === "creator" ? (
            <div id="navigation">
              {/* Navigation Menu*/}
              <ul className="navigation-menu">
                <li className="has-submenu">
                  <a href="/jobs-portal">Jobs Dashboard</a>
                </li>

                <li className="has-submenu">
                  <a href="/applied-jobs">Jobs Applied</a>
                </li>
              </ul>
              {/*end navigation menu*/}
            </div>
          ) : (
            <div id="navigation">
              {/* Navigation Menu*/}
              <ul className="navigation-menu">
                <li className="has-submenu">
                  <a href="/jobs-portal">Applied Jobs</a>
                </li>
                <li className="has-submenu">
                  <a href="/seeker-profile">Profile</a>
                </li>
              </ul>
              {/*end navigation menu*/}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default JobsHeader;
