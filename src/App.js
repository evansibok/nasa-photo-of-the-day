import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import "./App.css";

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=HM862xmQgdGXWV6E6X37GTMWbZ4aCL9dqp8Lz5jD";

function Gallery() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header />
      <Main />
      <Section />
    </div>
  );
}

export default Gallery;
