import React from "react";
import "./timeModalStyle.css";

export const TimeModal = ({ setTimeOpen, durationOfSession, setDuration }) => {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="time-modal">
          <div className="slider-parent">
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={durationOfSession}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <div
            className="buble-number"
            style={{
              bottom: `calc((var(--vh, 1vh) * 1.045) + var(--vh, 1vh) * 1.045 * ${durationOfSession})`,
            }}
          >
            {durationOfSession}
          </div>
          <div
            className="buble-min"
            style={{
              bottom: `calc((var(--vh, 1vh) * 1.045) + var(--vh, 1vh) * 1.045 * ${durationOfSession})`,
            }}
          >
            min
          </div>
          <div className="set-duration-button">
            <button onClick={() => setTimeOpen(false)}>SET DURATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};
