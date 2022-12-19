import React from "react";

const Card = (props) => {

  return (
    <>
      <div className={props.styles}>
        <div className="title">{props.title}</div>
        <div className="detail">{props.detail}</div>
      </div>
    </>
  );
};

export default Card;
