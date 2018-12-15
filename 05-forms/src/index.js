import React from "react";
import {render} from "react-dom";
import Forms from "./Forms";

let root = document.createElement("div");
document.body.appendChild(root);

render(<Forms/>, root);