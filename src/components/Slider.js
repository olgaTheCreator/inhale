import React, { useState, useRef } from "react";
import "./sliderStyle.css";

export const Slider = () => {
  const clientYref = useRef(0);
  const [thumbPos, setThumbPos] = useState(`calc(var(--vh, 1vh) * 31.7)`);

  const handleMouseMove = (e) => {
    e.preventDefault();
    clientYref.current = e.clientY/window.innerHeight;
    setThumbPos(clientYref.current);
    console.log(e, e.target.clientHeight, thumbPos, clientYref.current);
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    setThumbPos(touch.clientY);
    console.log(e);
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
       // onMouseMove={handleMouseMove}
        style={{
          bottom: `calc(var(--vh, 1vh) * ${thumbPos})`,
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
