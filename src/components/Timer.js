import React from "react";
import "./timer.css";

const changeOfStep = (modulo, array) => {
  for (let i = 0; i <= 3; i++) {
    const { duration, step } = array[i];
    if (modulo < duration) {
      return { duration: duration - modulo, currentStep: step };
    } else modulo = modulo - duration;
  }
};

export const Timer = ({
  chosenTechnique,
  seconds,
  setSeconds,
  setIntervalId,
  intervalId,
  durationOfSession,
  pause,
  setPause,
  handlePause,
}) => {
  console.log({ durationOfSession }, { seconds }, { pause });
  const { inhaleExhale } = chosenTechnique;

  const modFromSec =
    seconds % inhaleExhale.reduce((acc, b) => acc + b.duration, 0);

  const handleStart = () => {
    const initialUnixTime = Date.now();

    if (intervalId && !pause) {
      handlePause();
    } else {
      const newIntervalId = setInterval(() => {
        setSeconds(
          () => seconds + Math.floor((Date.now() - initialUnixTime) / 1000)
        );
      }, 1000);

      setIntervalId(newIntervalId);
      setPause(false);
    }
    console.log(initialUnixTime);
  };

  console.log(modFromSec, intervalId, seconds);
  return (
    <div className="container">
      <div className="area1"></div>
      <div className="area2">
        <div className="circle" onClick={handleStart}>
          <br />
          <br />
          {intervalId ? (
            <div id="stop-button">
              PAUSE
              <br />
              {changeOfStep(modFromSec, inhaleExhale).duration}
              <br />
              {intervalId ? (
                <div className="step-text">
                  {changeOfStep(modFromSec, inhaleExhale).currentStep}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div id="play-button"></div>
          )}
          <br />
          <br />
        </div>
      </div>
      <div className="area3"></div>
    </div>
  );
};
