import React from "react";
import Title from "../Title/Title";

const Card = (props) => {
  return (
    <div className="col-sm card-container shadow-lg">
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.text} />
        <div className="card-body">
          <Title subtitle={props.text} topDivider />
        </div>
      </div>
    </div>
  );
};

export default Card;
