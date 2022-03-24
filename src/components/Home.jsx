import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-text">
          <h1>
            welcome to <br />
            <span className="spanhome">Multimedia</span>
          </h1>
          <p>A place where you find entertainment and knowlage together! </p>
          <Link className="button-29 text-light" role="button" to="/signin">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
