import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import Store from "./domain/Store";
import Reducers from "./domain/Reducers";
import Actions from "./domain/Actions";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

let appMount = document.createElement("div");
document.body.appendChild(appMount);

ReactDOM.render(<App/>, appMount);
//

const initialState = { messages: [] };
const store = new Store(Reducers.allActionTypes, initialState);
const listener = () => {
    console.log("Current state: ", store.getState())
};
store.subscribe(listener);

store.dispatch(Actions.addMessage("How does it look, Neil?"));
const stateV1 = store.getState();
store.dispatch(Actions.addMessage("Looking good."));
const stateV2 = store.getState();

store.dispatch(Actions.deleteMessage(0));
const stateV3 = store.getState();