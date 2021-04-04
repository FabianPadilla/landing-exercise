import React, { Component } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Banner from "../components/Banner/Banner";
import Articles from "../components/Articles/Articles";
import About from "../components/About/About";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner subtitle="HOLISTIC HEALTH" title="Lombok" />
        <Articles />
        <About />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}
