import React, { useState } from "react";
import "./navigationStyle.css";
import { ChoosinTechniqueModal } from "./ChoosingTechniquesModal";
import { TimeModal } from "./TimeModal";

export const NavigationIcons = ({
  chosenTechnique,
  setTechnique,
  intervalId,
  setIntervalId,
  setSeconds,
  durationOfSession,
  setDuration,
  handlePause,
  handleStop,
  vibrations,
  setVibrations,
}) => {
  const [techniquesAreOpen, setTechniquesOpen] = useState(false);
  const [timeIsOpen, setTimeOpen] = useState(false);
  return (
    <div className="navContainer">
      <div
        className="button1"
        onClick={() => {
          if (vibrations) setVibrations(false);
          else setVibrations(true);
        }}
      >
        <button
          className={vibrations ? "button1-vib" : "button1-novib"}
        ></button>
        <p>vibrations</p>
      </div>
      <div className="button2">
        <button></button>
        <p>sound</p>
      </div>
      <div
        className={`button3 ${timeIsOpen ? "visible-button" : ""}`}
        onClick={() => {
          handlePause();
          timeIsOpen ? setTimeOpen(false) : setTimeOpen(true);
        }}
      >
        <button></button>
        <p>time</p>
      </div>
      <div
        className={`button4 ${techniquesAreOpen ? "visible-button" : ""}`}
        onClick={() => {
          techniquesAreOpen
            ? setTechniquesOpen(false)
            : setTechniquesOpen(true);
          handlePause();
        }}
      >
        <button></button>
        <p>techniques</p>
      </div>
      {techniquesAreOpen && (
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          handleStop={handleStop}
        />
      )}
      {timeIsOpen && (
        <TimeModal
          setTimeOpen={setTimeOpen}
          durationOfSession={durationOfSession}
          setDuration={setDuration}
          handleStop={handleStop}
        />
      )}
    </div>
  );
};
