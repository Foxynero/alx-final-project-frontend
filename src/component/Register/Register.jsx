import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import axios from "axios";

const Register = () => {
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const toast = useRef(null);

  // todo: show toast
  const show = (message, status) => {
    toast.current.show({
      severity: status === 201 ? "success" : "error",
      summary: status === 201 ? "success" : "error",
      detail: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirm_password) {
      show("Password and Confirm Password does not match", 400);
      setLoading(false);
    } else {
      axios
        .post(`${process.env.REACT_APP_Base_url}/users/register`, {
          first_name,
          last_name,
          email,
          password,
          role,
        })
        .then((res) => {
          console.log(res.data);
          show(res.data.message, res.data.status);
          setLoading(false);

          if (res.data.status === 201) {
            window.location.href = "/login";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Toast ref={toast} />

      <section className="vh-100" style={{ backgroundColor: "lightgray" }}>
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="login_page bg-white shadow rounded p-4">
                    <div className="text-center">
                      <h4 className="mb-4">Signup</h4>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              First name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              required
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Last name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              required
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              required
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Role <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              required
                              onChange={(e) => setRole(e.target.value)}>
                              <option value>Choose...</option>
                              <option value="seeker">Job Seeker</option>
                              <option value="creator">Post Jobs</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Password <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Confirm Password{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              required
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="custom-control m-0 custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1">
                                I Accept{" "}
                                <a href="#/" className="text-primary">
                                  Terms And Condition
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                        {loading === false ? (
                          <div className="col-md-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit">
                              Register
                            </button>
                          </div>
                        ) : (
                          <div className="col-md-12">
                            <button
                              className="btn btn-primary w-100"
                              disabled
                              type="submit">
                              Loading ...
                            </button>
                          </div>
                        )}

                        <div className="col-lg-12 mt-4 text-center">
                          <h6>Or Signup With</h6>
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
                        <div className="mx-auto">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-1">
                              Already have an account ?
                            </small>{" "}
                            <a
                              href="/Login"
                              className="text-success font-weight-bold">
                              sign in
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>{" "}
            {/*end container*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
