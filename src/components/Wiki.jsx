import axios from "axios";
import React, { useState } from "react";

const Wiki = () => {
  const [value, setValue] = useState({});
  const postData = async (e) => {
    e.preventDefault();
    var input = e.target[0].value;
    try {
      const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          input
        )}`
      );
      setValue(response);
    } catch (e) {
      console.log(e);
    }
    console.log(value);
  };
  return (
    <>
        <form className="form-wrapper" onSubmit={postData}>
          <input type="text" id="search" placeholder="Search for..." required />
          <input type="submit" value="Search" id="submit" />
        </form>
      {!value.data ? (
        null
      ) : (
        <center>
          <div className="container-fluid">
            <h1>
              <strong>{value.data.displaytitle}</strong>
            </h1>
            <p>{value.data.description}</p>
            <img src={value.data.originalimage.source} width="320px" alt="" />
            <p className="mt-3">{value.data.extract}</p>
          </div>
        </center>
      )}
    </>
  );
};

export default Wiki;
