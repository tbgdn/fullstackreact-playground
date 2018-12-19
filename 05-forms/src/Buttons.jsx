import React from "react";

class Buttons extends React.Component{
    handleButtonClick = (event) => {
        let button = event.target;
        console.log(`The user clicked ${button.name}: ${button.value}.`);
    };
    render(){
        const Button = (props) => (
            <button className="ui button"
                    onClick={props.handleClick}
                    name={props.label}
                    value={props.label.toLowerCase()}>
                {props.label}
            </button>
        );
        return (
            <div>
                <div className="sub header">What do you think of React?</div>
                <Button label="Great" handleClick={this.handleButtonClick}/>
                <Button label="Amazing" handleClick={this.handleButtonClick}/>
            </div>
        );
    };
}

export default Buttons;