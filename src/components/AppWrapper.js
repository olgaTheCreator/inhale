import React, { useState, useEffect } from "react";
import "../style.css";

export const AppWrapper = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    vh: window.innerHeight * 0.01,
  });
  document.documentElement.style.setProperty("--vh", `${dimensions.vh}px`);
  console.log(document.documentElement.style.getPropertyValue("--vh"));
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        vh: window.innerHeight * 0.01,
      });
    }, 250);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  console.log({ dimensions });
  return <div className="app-container"> {children} </div>;
};

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
