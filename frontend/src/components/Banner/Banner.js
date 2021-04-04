import React from "react";
import Title from "../Title/Title";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="container-fluid" id="banner-home">
      <Title subtitle={props.subtitle} title={props.title} bottomDivider />
    </div>
  );
};

export default Banner;
