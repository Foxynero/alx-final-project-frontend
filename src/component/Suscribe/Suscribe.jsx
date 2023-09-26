import React, { useState } from "react";

const Suscribe = () => {
  const [email, setEmail] = useState("");

  const Suscribe = () => {
    alert("You have successfully subscribed to our newsletter " + email);
    window.location.reload(true);
  };
  return (
    <>
      <section className="section py-5">
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
              <form onSubmit={Suscribe}>
                <div className="form-group mb-0">
                  <div className="input-group mb-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email "
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
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
    </>
  );
};

export default Suscribe;
