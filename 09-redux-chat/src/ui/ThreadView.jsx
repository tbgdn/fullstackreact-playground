import React, {Component} from "react";
import PropTypes from "prop-types";
import MessageView from "./MessageView";
import MessageInput from "./MessageInput";

export default class ThreadView extends Component{
    static propTypes = {
        thread: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            messages: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                timestamp: PropTypes.number,
                text: PropTypes.string.isRequired
            })).isRequired
        }).isRequired,
        handleMessageAddition: PropTypes.func.isRequired,
        handleMessageDeletion: PropTypes.func.isRequired
    };
    handleMessageSubmit = (text) => {
        this.props.handleMessageAddition(this.props.thread.id, text);
    };
    handleMessageDeletion = (messageId) => {
        this.props.handleMessageDeletion(this.props.thread.id, messageId)
    };
    render = () => {
        let messages = this.props.thread.messages.map((message) => (
            <MessageView key={message.id} message={message} handleMessageDeletion={this.handleMessageDeletion}/>
        ));
        return (
            <div className="card-body">
                {messages}
                <MessageInput handleNewMessage={this.handleMessageSubmit}/>
            </div>
        );
    }
}