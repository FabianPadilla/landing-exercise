import React from "react";
import Title from "../Title/Title";

const Newsletter = () => {
  return (
    <section
      className="background-dark-gray section-space text-center"
      id="subscribe-section"
    >
      <Title subtitle="SUSCRIBETE" />
      <p>Suscribete a nuestro newsletter</p>
      <input
        type="email"
        placeholder="tu-email"
        className="d-block mx-auto my-4"
      />
      <button className="btn btn-outline-primary">ENVIAR</button>
    </section>
  );
};

export default Newsletter;
