import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const Faq = () => {
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
                <h4 className="text-uppercase title mb-4">F.A.Q</h4>
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
                      F.A.Q.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* FAQ START */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-content">
                <h4 className="text-dark">General Questions :</h4>
                <div className="faq-content mt-3">
                  <div className="accordion" id="accordionExample">
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapseOne"
                        className="faq position-relative"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        <div
                          className="card-header bg-light p-3"
                          id="headingOne">
                          <h4 className="title mb-0 faq-question">
                            {" "}
                            Ut feugiat eleifend metus ?
                          </h4>
                        </div>
                      </a>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapseTwo"
                        className="faq position-relative collapsed"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        <div
                          className="card-header bg-light p-3"
                          id="headingTwo">
                          <h4 className="title mb-0 faq-question">
                            {" "}
                            Vitae sapien libero faucibus ?{" "}
                          </h4>
                        </div>
                      </a>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapsethree"
                        className="faq position-relative collapsed"
                        aria-expanded="false"
                        aria-controls="collapsethree">
                        <div
                          className="card-header bg-light p-3"
                          id="headingthree">
                          <h4 className="title mb-0 faq-question">
                            {" "}
                            Feugiat viverra varius ?{" "}
                          </h4>
                        </div>
                      </a>
                      <div
                        id="collapsethree"
                        className="collapse"
                        aria-labelledby="headingthree"
                        data-parent="#accordionExample">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapsefour"
                        className="faq position-relative collapsed"
                        aria-expanded="false"
                        aria-controls="collapsefour">
                        <div
                          className="card-header bg-light p-3"
                          id="headingfour">
                          <h4 className="title mb-0 faq-question">
                            {" "}
                            Tincidunt Cras a semper ?{" "}
                          </h4>
                        </div>
                      </a>
                      <div
                        id="collapsefour"
                        className="collapse"
                        aria-labelledby="headingfour"
                        data-parent="#accordionExample">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card rounded shadow mb-0">
                      <a
                        data-toggle="collapse"
                        href="#collapsefive"
                        className="faq position-relative collapsed"
                        aria-expanded="false"
                        aria-controls="collapsefive">
                        <div
                          className="card-header bg-light p-3"
                          id="headingfive">
                          <h4 className="title mb-0 faq-question">
                            {" "}
                            Feugiat viverra varius ?{" "}
                          </h4>
                        </div>
                      </a>
                      <div
                        id="collapsefive"
                        className="collapse"
                        aria-labelledby="headingfive"
                        data-parent="#accordionExample">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-content mt-5">
                <h4 className="text-dark">Career Faq :</h4>
                <div className="faq-content mt-3">
                  <div className="accordion" id="accordionExample2">
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapsesix"
                        className="faq collapsed position-relative"
                        aria-expanded="true"
                        aria-controls="collapsesix">
                        <div
                          className="card-header bg-light p-3"
                          id="headingsix">
                          <h6 className="title mb-0 faq-question">
                            Quisque condimentum tempor ?
                          </h6>
                        </div>
                      </a>
                      <div
                        id="collapsesix"
                        className="collapse"
                        aria-labelledby="headingsix"
                        data-parent="#accordionExample2">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* collapse one end */}
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapsesevan"
                        className="faq collapsed position-relative"
                        aria-expanded="false"
                        aria-controls="collapsesevan">
                        <div
                          className="card-header bg-light p-3"
                          id="headingsevan">
                          <h6 className="title mb-0 faq-question">
                            Etiam us imperdiet orci ?
                          </h6>
                        </div>
                      </a>
                      <div
                        id="collapsesevan"
                        className="collapse"
                        aria-labelledby="headingsevan"
                        data-parent="#accordionExample2">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* collapse two end */}
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapseeight"
                        className="faq collapsed position-relative"
                        aria-expanded="false"
                        aria-controls="collapseeight">
                        <div
                          className="card-header bg-light p-3"
                          id="headingeight">
                          <h6 className="title mb-0 faq-question">
                            Sed posuere vulputate ?
                          </h6>
                        </div>
                      </a>
                      <div
                        id="collapseeight"
                        className="collapse"
                        aria-labelledby="headingeight"
                        data-parent="#accordionExample2">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* collapse three end */}
                    <div className="card border rounded shadow mb-3">
                      <a
                        data-toggle="collapse"
                        href="#collapsenine"
                        className="faq collapsed position-relative"
                        aria-expanded="false"
                        aria-controls="collapsenine">
                        <div
                          className="card-header bg-light p-3"
                          id="headingnine">
                          <h6 className="title mb-0 faq-question">
                            Fusce at felis luctus ?
                          </h6>
                        </div>
                      </a>
                      <div
                        id="collapsenine"
                        className="collapse"
                        aria-labelledby="headingnine"
                        data-parent="#accordionExample2">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* collapse four end */}
                    <div className="card border rounded shadow mb-0">
                      <a
                        data-toggle="collapse"
                        href="#collapseten"
                        className="faq collapsed position-relative"
                        aria-expanded="false"
                        aria-controls="collapseten">
                        <div
                          className="card-header bg-light p-3"
                          id="headingten">
                          <h6 className="title mb-0 faq-question">
                            Vestibulum a aliquam leo ?
                          </h6>
                        </div>
                      </a>
                      <div
                        id="collapseten"
                        className="collapse"
                        aria-labelledby="headingten"
                        data-parent="#accordionExample2">
                        <div className="card-body">
                          <p className="text-muted mb-0 faq-ans">
                            Temporibus autem quibusdam aut officiis debitis aut
                            rerum necessitatibus saepe eveniet voluptates
                            repudiandae sint et molestiae non recusandae that
                            Itaque earum rerum sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis was doloribus asperiores repellat
                            sed ut perspiciatis unde omnis iste natus error at
                            accusantium doloremque laudantium totam rem aperiam
                            eaque ipsa quae ab.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ END */}

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

export default Faq;
