import { useState } from "react";
import React from "react";
import Card from "./Card";

const Input = () => {
  const stable = {
    title: "",
    details: "",
    stat: "pendingCard",
  };
  const [data, setData] = useState(stable);
  const { title, details } = data;
  const [stroeArray, setStoreArray] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );
  if (!stroeArray) {
    setStoreArray([]);
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveHandler = () => {
    if (title && details) {
      setStoreArray([...stroeArray, data]);
      setData(stable);
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

  // console.log(storeArray);

  const handleComplete = (key) => {
    let deepcopy = stroeArray[key];
    if (deepcopy.stat === "pendingCard") {
      deepcopy.stat = "completeCard";
    } else {
      deepcopy.stat = "pendingCard";
    }
    let freshArray = stroeArray.map((obj, index) => {
      if (index === key) {
        return deepcopy;
      }
      return obj;
    });
    setStoreArray(freshArray);
  };

  // console.log(stroeArray);
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
                <button
                  className="complete"
                  onClick={() => handleComplete(index)}
                >
                  {item.stat[0].toUpperCase()}
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  X
                </button>
                <Card
                  title={item.title}
                  detail={item.details}
                  styles={item.stat}
                ></Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Input;
