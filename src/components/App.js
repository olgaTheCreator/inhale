import React, { useState } from "react";
import { breathingTechniques } from "../data/breathingTechniques";
import { Timer } from "./Timer";
import { NavigationIcons } from "./NavigationIcons";
import "../style.css";

const App = () => {
  // console.log(calm.inhaleExhale);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  console.log(chosenTechnique);
  return (
    <div className="app-container">
      <div className="upper-line">
      </div>
      <div className="menu-icon"></div>
      <div className="free-space1">
      {seconds}s<br />{chosenTechnique.name}</div>
      <div className="timer-container">
        <Timer chosenTechnique={chosenTechnique} seconds={seconds} setSeconds={setSeconds} intervalId={intervalId} setIntervalId={setIntervalId} />
      </div>
      <div className="free-space2"></div>
      <div className="menu-container">
        <NavigationIcons
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId= {intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
        />
      </div>
      <div className="lower-line"></div>
    </div>
  );
};

export default App;
