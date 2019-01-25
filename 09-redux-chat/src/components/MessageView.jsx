import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MessageView extends Component{
    static propTypes = {
        index: PropTypes.number.isRequired,
        message: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
    };
    handleDeleteClick = (event) => {
        this.props.onDelete(this.props.index);
    };
    render = () => (
        <p className="h5">
            {this.props.message}
            <span className="pl-2">
                <button className="btn btn-sm btn-outline-danger" onClick={this.handleDeleteClick}>
                    <i className="fas fa-times"></i>
                </button>
            </span>
        </p>
    );
};