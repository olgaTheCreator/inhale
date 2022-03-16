import React, 
{useState} from "react";
import "./timeModalStyle.css";
import { Slider } from "./Slider";

export const TimeModal = ({
  setTimeOpen,
  durationOfSession,
  setDuration,
  handleStop,
}) => {
  const [isSliding, setSliding] = useState(false)
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="time-modal"
        onMouseUp={() => setSliding(false)}>
          <div className="slider-parent">
            <div
              className="buble-number"
              style={{
                bottom: `calc((var(--vh, 1vh) * 1.045) + var(--vh, 1vh) * 1.045 * ${durationOfSession})`,
              }}
            >
              {durationOfSession}
            </div>
            <Slider setDuration={setDuration} isSliding={isSliding} setSliding={setSliding} />

            <div
              className="buble-min"
              style={{
                bottom: `calc((var(--vh, 1vh) * 1.045) + var(--vh, 1vh) * 1.045 * ${durationOfSession})`,
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