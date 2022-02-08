import React from 'react';
import {breathingTechniques, calm} from '../data/breathingTechniques';
import {Timer} from './Timer';

const App = () => {
    console.log(calm.inhaleExhale);
return (
    <div><Timer/></div>
    );
}


export default App;