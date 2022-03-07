import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name; let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }
  return (
    <>
      <section>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container mt-3 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ border: "none" }}>
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center mb-3">
                      <strong>USER REGISTRATION</strong>
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <table>
                          <tr>
                            <td>
                              <label className="form-label">
                                <i class="fa-solid fa-user"></i> First Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                name="fname"
                                className="form-control form-control-lg me-4"
                                value={userData.fname}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                              />
                            </td>
                            <td>
                              <label className="form-label ms-4">
                                <i class="fa-solid fa-user"></i> Last Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                name="lname"
                                className="form-control form-control-lg ms-4"
                                value={userData.lname}
                                onChange={handleChange}
                                autoComplete="off"
                                required
                              />
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          <i class="fa-solid fa-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          name="email"
                          className="form-control form-control-lg"
                          value={userData.email}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          <i class="fa-solid fa-lock"></i> Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          name="password"
                          className="form-control form-control-lg"
                          value={userData.password}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          <i class="fa-solid fa-lock"></i> Confirm password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          name="cpassword"
                          className="form-control form-control-lg"
                          value={userData.cpassword}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn btn-dark"
                          style={{ width: "100%", height: "3rem" }}
                        >
                          <b>SIGN UP</b>
                        </button>
                      </div>

                      <p className="text-center text-muted mt-3 mb-0">
                        Have already an account? &nbsp;
                        <Link
                          to="/signin"
                          className="fw-bold text-body"
                          style={{ textDecoration: "none" }}
                        >
                          <u>Login here</u>
                        </Link>
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

export default Signup;
