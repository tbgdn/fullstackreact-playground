import React from "react";

class Buttons extends React.Component{
    render(){
        const renderButton = (props) => (
            <button className="ui button">{props.label}</button>
        );
        return (
            <div>
                <h1>What do you think of React?</h1>
                {renderButton({label: "Great"})}
                {renderButton({label: "Amazing"})}
            </div>
        );
    };
}

export default Buttons;