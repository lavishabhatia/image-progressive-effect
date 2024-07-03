// src/ProgressiveImage.js
import React, { useState } from "react";
import "../src/css/progressiveImage.css";

const ProgressiveImage = ({ src }) => {
  const [progress, setProgress] = useState(50);

  const handleRangeChange = (event) => {
    setProgress(event.target.value);
  };

  return (
    <div className="progressive-image-container">
      <img src={src} className="progressive-image color" alt="Colorful" />
      <img
        src={src}
        className="progressive-image bw"
        style={{
          clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
        }}
        alt="Black and White"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleRangeChange}
        className="slider"
      />
    </div>
  );
};

export default ProgressiveImage;
