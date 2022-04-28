import React, { useState } from "react";
import { breathingTechniques } from "../data/breathingTechniques";
import { Timer } from "./Timer";
import { NavigationIcons } from "./NavigationIcons";
import { AppWrapper } from "./AppWrapper";
import { MenuIcon } from "./MenuIcon";
import "../style.css";
import { BeginSessionText } from "./BeginSessionText";
import { EndOfSessionText } from "./EndOfSessionText";
import { ShowingTechniqueNameOnScreen } from "./ShowingTechniqueNameOnScreen";
import "@fontsource/metropolis";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  const [durationOfSession, setDuration] = useState(3);
  const [pause, setPause] = useState(false);
  const [vibrations, setVibrations] = useState(true);
  const [sounds, setSounds] = useState(true);

  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setPause(true);
    return;
  };
  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setSeconds(0);
    setPause(false);
    return;
  };

  if (seconds <= durationOfSession * 60) {
    console.log(seconds);
  } else handleStop();

  return (
    <AppWrapper>
      <div className="upper-line"></div>
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <div className="free-space1">
        <ShowingTechniqueNameOnScreen chosenTechnique={chosenTechnique} />

        {durationOfSession * 60 === seconds ? (
          <EndOfSessionText />
        ) : intervalId || pause ? (
          ""
        ) : (
          <BeginSessionText durationOfSession={durationOfSession} />
        )}
      </div>
      <div className="timer-container">
        <Timer
          chosenTechnique={chosenTechnique}
          seconds={seconds}
          setSeconds={setSeconds}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          durationOfSession={durationOfSession}
          pause={pause}
          setPause={setPause}
          handleStop={handleStop}
          handlePause={handlePause}
          vibrations={vibrations}
          sounds={sounds}
        />
      </div>
      <div className="menu-container">
        <NavigationIcons
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={durationOfSession}
          setPause={setPause}
          handlePause={handlePause}
          handleStop={handleStop}
          vibrations={vibrations}
          setVibrations={setVibrations}
          sounds={sounds}
          setSounds={setSounds}
        />
      </div>
    </AppWrapper>
  );
};
export default App;
