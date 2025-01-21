import React from "react";

const SignupPage = () => {
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
                          <h5 className="card-title">Signup</h5>
                          <form className="login-form mt-4">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    First name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="s"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Last name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="s"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Your Email{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="mb-3">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      I Accept{" "}
                                      <a href="#" className="text-primary">
                                        Terms And Condition
                                      </a>
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-12">
                                <div className="d-grid">
                                  <button className="btn btn-primary">
                                    Register
                                  </button>
                                </div>
                              </div>

                              <div className="mx-auto">
                                <p className="mb-0 mt-3">
                                  <span className="text-dark me-2">
                                    Already have an account ?
                                  </span>{" "}
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
                      <p className="mb-0 text-muted">
                        ©{" "}
                        <script>{`document.write(new Date().getFullYear())`}</script>{" "}
                        Developed by Webcasa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 offset-lg-4 padding-less img order-1"
            style={{
              backgroundImage: 'url("images/1.jpg")',
            }}
            data-jarallax='{"speed": 0.5}'
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
