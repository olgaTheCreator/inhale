import React, { useState } from "react";
import "../../src/style.css";

//import Button from "@mui/material/Button";

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
  const [intervalId, setIntervalId] = useState(0);

  const modFromSec =
    seconds % inhaleExhale.reduce((acc, b) => acc + b.duration, 0);

  const handleStartStopClick = () => {
    const initialUnixTime = Date.now();

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      setSeconds(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setSeconds(() => Math.floor((Date.now() - initialUnixTime) / 1000));
    }, 1000);
    setIntervalId(newIntervalId);
  };

  return (
    <div>
      <button
        id="circle"
        //variant="contained"
        onClick={handleStartStopClick}
      >
        {intervalId ? "Stop" : "Start"}
      </button>
      <br></br>
      <br></br>
      {seconds}s
      <br />
      <br />
      {changeOfStep(modFromSec, inhaleExhale)}
    </div>
  );
};
