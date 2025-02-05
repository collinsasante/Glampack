import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import "../assets/css/bootstrap.min.css";
import "../assets/css/materialdesignicons.min.css";
import "../assets/css/style.min.css";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          getUserData;
          navigate("/home");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          getUserData;
          navigate("/home");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

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
                      <div
                        className="card login-page border-0"
                        style={{ zIndex: 1 }}
                      >
                        <div className="card-body p-0">
                          <h5 className="card-title">Login</h5>
                          <form
                            className="login-form mt-4"
                            onSubmit={onSubmitHandler}
                          >
                            <div className="row">
                              <div className="col-lg-12">
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    required
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="d-flex justify-content-between">
                                  <div className="mb-3">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                      >
                                        Remember me
                                      </label>
                                    </div>
                                  </div>
                                  <p className="forgot-pass mb-0">
                                    <Link
                                      to="/recover-account"
                                      className="text-dark fw-semibold"
                                    >
                                      Forgot password?
                                    </Link>
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-12 mb-0">
                                <div className="d-grid">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    {state === "Sign Up"
                                      ? "Sign Up"
                                      : "Sign In"}
                                  </button>
                                </div>
                              </div>

                              <div className="col-12">
                                <p className="mb-0 mt-3">
                                  <span className="text-dark me-2">
                                    {state === "Sign Up"
                                      ? "Already have an account?"
                                      : "Don't have an account?"}
                                  </span>
                                  <Link
                                    to="/signup" // Use Link instead of <a>
                                    className="text-dark fw-semibold"
                                  >
                                    Sign Up
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="mb-md-5 text-center">
                      © {new Date().getFullYear()} Developed by Webcasa
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

export default LoginPage;
