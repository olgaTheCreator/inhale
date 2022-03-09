import React, { useState, useRef } from "react";
import "./sliderStyle.css";

export const Slider = () => {
  const clientYref = useRef(0);
  const [thumbPos, setThumbPos] = useState(80);

  const handleMouseMove = (e) => {
    e.preventDefault();
    clientYref.current = e.clientY;
    setThumbPos(clientYref.current);
    console.log(e.clientY, thumbPos, clientYref.current);
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    setThumbPos(touch.clientY);
    console.log(touch.clientY);
  };
  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        onClick={(e) => console.log(e.clientX, e.clientY)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      ></div>
      <div
        className="slider-thumb"
        onMouseMove={handleMouseMove}
        style={{
          top: `calc(${thumbPos}px)`,
        }}
      ></div>
    </div>
  );
};

/*function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
*/
