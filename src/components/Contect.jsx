import React from "react";

function Contect() {
  return (
    <>
      <div id="contect">
      <center>
      <h2 className="text-uppercase text-center">
        <strong>CONTECT US</strong>
      </h2>
      <form>
        <table>
          <tr>
            <td>
              <label className="form-label mt-2">
                <i class="fa-solid fa-user"></i> First Name
              </label>
              <input
                type="text"
                id="form3Example1cg"
                className="form-control"
              />
            </td>

            <td>
              <label className="form-label mt-2">
                <i class="fa-solid fa-user"></i> Last Name
              </label>
              <input
                type="text"
                id="form3Example1cg"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <label className="form-label mt-2" htmlFor="form3Example3cg">
                <i class="fa-solid fa-envelope"></i> Email Address
              </label>
              <input
                type="email"
                id="form3Example3cg"
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <label htmlFor="message" className="form-label mt-2">
                <i className="fa-solid fa-message"></i> Message
              </label>
              <textarea className="form-control mb-2" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="button"
                className="btn btn btn-dark"
                style={{ width: "100%", height: "3rem" }}
              >
                <b>SUBMIT</b>
              </button>
            </td>
          </tr>
        </table>
        </form>
        </center>
        </div>
    </>
  );
}

export default Contect;
