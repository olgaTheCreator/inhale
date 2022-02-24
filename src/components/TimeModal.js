import React from "react";
import "./modalsStyle.css";

export const TimeModal = ({ setTimeOpen, setDuration }) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        setTimeOpen(false);
      }}
    >
      <div className="centered">
        <div className="modal">
          <div className="durations-list">
          <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li></ul>
          </div>
          <button onClick={() => setDuration(5)}>SET DURATION</button>
        </div>
        
      </div>
    </div>
  );
};
