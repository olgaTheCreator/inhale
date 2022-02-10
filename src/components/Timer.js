import React, { useState, useEffect } from "react";

const changeOfStep = (modulo, array) => {
  for (let i = 0; i <= 3; i++) {
    const { duration, step } = array[i];
    if (modulo < duration) {
      return (
        <>
          <div>{duration - modulo}</div>
          <div>{step}</div>
        </>
      );
    } else modulo = modulo - duration;
  }
};

export const Timer = ({ breathingTechnique }) => {
  const { inhaleExhale } = breathingTechnique;
  const [seconds, setSeconds] = useState(0);
  const modFromSec =
    seconds % inhaleExhale.reduce((acc, b) => acc + b.duration, 0);
  console.log(modFromSec);
  useEffect(() => {
    const initialUnixTime = Date.now();
    const interval = setInterval(() => {
      setSeconds((seconds) =>
        Math.floor((Date.now() - initialUnixTime) / 1000)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {seconds}
      <br />
      <br />
      {changeOfStep(modFromSec, inhaleExhale)}
    </div>
  );
};
