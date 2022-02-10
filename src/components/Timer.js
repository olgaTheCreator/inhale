import React, { useState, useEffect } from "react";

export const Timer = ({breathingTechnique}) => {
    const {inhaleExhale} = breathingTechnique;
    const [seconds, setSeconds] = useState(0);
    const modFromSec = seconds % (inhaleExhale.reduce((acc, b) => (acc + b.duration), 0));
    console.log(modFromSec);
    useEffect(() => {
        const initialUnixTime = Date.now();
        const interval = setInterval(() => {
            setSeconds(seconds => Math.floor((Date.now() - initialUnixTime)/1000));
        }, 1000);
        return () => clearInterval(interval);

    }, []);
   // const arr1 = [{duration: 4, step: "inhale"}, {duration: 0, step: "hold"}, {duration: 6, step: "exhale"}, {duration: 0, step: "hold"}]

    const changeOfStep = (modulus, array) => {
        for (let i=0; i <=3; i++) {
            if (modulus < array[i].duration) {
                return (
                <><div>{array[i].duration - modulus}</div><div>{array[i].step}</div></>)
            }
            else modulus = modulus - array[i].duration;
        }
    }


    return (
        <div>
            {seconds}<br /><br />
            {changeOfStep(modFromSec, inhaleExhale)}
        </div>
    );

};