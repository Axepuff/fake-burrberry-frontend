import React, { Component } from "react";
import Header from "./Header/index.js";
import Footer from "./Footer";
import Product from "./Product/index.js";
import { Helmet } from "react-helmet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        </Helmet>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
