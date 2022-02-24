import React from "react";
import "./choosingTechniquesModalStyle.css";
import { breathingTechniques } from "../data/breathingTechniques";

export const ChoosinTechniqueModal = ({ setIsOpen, setTechnique, intervalId, setIntervalId, setSeconds }) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        console.log({intervalId})
        setIsOpen(false);
      }}
    >
      <div className="centered">
        <div className="modal">
          {breathingTechniques.map((a, index) => (
            <div
              key={a.id}
              onClick={() => { 
                if (intervalId) {
                  clearInterval(intervalId);
                  setIntervalId(0);
                  setSeconds(0);
                }
                setTechnique(breathingTechniques[index]), setIsOpen(false)
              }}
            >
              {a.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
