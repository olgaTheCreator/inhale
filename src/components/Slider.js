import React, { useRef } from "react";
import "./sliderStyle.css";
import {
  thumbTopPosMax,
  thumbTopPosMin,
  countVh,
} from "../utils/DurationAndPosition.js";

export const Slider = ({ isSliding, setSliding, setThumbPos, thumbPos }) => {
  const clientYref = useRef(0);

  const handleClick = (e) => {
    e.clientY - countVh * 35.8 < countVh * 3.308
      ? (clientYref.current = countVh * thumbTopPosMin)
      : e.clientY - countVh * 35.8 > countVh * thumbTopPosMax
      ? (clientYref.current = countVh * thumbTopPosMax)
      : (clientYref.current = e.clientY - countVh * 35.8);
    setThumbPos(clientYref.current);
  };
  const handleMouseDown = () => {
    setSliding(true);
  };

  const handleMouseUp = () => {
    if (isSliding) {
      setSliding(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isSliding) {
      e.preventDefault();
      handleClick(e);
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    handleClick(touch);
  };
  return (
    <div
      className="slider-wrapper"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
    >
      <div className="slider-track" onClick={handleClick}></div>
      <div
        className="slider-thumb"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          top: `${thumbPos}px`,
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
