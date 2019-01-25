import React, {Component} from "react";
import PropTypes from "prop-types";
import * as moment from "moment";

export default class MessageView extends Component{
    static propTypes = {
        message: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired
    };
    handleDeleteClick = (event) => {
        event.preventDefault();
        this.props.onDelete(this.props.message.id);
    };
    render = () => (
        <div>
            <span className="h5">{this.props.message.text}</span>
            <span className="text-muted">@{moment(this.props.message.timestamp).format("HH:mm (Do of MMM)")}</span>
            <span className="pl-2">
                <button className="btn btn-sm btn-outline-danger" onClick={this.handleDeleteClick}>
                    <i className="fas fa-times"></i>
                </button>
            </span>
        </div>
    );
};