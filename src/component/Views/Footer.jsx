import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer start */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a href="#/">
                <img src="images/logo-light.png" height={20} alt="Logo" />
              </a>
              <p className="mt-4">
                FefHub! Where Careers Begin!
                Sign up today!
              </p>
              <ul className="social-icon social list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#/" className="rounded">
                    <i className="mdi mdi-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" className="rounded">
                    <i className="mdi mdi-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" className="rounded">
                    <i className="mdi mdi-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#/" className="rounded">
                    <i className="mdi mdi-google" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <p className="text-white mb-4 footer-list-title">Company</p>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="/About" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> About Us
                  </a>
                </li>
                <li>
                  <a href="/Blog" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Blog
                  </a>
                </li>
                <li>
                  <a href="#/" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Marketing
                  </a>
                </li>
                <li>
                  <a href="#/" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Agencies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <p className="text-white mb-4 footer-list-title">Resources</p>
              <ul className="list-unstyled footer-list">
                <li>
                  <a href="#/" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Support
                  </a>
                </li>
                <li>
                  <a href="#/" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/Pricing" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> Billing
                  </a>
                </li>
                <li>
                  <a href="/Faq" className="text-foot">
                    <i className="mdi mdi-chevron-right" /> F.A.Q.
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <p className="text-white mb-4 footer-list-title f-17">
                Business Hours
              </p>
              <ul className="list-unstyled text-foot mt-4 mb-0">
                <li>Monday - Friday : 9:00 to 17:00</li>
                <li className="mt-2">Saturday : 10:00 to 15:00</li>
                <li className="mt-2">Sunday : Day Off (Holiday)</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
      <hr />
      <footer className="footer footer-bar">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className>
                <p className="mb-0">
                  © 2019 -{new Date().getUTCFullYear()} FefHub.
                  <i className="mdi mdi-heart text-danger" />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </footer>
      {/*end footer*/}

      {/* Back to top */}
      <a href="#/" className="back-to-top rounded text-center" id="back-to-top">
        <i className="mdi mdi-chevron-up d-block"> </i>
      </a>
      {/* Back to top */}
    </div>
  );
};

export default Footer;
