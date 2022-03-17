import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setdata] = useState({});
  const postInput = async (e, callback) => {
    e.preventDefault();
    var input = e.target[0].value;
    try {
      await axios.post("/weather", { input: input });
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const res = await axios.get("/getweather");
      setdata(res);
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form
        class="d-flex"
        onSubmit={(e) => postInput(e, getData())}
        method="post"
        className="form-wrapper"
      >
        <input type="text" id="search" placeholder="Search" required />
        <input type="submit" value="Search" id="submit" />
      </form>
      {data.data == undefined ? null : (
        <div className="container-fluid">
          <div className="weathertext">
            <h2>
              <strong>{data.data.city}</strong>
            </h2>
            <h1>Temperature: {Math.round(data.data.main.temp - 273.15)}</h1>
            <img
              src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`}
              alt="..."
              style={{
                width: "7rem",
                border: "1px solid",
                borderRadius: "50%",
                boxShadow: "0 0 10px #000, 0 5px 20px #fff inset",
                margin: "5% 10%",
                float: "right",
                background: "#ffffff55",
                position: "absolute",
                top: "4%",
                right: "0%",
              }}
              align="right"
            />
            <p>{data.data.weather[0].description}</p>
            <p>Feels like: {Math.round(data.data.main.feels_like - 273.15)}</p>
            <p>Pressure: {data.data.main.pressure}</p>
            <p>Humidity: {data.data.main.humidity}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
