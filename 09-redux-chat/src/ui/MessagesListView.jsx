import React, {Component} from "react";
import PropTypes from "prop-types";
import MessageView from "./MessageView";

export default class MessagesListView extends Component{
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired
    };
    render = () => (
        this.props.messages.map((message) => (
            <MessageView key={message.id} message={message} onDelete={this.props.onDelete}/>
        ))
    );
}