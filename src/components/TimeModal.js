import React, { useEffect } from "react";
import "./timeModalStyle.css";

export const TimeModal = ({ setTimeOpen, durationOfSession, setDuration }) => {
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.bottom = `${Number(durationOfSession)}px`;
    }
  });
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="time-modal">
          <div className="slider-parent">
            <input
              type="range"
              min="1"
              max="30"
              value={durationOfSession}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <div className="buble">{durationOfSession}</div>
          <div className="set-duration-button">
            <button onClick={() => setTimeOpen(false)}>SET DURATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};
