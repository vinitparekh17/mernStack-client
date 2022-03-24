import React from 'react';
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <section className="mt-5">
          <div
            className="container mt-3 h-100 glass"
            style={{
              background: "transparent",
              backdropFilter: "blur(10px) #fff",
            }}
          >
            <div
              className="row d-flex justify-content-center align-items-center h-100"
              style={{
                background: "transparent",
                backdropFilter: "blur(10px) #fff",
              }}
            >
              <div
                style={{
                  background: "transparent",
                  backdropFilter: "blur(10px) #fff",
                }}
                className="col-12 col-md-9 col-lg-7 col-xl-6"
              >
                <div
                  className="card"
                  style={{
                    border: "none",
                    background: "transparent",
                  }}
                >
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center mb-3">
                      <strong className="formtitle">LOGIN NOW</strong>
                    </h2>

                    <form method="POST">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          <i className="fa-solid fa-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          name="email"
                          className="form-control form-control-lg"
                          value=""
                          onChange=""
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          <i className="fa-solid fa-lock"></i> Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="password"
                          className="form-control form-control-lg"
                          value=""
                          onChange=""
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-dark"
                          type="submit"
                          style={{
                            width: "100%",
                            height: "3rem",
                          }}
                        >
                          <b>LOGIN</b>
                        </button>
                      </div>

                      <p className="text-center mt-3 mb-0">
                        Don't have an account? &nbsp;
                        <Link
                          to="/signup"
                          style={{ textDecoration: "none", fontWeight: "500" }}
                        >
                          <u>Register now</u>
                        </Link>
                      </p>
                    </form>
                    </div>
                </div>
              </div>
            </div>
            </div>
      </section>
    </>
  );
}

export default Signin