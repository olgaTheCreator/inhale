import React, { useState, useEffect } from "react";

export const Timer = () => {
    const initialUnixTime = Date.now();
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => Math.floor((Date.now() - initialUnixTime)/1000));
        }, 1000);
        return () => clearInterval(interval);

}, [])
    return (
        <div>{seconds}</div>
    );

};