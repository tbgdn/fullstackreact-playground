import React from "react";
import {render} from "react-dom";
import Forms from "./Forms";
import "semantic-ui-css/semantic.css"

let root = document.createElement("div");
document.body.appendChild(root);

render(<Forms/>, root);