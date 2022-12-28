import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";

import { addData, removeData, removeAllData, staus } from "../Features/counter";

const Input = () => {
  // Redux code starts from here
  const reduxData = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // useState React hook
  // ************************************************************************
  const stable = {
    title: "",
    details: "",
    stat: "pendingCard",
  };
  const [data, setData] = useState(stable);
  const { title, details } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // ***************************************************************************

  //--------------------------------------------------------------------------
  const saveHandler = () => {
    if (title && details) {
      dispatch(addData(data));
      setData(stable);
    }
  };
  //--------------------------------------------------------------------------
  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(reduxData)),
    [reduxData]
  );

  
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
        <button
          id="save"
          onClick={() => {
            saveHandler();
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            dispatch(removeAllData([]));
          }}
        >
          Delete All
        </button>
      </div>
      <div className="cardArea">
        {reduxData &&
          reduxData.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className="complete"
                  onClick={() => dispatch(staus(index))}
                >
                  {item.stat[0].toUpperCase()}
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    dispatch(removeData(index));
                  }}
                >
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
