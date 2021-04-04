import React from "react";
import Title from "../Title/Title";
import "./About.css";

import about from "../../assets/about.png";

const About = () => {
  return (
    <section className="container-fluid" id="about-section">
      <div className="row align-items-center">
        <div className="col-sm unfilled">
          <img src={about} />
        </div>
        <div className="col-sm my-5">
          <Title subtitle="NOSOTROS" bottomDivider />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates quisquam excepturi repellat quo dicta eligendi eos beatae
            porro sit, possimus, nemo quas nisi expedita accusantium ipsam quis!
            Neque, voluptates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
