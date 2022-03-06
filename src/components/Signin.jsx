import React from "react";

function Signin() {
  return (
    <>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <table>
                          <tr>
                            <td>
                              <label className="form-label">FIrst Name</label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"/>
                            </td>
                            <td>
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg float-right"/>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn btn-dark"
                          style={{ width: "100%", height: "3rem" }}
                        >
                          Sign up
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
