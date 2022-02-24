import React from "react";
import "./modalsStyle.css";
import { breathingTechniques } from "../data/breathingTechniques";

export const ChoosinTechniqueModal = ({ setTechniquesOpen, setTechnique, intervalId, setIntervalId, setSeconds }) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        console.log({intervalId})
        setTechniquesOpen(false);
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
                setTechnique(breathingTechniques[index]), setTechniquesOpen(false)
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
