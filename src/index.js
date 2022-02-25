import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

window.onresize = function () {
  document.body.height = window.innerHeight;
};
window.onresize();

ReactDOM.render(<App />, document.querySelector("#root"));
