import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import App from "./components/App";

new Counter().demo();

let appMount = document.createElement("div");
document.body.appendChild(appMount);

ReactDOM.render(<App/>, appMount);