import React from "react";
import "./choosingTechniquesModalStyle.css";
import { breathingTechniques } from "../data/breathingTechniques";

export const ChoosinTechniqueModal = ({ setIsOpen, setTechnique }) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="centered">
        <div className="modal">
          {breathingTechniques.map((a, index) => (
            <div
              key={a.id}
              onClick={() => (
                setTechnique(breathingTechniques[index]), setIsOpen(false)
              )}
            >
              {a.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
