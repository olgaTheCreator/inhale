import { useState, useEffect } from "react";

export const CorrectingViewport = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    vh: Math.round(window.innerHeight * 0.01),
  });
  document.documentElement.style.setProperty("--vh", `${dimensions.vh}px`);
  console.log(document.documentElement.style.getPropertyValue("--vh"));
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        vh: Math.round(window.innerHeight * 0.01),
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [window.innerHeight]);
  console.log({ dimensions });
  return null;
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
