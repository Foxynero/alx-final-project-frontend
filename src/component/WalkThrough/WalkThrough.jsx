import React from "react";

const WalkThrough = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center ">
                <h4 className="title title-line pb-5">How It Work</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4 pt-2">
              <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                <div className="how-it-work-img position-relative rounded-pill mb-3">
                  <img
                    src="images/how-it-work/img-1.png"
                    alt="..."
                    className="mx-auto d-block"
                    height={50}
                  />
                </div>
                <div>
                  <h5>Register an account</h5>
                  <p className="text-muted">
                    Just sign up with your very basic information about yourself
                    and experience real freedom
                  </p>
                  <a href="/Register" className="text-primary">
                    Register Here <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4 pt-2">
              <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                <div className="how-it-work-img position-relative rounded-pill mb-3">
                  <img
                    src="images/how-it-work/img-2.png"
                    alt="..."
                    className="mx-auto d-block"
                    height={50}
                  />
                </div>
                <div>
                  <h5>Search your dream job</h5>
                  <p className="text-muted">
                    Job searching is available through location, name or by
                    category asa simple and easy as that
                  </p>
                  <a href="/jobs" className="text-primary">
                    Search now <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4 pt-2">
              <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                <div className="how-it-work-img position-relative rounded-pill mb-3">
                  <img
                    src="images/how-it-work/img-3.png"
                    alt="..."
                    className="mx-auto d-block"
                    height={50}
                  />
                </div>
                <div>
                  <h5>Apply for job</h5>
                  <p className="text-muted">
                    All cv's are reviewed by our team and then proceed for
                    interviews if your credentials fit the role
                  </p>
                  <a href="/jobs" className="text-primary">
                    Apply now <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WalkThrough;
