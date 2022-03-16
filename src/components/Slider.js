import React, { useRef } from "react";
import "./sliderStyle.css";
import { DurationAndPosition } from "../utils/DurationAndPosition.js";

export const Slider = ({
  isSliding,
  setSliding,
  setDuration,
  setThumbPos,
  thumbPos,
}) => {
  const { positionToDuration, thumbTopPosMax, thumbTopPosMin, countVh } =
    DurationAndPosition;

  const clientYref = useRef(0);

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
      e.clientY - countVh * 35.8 < countVh * 3.308
        ? (clientYref.current = countVh * thumbTopPosMin)
        : e.clientY - countVh * 35.8 > countVh * thumbTopPosMax
        ? (clientYref.current = countVh * thumbTopPosMax)
        : (clientYref.current = e.clientY - countVh * 35.8);
      setThumbPos(clientYref.current);
      setDuration(positionToDuration(clientYref.current));
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    touch.clientY - countVh * 35.8 < countVh * 3.308
      ? (clientYref.current = countVh * thumbTopPosMin)
      : touch.clientY - countVh * 35.8 > countVh * thumbTopPosMax
      ? (clientYref.current = countVh * thumbTopPosMax)
      : (clientYref.current = touch.clientY - countVh * 35.8);
    setThumbPos(clientYref.current);
    setDuration(positionToDuration(clientYref.current));
  };
  return (
    <div
      className="slider-wrapper"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="slider-track"
        onClick={(e) => console.log(e.clientX, e.clientY)}
      ></div>
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
