// src/App.js
import React from "react";
import "./App.css";
import ProgressiveImage from "./ProgressiveImage";
import image from "../src/asset/image.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Progressive Color to Black and White Effect</h1>
        <ProgressiveImage src={image}/>
      </header>
    </div>
  );
}

export default App;
