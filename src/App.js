import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import "./App.css";


const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=HM862xmQgdGXWV6E6X37GTMWbZ4aCL9dqp8Lz5jD";


function Gallery() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(nasaApi)
      .then(response => (setData(response.data)))
      .catch(error => error)
  }, [])

  return ( data && (
    <div className="App">
      <div id="bodyCon">
        <Header 
        title={data.title} 
        version={data.service_version} 
        />
        <Main 
        image={data.url} 
        />
        <Section 
        date={data.date} 
        explanation={data.explanation} 
        />
      </div>
    </div>
  )
  );
}

export default Gallery;
