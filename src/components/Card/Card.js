import React from "react";
import Title from "../Title/Title";

const Card = (props) => {
  return (
    <div className="col-sm card-container shadow-lg">
      <div class="card">
        <img src={props.img} className="card-img-top" />
        <div class="card-body">
          <Title subtitle={props.text} topDivider />
        </div>
      </div>
    </div>
  );
};

export default Card;
