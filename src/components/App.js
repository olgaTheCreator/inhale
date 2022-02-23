import React, { useState } from "react";
import { breathingTechniques } from "../data/breathingTechniques";
import { Timer } from "./Timer";
import { NavigationIcons } from "./NavigationIcons";
//import { ChoosinTechniqueModal } from "./TechniquesModal";

const App = () => {
  // console.log(calm.inhaleExhale);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  console.log(chosenTechnique);
  return (
    <div>
      <div>
        {chosenTechnique.name}
        <br />
        <Timer chosenTechnique={chosenTechnique} />
      </div>
      <div>
        <NavigationIcons
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
        />
      </div>
    </div>
  );
};

export default App;
