import React, { useState } from "react";
import { breathingTechniques } from "../data/breathingTechniques";
import { Timer } from "./Timer";
import { NavigationIcons } from "./NavigationIcons";
import { AppWrapper } from "./AppWrapper";
import { MenuIcon } from "./MenuIcon";
import "../style.css";
import { BeginSessionText } from "./BeginSessionText";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  const [durationOfSession, setDuration] = useState(3);

  return (
    <AppWrapper>
      <div className="upper-line"></div>
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <div className="free-space1">
        <BeginSessionText durationOfSession={durationOfSession} />
      </div>
      <div className="timer-container">
        <Timer
          chosenTechnique={chosenTechnique}
          seconds={seconds}
          setSeconds={setSeconds}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          durationOfSession={durationOfSession}
        />
      </div>
      <div className="free-space2"></div>
      <div className="menu-container">
        <NavigationIcons
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={durationOfSession}
        />
      </div>
      <div className="lower-line"></div>
    </AppWrapper>
  );
};
export default App;
