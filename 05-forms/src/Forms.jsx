import React from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

const Forms = () => (
    <div className="container-fluid" style={{padding: 0}}>
        <div role="navigation" className="navbar navbar-dark bg-dark sticky-top">
            <h1 className="navbar-brand">React forms</h1>
        </div>
        <div className="container-fluid mt-4">
            <Buttons/>
            <Inputs/>
        </div>
    </div>
);

export default Forms;