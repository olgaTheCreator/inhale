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
              onChange={({ target: { value: radius } }) =>
                setDuration(Number(radius))
              }
            />
          </div>
          <div className="buble">{durationOfSession}</div>
          <div>
            <button onClick={() => setTimeOpen(false)}>SET DURATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};
