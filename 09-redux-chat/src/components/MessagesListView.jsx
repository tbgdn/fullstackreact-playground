import React, {Component} from "react";
import PropTypes from "prop-types";
import MessageView from "./MessageView";

export default class MessagesListView extends Component{
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.string).isRequired,
        onDelete: PropTypes.func.isRequired
    };
    render = () => (
        this.props.messages.map((message, index) => (
            <MessageView key={index} index={index} message={message} onDelete={this.props.onDelete}/>
        ))
    );
}