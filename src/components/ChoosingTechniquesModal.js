import React from "react";
import "./modalsStyle.css";
import "./choosingTechniqueModalStyle.css";
import { breathingTechniques } from "../data/breathingTechniques";

export const ChoosinTechniqueModal = ({
  setTechniquesOpen,
  setTechnique,
  intervalId,
  setIntervalId,
  setSeconds,
}) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        console.log({ intervalId });
        setTechniquesOpen(false);
      }}
    >
      <div className="modal-name">techniques</div>
      <div className="centered">
        <div className="modal">
          <ul>
            {breathingTechniques.map((a, index) => (
              <li
                key={a.id}
                onClick={() => {
                  if (intervalId) {
                    clearInterval(intervalId);
                    setIntervalId(0);
                    setSeconds(0);
                  }
                  setTechnique(breathingTechniques[index]),
                    setTechniquesOpen(false);
                }}
              >
                <p className="technique-name">{a.name}</p>
                <p className="short-descriptiion">{a.shortDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
