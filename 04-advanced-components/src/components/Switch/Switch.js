import React from 'react';
import styles from "./Switch.css";

const PAYMENT_CHOICES = ["CreditCard", "Bitcoin", "Cash", "Coupon"];

class Switch extends React.Component {
    state = {
        paymentMethod: PAYMENT_CHOICES[0]
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
                {PAYMENT_CHOICES.map((choice) => (
                    <Choice label={choice}
                            onClick={this.handleChoiceOnClick(choice)}
                            active={this.state.paymentMethod === choice} />
                ))}
                Pay with: {this.state.paymentMethod}
            </div>
        );
    }
}

const Choice = (props) => {
    let cssClasses =  [];
    if (props.active){
        cssClasses.push(styles.active);
    }
    return (
        <div onClick={props.onClick} className={cssClasses} >
            {props.label}
        </div>
    );
};

export default Switch;