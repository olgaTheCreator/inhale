import React, { useState } from "react";
import { breathingTechniques } from "../data/breathingTechniques";
import { Timer } from "./Timer";
import { NavigationIcons } from "./NavigationIcons";
import "../style.css";
//import { ChoosinTechniqueModal } from "./TechniquesModal";

const App = () => {
  // console.log(calm.inhaleExhale);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  console.log(chosenTechnique);
  return (
    <div className="app-container">
      <div className="upper-line">
        <div className=".upper-line-draw"></div>
      </div>
      <div className="menu-icon"></div>
      <div className="free-space1">{chosenTechnique.name}</div>
      <div className="timer-container">
        <Timer chosenTechnique={chosenTechnique} />
      </div>
      <div className="free-space2"></div>
      <div className="menu-container">
        <NavigationIcons
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
        />
      </div>
      <div className="lower-line"></div>
    </div>
  );
};

export default App;
