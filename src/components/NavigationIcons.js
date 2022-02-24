import React, { useState } from "react";
import "./navigationStyle.css";
import { ChoosinTechniqueModal } from "./ChoosingTechniquesModal";

export const NavigationIcons = ({ chosenTechnique, setTechnique, intervalId, setIntervalId, setSeconds }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log({ isOpen });
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
      <div className="button3">
        <button>T</button>
        <p>time</p>
      </div>
      <div
        className="button4"
        onClick={() => {
          console.log({ isOpen }, "wow");
          setIsOpen(true);
        }}
      >
        <button>T</button>
        <p>techniques</p>
      </div>
      {isOpen && (
        <ChoosinTechniqueModal
          setIsOpen={setIsOpen}
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId= {intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
        />
      )}
    </div>
  );
};
