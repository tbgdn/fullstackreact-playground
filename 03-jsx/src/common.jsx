import React from "react";

let boldElement = React.createElement("b",
    null,
    "ReactText object");

const Common = () => (
    <div>
        <ul>
            <li>phone: {'\u0260e'}</li>
            <li>star: {'\u2606'}</li>
            <li>dolphin: {'\uD83D\uDC2C'}</li>
        </ul>
        <div>
            {boldElement}
        </div>
    </div>
);

export default Common;