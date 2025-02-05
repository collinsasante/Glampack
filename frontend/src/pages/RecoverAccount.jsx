import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/materialdesignicons.min.css";
import "../assets/css/style.min.css";

const RecoverAccount = () => {
  return (
    <section className="cover-user bg-white">
      <div className="container-fluid px-0">
        <div className="row g-0 position-relative">
          <div className="col-lg-4 cover-my-30 order-2">
            <div className="cover-user-img d-flex align-items-center">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column auth-hero">
                    <div className="mt-md-5 text-center">
                      <a
                        href="https://packglamour.com/"
                        className="text-primary h4 text-uppercase"
                      >
                        GlamPack
                      </a>
                    </div>
                    <div className="title-heading my-lg-auto">
                      <div className="card border-0" style={{ zIndex: 1 }}>
                        <div className="card-body p-0">
                          <h5 className="card-title">Recover Account</h5>
                          <form className="login-form mt-4">
                            <div className="row">
                              <div className="col-lg-12">
                                <p className="text-muted">
                                  Please enter your email address. You will
                                  receive a link to create a new password via
                                  email.
                                </p>
                                <div className="mb-3">
                                  <label className="form-label">
                                    Email address{" "}
                                    <span className="text-danger">*</span>
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
                                <div className="d-grid">
                                  <button className="btn btn-primary">
                                    Send
                                  </button>
                                </div>
                              </div>
                              <div className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <span className="text-dark me-2">
                                    Remember your password?
                                  </span>
                                  <a href="/" className="text-dark fw-semibold">
                                    Sign in
                                  </a>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="mb-md-5 text-center">
                      © {new Date().getFullYear()}
                      Developed by Webcasa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 offset-lg-4 padding-less img order-1"
            style={{ backgroundImage: "url('/images/1.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default RecoverAccount;
