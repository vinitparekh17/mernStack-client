import React from "react";

function Contect() {
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
                      <strong>CONTECT US</strong>
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <table>
                          <tr>
                            <td>
                              <label className="form-label md-3">
                                <i class="fa-solid fa-user"></i> First Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg me-3"
                              />
                            </td>

                            <td>
                              <label className="form-label ms-4">
                                <i class="fa-solid fa-user"></i> Last Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg ms-4"
                              />
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example3cg">
                          <i class="fa-solid fa-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mt-4 mb-4">
                        <label htmlFor="message" className="form-label">
                          <i className="fa-solid fa-message"></i> Message
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          type="text"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn btn-dark"
                          style={{ width: "100%", height: "3rem" }}
                        >
                          <b>SUBMIT</b>
                        </button>
                      </div>
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

export default Contect;
