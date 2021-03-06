import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name;
  let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, cpassword } = userData;
    console.log(JSON.stringify({ firstName }));
    const response = await axios.post("/register", {
      firstName,
      lastName,
      email,
      password,
      cpassword,
    });

    // const data = response.json();

    // if (data.status === 404 || !data) {
    //   console.log("Invalid registration");
    // } else {
    //   console.log("Registration successfull");
    // }
  };

  return (
    <>
      <section className="mt-5">
        <div
          className="mask d-flex align-items-center h-100 gradient-custom-3"
          style={{
            background: "transparent",
            backdropFilter: "blur(10px) #fff",
          }}
        >
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
                      <strong className="formtitle">USER REGISTRATION</strong>
                    </h2>

                    <form method="POST" onSubmit={postData}>
                      <div className="form-outline mb-4">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <label className="form-label">
                                  <i className="fa-solid fa-user"></i> First
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  className="form-control form-control-lg me-4"
                                  value={userData.firstName}
                                  onChange={handleChange}
                                  autoComplete="off"
                                  required
                                />
                              </td>
                              <td>
                                <label className="form-label ms-4">
                                  <i className="fa-solid fa-user"></i> Last Name
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  className="form-control form-control-lg ms-4"
                                  value={userData.lastName}
                                  onChange={handleChange}
                                  autoComplete="off"
                                  required
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          <i className="fa-solid fa-envelope"></i> Email Address
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
                          <i className="fa-solid fa-lock"></i> Password
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
                          <i className="fa-solid fa-lock"></i> Confirm password
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
                          className="btn btn-dark"
                          type="submit"
                          style={{
                            width: "100%",
                            height: "3rem",
                          }}
                        >
                          <b>SIGN UP</b>
                        </button>
                      </div>

                      <p className="text-center mt-3 mb-0">
                        Have already an account? &nbsp;
                        <Link
                          to="/signin"
                          style={{ textDecoration: "none", fontWeight: "500" }}
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
