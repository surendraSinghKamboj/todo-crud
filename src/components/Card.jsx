import React from "react";

const Card = (props) => {
  return (
    <>
      {/* {console.log(props)} */}
      <div className="Card">
        <div className="title">{props.title}</div>
        <div className="detail">{props.detail}</div>
      </div>
    </>
  );
};

export default Card;
