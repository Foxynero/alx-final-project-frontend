import React from "react";
import Footer from "../Views/Footer";
import Header from "../Views/Header";

const Blog = () => {
  return (
    <div>
      {/* Loader */}
      {/* <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div> */}
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
                <h4 className="text-uppercase title mb-4">Blog Detail</h4>
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
                      Blog
                    </a>
                  </li>
                  <li>
                    <span className="text-uppercase text-white font-weight-bold">
                      Blog Detail
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home */}

      {/* BLOG LIST START */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="sidebar mt-sm-30 p-4 rounded shadow">
                {/* SEARCH */}
                <div className="widget mb-4 pb-2">
                  <div id="search2" className="widget-search mb-0">
                    <form
                      role="search"
                      method="get"
                      id="searchform"
                      className="searchform">
                      <div>
                        <input
                          type="text"
                          className="border rounded"
                          name="s"
                          id="s"
                          placeholder="Search Keywords..."
                        />
                        <input
                          type="submit"
                          id="searchsubmit"
                          defaultValue="Search"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* SEARCH */}
                {/* CATAGORIES */}
                <div className="widget mb-4 pb-2">
                  <h4 className="widget-title">Catagories</h4>
                  <ul className="list-unstyled mt-4 mb-0 catagories">
                    <li>
                      <a href="jvascript:void(0)">Finance</a>{" "}
                      <span className="float-right">13</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Business</a>{" "}
                      <span className="float-right">09</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Blog</a>{" "}
                      <span className="float-right">18</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Corporate</a>{" "}
                      <span className="float-right">20</span>
                    </li>
                    <li>
                      <a href="jvascript:void(0)">Investment</a>{" "}
                      <span className="float-right">22</span>
                    </li>
                  </ul>
                </div>
                {/* CATAGORIES */}
                {/* RECENT POST */}
                <div className="widget mb-4 pb-2">
                  <h4 className="widget-title">Recent Post</h4>
                  <div className="mt-4">
                    <div className="clearfix post-recent">
                      <div className="post-recent-thumb float-left">
                        {" "}
                        <a href="jvascript:void(0)">
                          {" "}
                          <img
                            alt="img"
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            className="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div className="post-recent-content float-left">
                        <a href="jvascript:void(0)">Consultant Business</a>
                        <span className="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                    <div className="clearfix post-recent">
                      <div className="post-recent-thumb float-left">
                        {" "}
                        <a href="jvascript:void(0)">
                          {" "}
                          <img
                            alt="img"
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            className="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div className="post-recent-content float-left">
                        <a href="jvascript:void(0)">
                          Look On The Glorious Balance
                        </a>{" "}
                        <span className="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                    <div className="clearfix post-recent">
                      <div className="post-recent-thumb float-left">
                        {" "}
                        <a href="jvascript:void(0)">
                          {" "}
                          <img
                            alt="img"
                            src="https://via.placeholder.com/800X800//88929f/5a6270C/O https://placeholder.com/"
                            className="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <div className="post-recent-content float-left">
                        <a href="jvascript:void(0)">Research Financial.</a>{" "}
                        <span className="text-muted mt-2">15th June, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RECENT POST */}
                {/* TAG CLOUDS */}
                <div className="widget mb-4 pb-2">
                  <h4 className="widget-title">Tags Cloud</h4>
                  <div className="tagcloud mt-4">
                    <a href="jvascript:void(0)" className="rounded">
                      Business
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Finance
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Marketing
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Fashion
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Bride
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Lifestyle
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Travel
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Beauty
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Video
                    </a>
                    <a href="jvascript:void(0)" className="rounded">
                      Audio
                    </a>
                  </div>
                </div>
                {/* TAG CLOUDS */}
                {/* SOCIAL */}
                <div className="widget">
                  <h4 className="widget-title">Follow us</h4>
                  <ul className="list-unstyled social-icon mt-4 mb-0">
                    <li className="list-inline-item">
                      <a href="jvascript:void(0)" className="rounded">
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="jvascript:void(0)" className="rounded">
                        <i className="mdi mdi-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="jvascript:void(0)" className="rounded">
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="jvascript:void(0)" className="rounded">
                        <i className="mdi mdi-vimeo" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="jvascript:void(0)" className="rounded">
                        <i className="mdi mdi-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* SOCIAL */}
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-8 col-md-6 col-12 order-1 order-md-2">
              <div className="shadow rounded p-4">
                <div className="blog-details-img">
                  <img
                    src="https://via.placeholder.com/800X450//88929f/5a6270C/O https://placeholder.com/"
                    alt
                    className="img-fluid mx-auto rounded d-block"
                  />
                </div>
                <div className="blog-details meta mt-3">
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item mr-4">
                      <p className="text-muted mb-0">
                        <i className="mdi mdi-calendar-range mr-1" />
                        01-January-2018
                      </p>
                    </li>
                    <li className="list-inline-item mr-4">
                      <p className="text-muted mb-0">
                        <i className="mdi mdi-message-reply-text mr-1" />4
                        Comments
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted mb-0">
                        <i className="mdi mdi-layers mr-1" />
                        IT Jobs
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="blog-details-desc p-2">
                  <h5 className="mb-3">
                    <a href="#" className="text-dark">
                      A small river named Duden flows by their place and
                      supplies regelialia.
                    </a>
                  </h5>
                  <p className="text-muted mb-3 f-13">
                    The Big Oxmox advised her not to do so because there were
                    thousands of bad Commas as wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way But nothing the copy said could
                    convince her and s didn’t take long until a few insidious
                    Copy Writers ambushed made her drunk with Longe and Parole
                    and dragged a into their agency where they abused her for
                    their projects again and again. And if hasn’t been
                    rewritten.
                  </p>
                  <p className="text-muted f-13">
                    The copy warned the Little Blind Text that where it came
                    from would have rewritten thousand times and everything that
                    was left from its origin would be the word and the Little
                    Blind Text should turn around and return its own, safe
                    country But nothing the copy said could convince.
                  </p>
                  <blockquote className="blockquote p-4 position-relative">
                    <i className="fas fa-quote-left text-primary" />
                    <p className="mb-2 font-italic f-14 text-dark">
                      It is a paradisematic country in which roasted parts of
                      sentences fly into your mouth Even the all-powerful
                      Pointing has control about the blind texts it is an almost
                      unorthographic life One day however a small line of blind
                      text by the name as of Lorem Ipsum decided to leave.
                    </p>
                    <h6 className="mb-0">
                      <a href="#" className="text-dark">
                        By : Maude J. McDowell
                      </a>
                    </h6>
                  </blockquote>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mt-1">
                      <a href className="text-dark">
                        <p className="mb-0 f-17">
                          <i className="mdi mdi-heart-outline mr-1 text-danger" />
                          Like
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded border mt-4 p-4">
                <h5 className="text-dark">
                  <i className="mdi mdi-comment-multiple mr-2" />4 Comments
                </h5>
                <div className="media mt-4 pt-2">
                  <div className="blog-comment-img">
                    <img
                      className="d-block mx-auto rounded-pill"
                      height={60}
                      alt
                      src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0">
                      <a href="#" className="text-dark">
                        Kathleen Manuel
                      </a>
                    </h6>
                    <p className="text-muted mb-0">08-Sep-2018 at 02:15 pm</p>
                    <p className="text-muted f-14 mb-2">
                      The Big Oxmox advised her not to do so, because there were
                      thousands of bad a Commas wild Question Marks and devious
                      Semikoli.
                    </p>
                    <p className="mb-0">
                      <a href className="text-muted">
                        <i className="mdi mdi-reply-all mr-2" />
                        Reply
                      </a>
                    </p>
                    <div className="media mt-4">
                      <div className="blog-comment-img">
                        <img
                          className="d-block mx-auto rounded-pill"
                          height={60}
                          alt
                          src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                        />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0">
                          <a href="#" className="text-dark">
                            John Newton
                          </a>
                        </h6>
                        <p className="text-muted mb-0">
                          03, Oct, 2018 At 06.05pm
                        </p>
                        <p className="text-muted f-14 mb-2">
                          Nam libero tempore, cum soluta nobis est at eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat.
                        </p>
                        <p className="mb-0">
                          <a href className="text-muted">
                            <i className="mdi mdi-reply-all mr-2" />
                            Reply
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media mt-4">
                  <div className="blog-comment-img">
                    <img
                      className="d-block mx-auto rounded-pill"
                      height={60}
                      alt
                      src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0">
                      <a href="#" className="text-dark">
                        Ruby Poe
                      </a>
                    </h6>
                    <p className="text-muted mb-0">04, Oct, 2018 At 09:35am</p>
                    <p className="text-muted mb-2">
                      Similique sunt in culpa qui officia deserunt mollitia
                      animi id est laborum et dolorum fuga et harum quidem
                      rerum.
                    </p>
                    <p className="mb-0">
                      <a href className="text-muted">
                        <i className="mdi mdi-reply-all mr-2" />
                        Reply
                      </a>
                    </p>
                  </div>
                </div>
                <div className="media mt-4">
                  <div className="blog-comment-img">
                    <img
                      className="d-block mx-auto rounded-pill"
                      height={60}
                      alt
                      src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/"
                    />
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="mb-0">
                      <a href="#" className="text-dark">
                        Robert Booker
                      </a>
                    </h6>
                    <p className="text-muted mb-0">04, Oct, 2018 at 04:16 pm</p>
                    <p className="text-muted mb-2">
                      When she reached the first hills of the Italic Mountains,
                      she had a last view on the skyline her hometown the
                      headline.
                    </p>
                    <p className="mb-0">
                      <a href className="text-muted">
                        <i className="mdi mdi-reply-all mr-2" />
                        Reply
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded border mt-4 p-4">
                <h5 className="text-dark">
                  <i className="mdi mdi-pencil mr-2" />
                  Leave Your Comments
                </h5>
                <div className="custom-form mt-4 pt-2">
                  <form name="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group blog-details-form">
                          <i className="mdi mdi-account text-muted f-17" />
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control blog-details"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group blog-details-form">
                          <i className="mdi mdi-email text-muted f-17" />
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control blog-details"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group blog-details-form">
                          <i className="mdi mdi-web text-muted f-17" />
                          <input
                            name="url"
                            id="url"
                            type="url"
                            className="form-control blog-details"
                            placeholder="url"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group blog-details-form">
                          <i className="mdi mdi-comment-processing text-muted f-17" />
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control blog-details"
                            placeholder="Comment"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          defaultValue="Post comment"
                        />
                      </div>
                    </div>
                  </form>
                  {/* /form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG LIST END */}

      {/* subscribe start */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="float-left position-relative notification-icon mr-2">
                <i className="mdi mdi-bell-outline text-primary h2" />
                <span className="badge badge-pill badge-danger">1</span>
              </div>
              <h5 className="mt-2 mb-0">Your Job Notification</h5>
            </div>
            <div className="col-lg-8">
              <div className="subscribe">
                <form>
                  <div className="row">
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your E-mail address"
                      />
                    </div>
                    <div className="col-md-3">
                      <button type="submit" className="btn btn-primary">
                        Subscribe Us
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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

export default Blog;
