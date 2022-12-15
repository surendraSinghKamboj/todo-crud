import { useState } from "react";
import React from "react";
import Card from "./Card";

const Input = () => {
  const [data, setData] = useState({
    title: "",
    details: "",
  });
  const { title, details } = data;
  const [stroeArray, setStoreArray] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveHandler = () => {
    if (title && details) {
      setStoreArray([...stroeArray, data]);
      setData({
        title: "",
        details: "",
      });
    }
  };

  const handleDelete = (key) => {
    setStoreArray(
      stroeArray.filter((element, id) => {
        return key !== id;
      })
    );
  };

  const handleAllDelete = () => {
    setStoreArray([]);
  };

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(stroeArray));
  }, [stroeArray]);

  React.useEffect(() => {
    console.log();
  }, [stroeArray]);

  return (
    <>
      <div className="inputTitle">
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="detailsBox">
        <textarea
          name="details"
          id="details"
          value={details}
          cols="50"
          rows="22"
          placeholder="Add Details here........"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="buttonBox">
        <button id="save" onClick={saveHandler}>
          Save
        </button>
        <button onClick={handleAllDelete}>Delete All</button>
      </div>
      <div className="cardArea">
        {stroeArray &&
          stroeArray.map((item, index) => {
            return (
              <div key={index}>
                <button className="delete" onClick={() => handleDelete(index)}>
                  X
                </button>
                <Card title={item.title} detail={item.details}></Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Input;
