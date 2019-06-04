import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";
import Reducers from "./domain/Reducers";
import Actions from "./domain/Actions";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import {createStore} from "redux";
import {Provider} from "react-redux";

let appMount = document.createElement("div");
document.body.appendChild(appMount);

ReactDOM.render(
    <Provider store={createStore(Reducers.instance)}>
        <App/>
    </Provider>,
    appMount);
//

const store = createStore(Reducers.instance);
const listener = () => {
    console.log("Current state: ", store.getState())
};
store.subscribe(listener);

store.dispatch(Actions.addThread("First", "1"));
store.dispatch(Actions.addMessage("1", "How does it look, Neil?"));
const stateV1 = store.getState();
store.dispatch(Actions.addMessage("1","Looking good."));
const stateV2 = store.getState();

store.dispatch(Actions.deleteMessage("1",0));
const stateV3 = store.getState();