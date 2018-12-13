import React from 'react';
import styles from "./Switch.css";

const CREDIT_CARD = "CreditCard";
const BITCOIN = "Bitcoin";

class Switch extends React.Component {
    state = {
        paymentMethod: BITCOIN
    };
    renderChoice = (choice) => {
        const cssClasses = [];
        if (this.state.paymentMethod === choice){
            cssClasses.push(styles.active);
        }
        return (
            <div className={cssClasses}
                onClick={this.handleChoiceOnClick(choice)}
            >
                {choice}
            </div>
        );
    };
    handleChoiceOnClick = (choice) => {
        return () => {
            this.setState({
                paymentMethod: choice
            })
        };
    };
    render(){
        return (
            <div className="switch">
                {this.renderChoice(CREDIT_CARD)}
                {this.renderChoice(BITCOIN)}
                Pay with: {this.state.paymentMethod}
            </div>
        );
    }
}

export default Switch;
