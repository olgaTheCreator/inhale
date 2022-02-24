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

export const Timer = ({ chosenTechnique, seconds, setSeconds, setIntervalId, intervalId, duration }) => {
  console.log({duration});
  const { inhaleExhale } = chosenTechnique;


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
    <div className="container">
      <div className="area1">
      </div>
      <div className="area2">
        <div className="circle" onClick={handleStartStopClick}>
          <br />
          <br />
          {intervalId ? (
            <div id="stop-button">
              STOP
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
      <div className="area3">
      </div>
    </div>
  );
};
