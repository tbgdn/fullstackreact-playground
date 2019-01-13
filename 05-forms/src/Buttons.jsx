import React from "react";

class Buttons extends React.Component {
    handleButtonClick = (event) => {
        let button = event.target;
        console.log(`The user clicked ${button.name}: ${button.value}.`);
    };

    render() {
        const Button = (props) => (
            <button className="btn btn-outline-primary"
                    type="button"
                    onClick={props.handleClick}
                    name={props.label}
                    value={props.label.toLowerCase()}>
                {props.label}
            </button>
        );
        return (
            <div className="card shadow-sm rounded mb-4">
                <h4 className="card-header">What do you think of React?</h4>
                <div className="card-body">
                    <div className="btn-group" role="group">
                        <Button label="Great" handleClick={this.handleButtonClick}/>
                        <Button label="Amazing" handleClick={this.handleButtonClick}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Buttons;