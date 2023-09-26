import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const AllCategories = () => {
  return (
    <div>
      {/* Loader */}
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
      {/* Loader */}

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
                <h4 className="text-uppercase title mb-4">Team</h4>
                <ul className="page-next d-inline-block mb-0">
                  <li>
                    <a
                      href="index.html"
                      className="text-uppercase font-weight-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-uppercase font-weight-bold">
                      Pages
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Team
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* TEAM START */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Stormy Bush</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Web Developer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Maecenas tellus eget condimentum.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Darryl Abell</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Graphic Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Phasellus ullamcorper ipsum nunc nunc nonummy metus.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Roger Utz</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Web Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Etiam ultricies nisi augue Curabitur ullamcorper
                      ultricies.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Sylvia Mace</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        UI/UX Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Nunc nec neque a leo dolor tempus non hendrerit nisi.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Mark Mitchell</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        PHP Developer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Phasellus ullamcorper ipsum nunc nunc nonummy metus.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Juan Bluford</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Web Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Nunc nec neque a leo dolor tempus non hendrerit nisi.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Robin Douglas</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Web Developer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Maecenas tellus eget condimentum sem quam.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">John Nixon</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Graphic Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Etiam ultricies nisi augue Curabitur ullamcorper
                      ultricies.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Nia Griffith</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Graphic Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Etiam ultricies nisi augue Curabitur ullamcorper
                      ultricies.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">John Stuber</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        UI/UX Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Phasellus ullamcorper ipsum nunc nunc nonummy metus.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Alma Ramirez</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        Web Designer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Nunc nec neque a leo dolor tempus non hendrerit nisi.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 pb-2">
              <div className="team-box position-relative overflow-hidden text-center bg-white">
                <div className="team-img position-relative overflow-hidden d-block">
                  <img
                    src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid d-block rounded"
                  />
                  <div className="team-name p-2 rounded-bottom">
                    <h6 className="text-white mb-0">Alan Lee</h6>
                  </div>
                </div>
                <div className="team-content text-center pb-0 pt-3">
                  <div className>
                    <p className="mb-0">
                      <a href="#" className="text-dark font-weight-bold">
                        PHP Developer
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      Maecenas tellus eget condimentum sem quam.
                    </p>
                    <ul className="list-unstyled social-icon mt-3 mb-0">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i className="mdi mdi-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM END */}

      {/* subscribe start */}
      <section className="section bg-light">
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
  );
};

export default AllCategories;
