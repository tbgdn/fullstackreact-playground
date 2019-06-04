import React, {Component} from "react";
import PropTypes from "prop-types";

const chance = require("chance").Chance();

export default class MessageInput extends Component {
    static propTypes = {
        handleNewMessage: PropTypes.func.isRequired
    };
    state = {
        value: chance.sentence({words: 5})
    };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleNewMessage(this.state.value);
        this.setState({
            value: chance.sentence({words: 5})
        });
    };
    render = () => (
        <form className="form-row align-items-center">
            <div className="col-md-11">
                <input className="form-control" type="text"
                       value={this.state.value} onChange={this.handleChange}/>
            </div>
            <div className="col-md-1">
                <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
            </div>
        </form>
    );
}