import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toast = useRef(null);
  const location_data = useLocation();
  console.log(location_data);
  console.log(location_data.state);

  // todo: show toast
  const show = (message, status) => {
    toast.current.show({
      severity: status === 200 ? "success" : "error",
      summary: status === 200 ? "success" : "error",
      detail: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_Base_url}/users/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        show(res.data.message, res.data.status);
        setLoading(false);

        if (res.data.status === 200) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user_id", res.data.info._id);
          sessionStorage.setItem("role", res.data.info.role);
          sessionStorage.setItem(
            "preference",
            res.data.info.isPreferenceSelected
          );
          if (location_data.state !== null) {
            window.location.href = location_data.state.location.pathname;
          } else if (location_data.state === null) {
            window.location.href = "/";
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="back-to-home rounded d-none d-sm-block">
        <a href="/" className="text-white rounded d-inline-block text-center">
          <i className="mdi mdi-home" />
        </a>
      </div>
      {/* Hero Start */}
      <section
        className="vh-100"
        style={{
          backgroundColor: "lightgray",
        }}>
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="login-page bg-white shadow rounded p-4">
                    <div className="text-center">
                      <h4 className="mb-4">Login</h4>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group position-relative">
                            <label>
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              required
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group position-relative">
                            <label>
                              Password <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              required
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <p className="float-right forgot-pass">
                            <a
                              href="/ForgotPassword"
                              className="text-dark font-weight-bold">
                              Forgot password ?
                            </a>
                          </p>
                          <div className="form-group">
                            <div className="custom-control m-0 custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* change button to loading when setLoading is true */}
                        {loading === false ? (
                          <div className="col-lg-12 mb-0">
                            <button className="btn btn-primary w-100">
                              Sign in
                            </button>
                          </div>
                        ) : (
                          <div className="col-lg-12 mb-0">
                            <button className="btn btn-primary w-100" disabled>
                              Loading...
                            </button>
                          </div>
                        )}

                        <div className="col-lg-12 mt-4 text-center">
                          <h6>Or Login With</h6>
                          <ul className="list-unstyled social-icon mb-0 mt-3">
                            <li className="list-inline-item">
                              <a href="#/" className="rounded">
                                <i
                                  className="mdi mdi-facebook"
                                  title="Facebook"
                                />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#/" className="rounded">
                                <i
                                  className="mdi mdi-google-plus"
                                  title="Google"
                                />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#/" className="rounded">
                                <i
                                  className="mdi mdi-github-circle"
                                  title="Github"
                                />
                              </a>
                            </li>
                          </ul>
                          {/*end icon*/}
                        </div>
                        <div className="col-12 text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-1">
                              Don't have an account ?
                            </small>{" "}
                            <a
                              href="/register"
                              className="text-danger font-weight-bold">
                              sign up
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/**/}
                </div>{" "}
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>{" "}
            {/*end container*/}
          </div>
        </div>
      </section>
      {/*end section*/}
      {/* Hero End */}
    </>
  );
};

export default Login;
