import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const toast = useRef(null);

  // todo: show toast
  const show = (message, status) => {
    toast.current.show({
      severity: status === 201 ? "success" : "error",
      summary: status === 201 ? "success" : "error",
      detail: message,
    });
  };

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_Base_url}/users/user_details`, {
        user_id: sessionStorage.getItem("user_id"),
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.info);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_Base_url}/users/register`, {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        role: user.role,
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
  };

  // todo: handle file
  const handleFile = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="back-to-home rounded d-none d-sm-block">
        <a href="/" className="text-white rounded d-inline-block text-center">
          <i className="mdi mdi-home" />
        </a>
      </div>

      <section className="vh-100" style={{ backgroundColor: "lightgray" }}>
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="login_page bg-white shadow rounded p-4">
                    <div className="text-center">
                      <h4 className="mb-4">Update Profile</h4>
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
                              defaultValue={user.first_name}
                              onChange={(e) =>
                                setUser((user) => {
                                  return {
                                    ...user,
                                    first_name: e.target.value,
                                  };
                                })
                              }
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
                              defaultValue={user.last_name}
                              onChange={(e) =>
                                setUser((user) => {
                                  return {
                                    ...user,
                                    last_name: e.target.value,
                                  };
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Your Location{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                              defaultValue={user.location}
                              onChange={(e) =>
                                setUser((user) => {
                                  return {
                                    ...user,
                                    location: e.target.value,
                                  };
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={user.email}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group position-relative">
                            <label>
                              Years of Experience{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              required
                              defaultValue={user.experience}
                              onChange={(e) =>
                                setUser((user) => {
                                  return {
                                    ...user,
                                    experience: e.target.value,
                                  };
                                })
                              }>
                              <option value>Choose...</option>
                              <option value="0">Fresher</option>
                              <option value="1">1 Years</option>
                              <option value="2">2 Years</option>
                              <option value="3">3 Years</option>
                              <option value="4">4 Years</option>
                              <option value="5">5 Years</option>
                              <option value="6">6 Years</option>
                              <option value="7">7 Years</option>
                              <option value="8">8 Years</option>
                              <option value="9">9 Years</option>
                              <option value="10">10 Years</option>
                              <option value="10+">10+ Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              Upload CV / Resume{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="Password"
                              required
                              onChange={handleFile}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group position-relative">
                            <label>
                              role <span className="text-danger">*</span>
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              defaultValue={user.role}
                              disabled
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
                              update profile
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

export default UpdateProfile;
