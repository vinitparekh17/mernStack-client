import React, { useState } from "react";
import axios from "axios";

function Neko() {
  const [value, setValue] = useState({});

  let name, val
  const handleChange = (e) => {
    name = e.target.name;
    val = e.target.value
    setValue({ ...value, ["option"]: val });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { option } = value
      const postData = await axios.post("/anime", { option })
      console.log(postData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form>
        <select
          name="quary"
          class="form-control mt-5"
          onChange={(e) => handleChange(e)}
        >
          <option defaultValue="0">Choose your category</option>
          <option value="1">neko</option>
          <option value="2">hug</option>
          <option value="3">pat</option>
          <option value="4">waifu</option>
          <option value="5">cry</option>
          <option value="6">kiss</option>
          <option value="7">slap</option>
          <option value="8">smug</option>
          <option value="9">punch</option>
        </select>
        <button className="btn btn-success" onClick={postData}>Search</button>
      </form>
    </>
  );
}

export default Neko;
