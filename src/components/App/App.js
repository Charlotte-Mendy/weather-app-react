import React from "react";

import Weather from "../Weather/Weather";
import Footer from "../Footer/Footer";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
