import React from "react";
import {render} from "react-dom";
import Forms from "./Forms";
import "bootstrap/dist/css/bootstrap.css"

let root = document.createElement("div");
document.body.appendChild(root);

render(<Forms/>, root);