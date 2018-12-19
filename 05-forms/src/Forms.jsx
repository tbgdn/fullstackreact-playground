import React from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const Forms = () => (
    <div className="ui basic segment">
        <div className="ui inverted segment">
            <h1 className="ui purple inverted header">React forms</h1>
        </div>
        <Buttons />
        <Inputs />
    </div>
);

export default Forms;