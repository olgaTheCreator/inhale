import React, { useState } from "react";
import "./timeModalStyle.css";
import { Slider } from "./Slider";
import { DurationAndPosition } from "../utils/DurationAndPosition.js";

export const TimeModal = ({
  setTimeOpen,
  durationOfSession,
  setDuration,
  handleStop,
}) => {
  const { durationToPosition } = DurationAndPosition;

  const [isSliding, setSliding] = useState(false);
  const [thumbPos, setThumbPos] = useState(
    durationToPosition(durationOfSession)
  );
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="time-modal" onMouseUp={() => setSliding(false)}>
          <div className="slider-parent">
            <div
              className="buble-number"
              style={{
                top: `${thumbPos}px`,
              }}
            >
              {durationOfSession}
            </div>
            <Slider
              durationOfSession={durationOfSession}
              setDuration={setDuration}
              isSliding={isSliding}
              setSliding={setSliding}
              thumbPos={thumbPos}
              setThumbPos={setThumbPos}
            />

            <div
              className="buble-min"
              style={{
                top: `${thumbPos}px`,
              }}
            >
              min
            </div>
          </div>
          <div className="set-duration-button">
            <button
              onClick={() => {
                setTimeOpen(false);
                handleStop();
              }}
            >
              SET DURATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
