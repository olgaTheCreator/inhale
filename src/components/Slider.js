import React, { useState, useRef } from "react";
import "./sliderStyle.css";

export const Slider = () => {
  const clientYref = useRef(0);
  const [thumbPos, setThumbPos] = useState(`calc(var(--vh, 1vh) * 31.7)`);

  const handleMouseMove = (e) => {
    e.preventDefault();
    (e.clientY - window.innerHeight/100* 35.8) < window.innerHeight/100* 3.308? 
    clientYref.current = window.innerHeight/100* 3.30 
    : (e.clientY - window.innerHeight/100* 35.8) > window.innerHeight/100* 31.85? 
    clientYref.current = window.innerHeight/100* 31.85 
    : clientYref.current = (e.clientY - window.innerHeight/100* 35.8);
    setThumbPos(clientYref.current);
    console.log(e,e.clientY,window.innerHeight, e.target.clientHeight, thumbPos, clientYref.current);
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    (touch.clientY - window.innerHeight/100* 35.8) < window.innerHeight/100* 3.308? 
    clientYref.current = window.innerHeight/100* 3.30 
    : (touch.clientY - window.innerHeight/100* 35.8) > window.innerHeight/100* 31.85? 
    clientYref.current = window.innerHeight/100* 31.85 
    : clientYref.current = (touch.clientY - window.innerHeight/100* 35.8);
    setThumbPos(clientYref.current);
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
        style={{
          top: `${thumbPos}px`
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
