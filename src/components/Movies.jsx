import React, { useState, useEffect } from "react";
import img1 from "../images/pushpa.webp";
import img2 from "../images/sheshaah.jpg";
import img3 from "../images/bangubai.jpg";
import axios from "axios";

const Movies = () => {

  const [movieData, setMovieData] = useState({});
  const getData = async (event) => {
    event.preventDefault();
    var value = event.target[0].value;
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?t=${value}&apikey=b31cf485`
      );

      const {
        Title,
        Year,
        Rated,
        Released,
        Director,
        imdbRating,
        imdbVotes,
        Runtime,
        Genre,
        Writer,
        Actors,
        Plot,
        Language,
        Poster,
        Response,
      } = data;
      setMovieData(data);
      console.log(movieData);

    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="moviecard">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={img1}
                className="d-block w-100 im"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={img2}
                className="d-block w-100 im"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100 im"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="searchbar">
        <form onSubmit={(e) => getData(e)}>
          <input
            className="form-control minput-txt"
            type="text"
            placeholder="Search movies"
          />
          <input className="btn btn-success minput-btn" type="submit" value="Search" />
        </form>
      </div>
      {(movieData.Title) ?
        <section className="movies">
          <div className="mcontain">
            <div className="mcontent">
              <center>
                <table className="mtable">
                  <tr>
                    <td className="mtd" id="mno-border" colspan="2">
                      <h1 id="mtitle">{movieData.Title} </h1>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="mtd">IMDb RATING</td>
                    <td className="mtd">VOTES</td>
                  </tr>

                  <tr>
                    <td className="mtd">⭐ {movieData.imdbRating}/10</td>
                    <td className="mtd">{movieData.imdbVotes}</td>
                  </tr>
                </table>
              </center>
              <p className="p">
                {" "}
                {movieData.Year} • {movieData.Rated} • {movieData.Runtime}{" "}
              </p>
              <img src={movieData.Poster} alt="poster" />
              <dl>
                <dt className="mdt">
                  <span className="mspan">Released</span>
                  <dd>{movieData.Released}</dd>
                </dt>
                <dt className="mdt">
                  <span className="mspan">Catagory</span>
                  <dd>{movieData.Genre}</dd>
                </dt>
                <dt className="mdt">
                  {" "}
                  <span className="mspan">About</span>
                  <dd>
                    <p id="mabout">{movieData.Plot}</p>
                  </dd>
                </dt>
                <dt className="mdt">
                  <span className="mspan">Writers</span>
                  <dd>{movieData.Writer}</dd>
                </dt>
                <dt className="mdt">
                  <span className="mspan">Actors</span>
                  <dd>{movieData.Actors}</dd>
                </dt>
                <dt className="mdt">
                  <span className="mspan">Language</span>
                  <dd>{movieData.Language}</dd>
                </dt>
              </dl>
            </div>
          </div>
        </section> : null}
    </>
  );
};

export default Movies;
