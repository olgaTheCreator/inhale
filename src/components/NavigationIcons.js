import React, { useState } from "react";
import "./navigationStyle.css";
import { ChoosinTechniqueModal } from "./ChoosingTechniquesModal";
import { TimeModal } from "./TimeModal";

export const NavigationIcons = ({ chosenTechnique, setTechnique, intervalId, setIntervalId, setSeconds, setDuration }) => {
  const [techniquesAreOpen, setTechniquesOpen] = useState(false);
  const [timeIsOpen, setTimeOpen] = useState(false);
  console.log({ techniquesAreOpen });
  return (
    <div className="navContainer">
      <div className="button1">
        <button>V</button>
        <p>vibrations</p>
      </div>
      <div className="button2">
        <button>S</button>
        <p>sound</p>
      </div>
      <div className="button3"  onClick={() => {
          console.log({ timeIsOpen }, "wow");
          setTimeOpen(true);
        }}>
        <button>T</button>
        <p>time</p>
      </div>
      <div
        className="button4"
        onClick={() => {
          console.log({ techniquesAreOpen }, "wow");
          setTechniquesOpen(true);
        }}
      >
        <button>T</button>
        <p>techniques</p>
      </div>
      {techniquesAreOpen && (
        <ChoosinTechniqueModal
        setTechniquesOpen={setTechniquesOpen}
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId= {intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
        />
      )}
      {timeIsOpen && (
        <TimeModal
        setTimeOpen={setTimeOpen}
        setDuration={setDuration}
        />
      )}
    </div>
  );
};
