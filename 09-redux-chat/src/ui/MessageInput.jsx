import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MessageInput extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };
    state = {
        value: ""
    };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.value);
        this.setState({
            value: ""
        });
    };
    render = () => (
        <form className="form-row align-items-center">
            <div className="col-auto">
                <input className="form-control" type="text"
                       value={this.state.value} onChange={this.handleChange}/>
            </div>
            <div className="col-auto">
                <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
            </div>
        </form>
    );
}