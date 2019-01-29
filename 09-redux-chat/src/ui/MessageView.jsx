import React, {Component} from "react";
import PropTypes from "prop-types";
import * as moment from "moment";

export default class MessageView extends Component{
    static propTypes = {
        message: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            timestamp: PropTypes.number
        }).isRequired,
        handleMessageDeletion: PropTypes.func.isRequired
    };
    handleDeleteClick = (event) => {
        event.preventDefault();
        this.props.handleMessageDeletion(this.props.message.id);
    };
    render = () => (
        <blockquote className="blockquote">
            <p className="mb-0">
                <span className="h5">{this.props.message.text}</span>
                <button className="btn btn-sm btn-outline-danger" onClick={this.handleDeleteClick}>
                    <i className="fas fa-times"></i>
                </button>
            </p>
            <footer className="blockquote-footer">{moment(this.props.message.timestamp).format("HH:mm (Do of MMM)")}</footer>
        </blockquote>
    );
};