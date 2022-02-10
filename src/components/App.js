import React from "react";
import { calm } from "../data/breathingTechniques";
import { Timer } from "./Timer";

const App = () => {
  console.log(calm.inhaleExhale);
  return (
    <div>
      <Timer breathingTechnique={calm} />
    </div>
  );
};

export default App;
