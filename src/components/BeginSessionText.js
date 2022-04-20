import React from "react";
import "./beginSessionTextStyle.css";

export const BeginSessionText = ({ durationOfSession }) => {
  return (
    <div className="begin-session">
      Begin your {durationOfSession} minute{durationOfSession > 1 ? "s" : ""}
      <br />
      breathing session
    </div>
  );
};

// const beginSessionStyles = {
//   span: {
//     color: "#455a6e",
//     shadowColor: "transparent",
//   },
// };
