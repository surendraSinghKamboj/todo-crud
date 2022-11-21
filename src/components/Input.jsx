import { useState } from "react";
import React from "react";

const Input = () => {
  const [data, setData] = useState({
    title: "",
    details: "",
  });

  //   const [data, setData] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clickHandler = (e) => {
    localStorage.setItem("xyzt", JSON.stringify(data));
    console.log("Data Saved");
  };

  return (
    <>
      <div className="inputTitle">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="detailsBox">
        <textarea
          name="details"
          id="details"
          cols="50"
          rows="22"
          placeholder="Add Details here........"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="buttonBox">
        <button id="save" onClick={clickHandler}>
          Save
        </button>
      </div>
    </>
  );
};

export default Input;
