import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const Categories = () => {
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
                <h4 className="text-uppercase title mb-4">
                  Candidates Listing
                </h4>
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
                    <a href="#" className="text-uppercase font-weight-bold">
                      Candidates
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Candidates List
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end home */}

      {/* CANDIDATES LISTING START */}
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="left-sidebar">
                <div className="accordion" id="accordionExample">
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapseOne"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0 text-dark">Job Type</h6>
                      </div>
                    </a>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input all-select"
                            id="customCheckAll"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheckAll">
                            All Type
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input all-select"
                            id="customCheck22"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck22">
                            Freelancer
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input all-select"
                            id="customCheck23"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck23">
                            Full Time
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input all-select"
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck3">
                            Part Time
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input all-select"
                            id="customCheck4"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck4">
                            Internship
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsetwo"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapsetwo">
                      <div className="card-header" id="headingtwo">
                        <h6 className="mb-0 text-dark">Designation</h6>
                      </div>
                    </a>
                    <div
                      id="collapsetwo"
                      className="collapse show"
                      aria-labelledby="headingtwo">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck5"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck5">
                            Project Manager
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck6"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck6">
                            Web Designer
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck7"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck7">
                            Banking
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck8"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck8">
                            Digital &amp; Creative
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck9"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck9">
                            IT Contractor
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck10"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck10">
                            Java Developer
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck11"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck11">
                            Civil Engineert
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck12"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck12">
                            SEO
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsethree"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapsethree">
                      <div className="card-header" id="headingthree">
                        <h6 className="mb-0 text-dark">Skills</h6>
                      </div>
                    </a>
                    <div
                      id="collapsethree"
                      className="collapse show"
                      aria-labelledby="headingthree">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck13"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck13">
                            HTML
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck14">
                            CSS
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck15"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck15">
                            JavaScript
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck16"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck16">
                            PHP
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck17"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck17">
                            Wordpress
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck18"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck18">
                            Photoshop
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsefour"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapsefour">
                      <div className="card-header" id="headingfour">
                        <h6 className="mb-0 text-dark">Experince</h6>
                      </div>
                    </a>
                    <div
                      id="collapsefour"
                      className="collapse show"
                      aria-labelledby="headingfour">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio1">
                            1Year to 2Year
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio2">
                            2Year to 3Year
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio3">
                            3Year to 4Year
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio4">
                            4Year to 5Year
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio5">
                            5Year +
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsefive"
                      className="job-list"
                      aria-expanded="true"
                      aria-controls="collapsefive">
                      <div className="card-header" id="headingfive">
                        <h6 className="mb-0 text-dark">Gender</h6>
                      </div>
                    </a>
                    <div
                      id="collapsefive"
                      className="collapse show"
                      aria-labelledby="headingfive">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio6"
                            name="customRadio1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio6">
                            Male
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio7"
                            name="customRadio1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio7">
                            Female
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio8"
                            name="customRadio1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio8">
                            Others
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsesix"
                      className="job-list collapsed"
                      aria-expanded="false"
                      aria-controls="collapsesix">
                      <div className="card-header" id="headingsix">
                        <h6 className="mb-0 text-dark">Offerd Salary</h6>
                      </div>
                    </a>
                    <div
                      id="collapsesix"
                      className="collapse"
                      aria-labelledby="headingsix">
                      <div className="card-body p-0">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio9"
                            name="customRadio2"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio9">
                            $1k - $20k
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio10"
                            name="customRadio2"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio10">
                            $21k - $30k
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio11"
                            name="customRadio2"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio11">
                            $31k - $40k
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio12"
                            name="customRadio2"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio12">
                            $41k - $50k
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio13"
                            name="customRadio2"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customRadio13">
                            $51k - $60k
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse one end */}
                  <div className="card rounded mt-4">
                    <a
                      data-toggle="collapse"
                      href="#collapsesevan"
                      className="job-list collapsed"
                      aria-expanded="false"
                      aria-controls="collapsesevan">
                      <div
                        className="card-header border-bottom-0"
                        id="headingsevan">
                        <h6 className="mb-0 text-dark">Qualification</h6>
                      </div>
                    </a>
                    <div
                      id="collapsesevan"
                      className="collapse"
                      aria-labelledby="headingsevan">
                      <div className="card-body p-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck19"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck19">
                            Higher Secondary
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck20"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck20">
                            Bachelor Degree
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck21"
                          />
                          <label
                            className="custom-control-label ml-1 text-muted"
                            htmlFor="customCheck21">
                            Master Degree
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="candidates-listing-item">
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Mary Mainor
                          </a>
                        </h5>
                        <ul className="list-unstyled">
                          <li className="text-muted">
                            <i className="mdi mdi-account mr-1" />
                            Web Developer
                          </li>
                          <li className="text-muted">
                            <a href className="text-muted">
                              <i className="mdi mdi-map-marker mr-1" />
                              Scenic Way Atlanta.
                            </a>
                          </li>
                          <li className="text-muted">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $700 - $900/month
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Jack Hallock
                          </a>
                        </h5>
                        <ul className="list-unstyled">
                          <li className="text-muted">
                            <i className="mdi mdi-account mr-1" />
                            Web Developer
                          </li>
                          <li className="text-muted">
                            <a href className="text-muted">
                              <i className="mdi mdi-map-marker mr-1" />
                              Scenic Way Atlanta.
                            </a>
                          </li>
                          <li className="text-muted">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $700 - $900/month
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Rodney Wells
                          </a>
                        </h5>
                        <ul className="list-unstyled">
                          <li className="text-muted">
                            <i className="mdi mdi-account mr-1" />
                            Web Developer
                          </li>
                          <li className="text-muted">
                            <a href className="text-muted">
                              <i className="mdi mdi-map-marker mr-1" />
                              Scenic Way Atlanta.
                            </a>
                          </li>
                          <li className="text-muted">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $700 - $900/month
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Ruth Miles
                          </a>
                        </h5>
                        <ul className="list-unstyled">
                          <li className="text-muted">
                            <i className="mdi mdi-account mr-1" />
                            Web Developer
                          </li>
                          <li className="text-muted">
                            <a href className="text-muted">
                              <i className="mdi mdi-map-marker mr-1" />
                              Scenic Way Atlanta.
                            </a>
                          </li>
                          <li className="text-muted">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $700 - $900/month
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Frank Tower
                          </a>
                        </h5>
                        <ul className="list-unstyled">
                          <li className="text-muted">
                            <i className="mdi mdi-account mr-1" />
                            Web Developer
                          </li>
                          <li className="text-muted">
                            <a href className="text-muted">
                              <i className="mdi mdi-map-marker mr-1" />
                              Scenic Way Atlanta.
                            </a>
                          </li>
                          <li className="text-muted">
                            <i className="mdi mdi-currency-usd mr-1" />
                            $700 - $900/month
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border mt-4 rounded p-3">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="float-left mr-4">
                        <img
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                          alt
                          className="d-block rounded"
                          height={90}
                        />
                      </div>
                      <div className="candidates-list-desc overflow-hidden job-single-meta  pt-2">
                        <h5 className="mb-2">
                          <a href="#" className="text-dark">
                            Jerry Real
                          </a>
                        </h5>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item mr-4">
                            <p className="text-muted mb-0">
                              <i className="mdi mdi-account mr-1" />
                              PHP Developer
                            </p>
                          </li>
                          <li className="list-inline-item mr-4">
                            <p className="mb-0">
                              <a href className="text-muted">
                                <i className="mdi mdi-map-marker mr-1" />{" "}
                                Werninger Houston
                              </a>
                            </p>
                          </li>
                          <li className="list-inline-item">
                            <p className="text-muted mb-0">
                              <i className="mdi mdi-currency-usd mr-1" />
                              $800 - $950/month
                            </p>
                          </li>
                        </ul>
                        <p className="text-muted mt-1 mb-0">
                          Skills : HTML, CSS, JavaScript, Wordpress, PHP,
                          jQueary.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="candidates-list-fav-btn text-right">
                        <div className="fav-icon">
                          <i className="mdi mdi-heart" />
                        </div>
                        <div className="candidates-listing-btn mt-4">
                          <a
                            href="#"
                            className="btn btn-primary-outline btn-sm">
                            View Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination job-pagination justify-content-center mb-0 mt-4 pt-2">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true">
                      <i className="mdi mdi-chevron-double-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="mdi mdi-chevron-double-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* CANDIDATES LISTING END */}

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

export default Categories;
