import React from 'react'
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
          <button className="button-29" role="button">
            Get Started
          </button>
          <div className="cardds">
            <span className="cardd">
              <i class="fa-brands fa-wikipedia-w"></i>
            </span>
            <span className="cardd">
              <i class="fa-solid fa-clapperboard"></i>
            </span>
            <span className="cardd">
              <i class="fa-solid fa-face-smile-beam"></i>
            </span>
            <span className="cardd">
              <i class="fa-solid fa-images"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home