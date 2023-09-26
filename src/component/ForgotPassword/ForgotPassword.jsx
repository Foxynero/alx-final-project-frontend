import React from 'react'

const ForgotPassword = () => {
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

            <div className="back-to-home rounded d-none d-sm-block">
                <a
                href="/"
                className="text-white rounded d-inline-block text-center"
                >
                <i className="mdi mdi-home" />
                </a>
            </div>
            {/* Hero Start */}

            <section
                className="vh-100"
                style={{
                background:
                    'url("https://via.placeholder.com/2000X1333//88929f/5a6270C/O https://placeholder.com/") center center'
                }}
            >
                <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                        <div className="login_page bg-white shadow rounded p-4">
                            <div className="text-center">
                            <h4 className="mb-4">Recover Account</h4>
                            </div>
                            <form className="login-form">
                            <div className="row">
                                <div className="col-lg-12">
                                <p className="text-muted">
                                    Please enter your email address. You will receive a link
                                    to create a new password via email.
                                </p>
                                <div className="form-group position-relative">
                                    <label>
                                    Email address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email Address"
                                    name="email"
                                    required
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <button className="btn btn-primary w-100">Send</button>
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
            {/*end section*/}
            

        </div>
    )
}

export default ForgotPassword
