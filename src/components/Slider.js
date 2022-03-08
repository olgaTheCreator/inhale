import React from "react";
import "./sliderStyle.css";

export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        onClick={(e) => console.log(e.clientX, e.clientY)}
        onMouseMove={(e) => {
          let posX = 0;
          posX = e.clientX;
          console.log({ posX });
        }}
      ></div>
      <div
        className="slider-thumb"
        onMouseDown={(e) => console.log(e.clientX, e.clientY)}
        style={{ top: `{posX}` }}
      ></div>
    </div>
  );
};
