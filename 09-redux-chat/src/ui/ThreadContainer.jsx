import React, {Component} from "react";
import PropTypes from "prop-types";
import MessageView from "./MessageView";
import MessageInput from "./MessageInput";
import Actions from "../domain/Actions";

const ThreadView = (props) => (
    <div className="card-body">
        <MessagesList messages={props.thread.messages} handleDeleteClick={props.handleMessageDeletion}/>
        <MessageInput handleNewMessage={props.handleNewMessage}/>
    </div>
);

const MessagesList = (props) => {
    let messages = props.messages.map((message) => (
        <MessageView key={message.id} message={message}
                     handleMessageDeletion={() => props.handleDeleteClick(message.id)}/>
    ));
    return (
        <div>
            {messages}
        </div>
    );
};

class ThreadContainer extends Component {
    componentDidMount() {
        this.props.store.subscribe(() => this.forceUpdate());
    }

    render = () => {
        const state = this.props.store.getState();
        const activeThreadId = state.activeThreadId;
        const activeThread = state.threads.find(t => t.id === activeThreadId);
        return (
            <ThreadView thread={activeThread}
                        handleMessageDeletion={id => this.props.store.dispatch(Actions.deleteMessage(activeThreadId, id))}
                        handleNewMessage={text => this.props.store.dispatch(Actions.addMessage(activeThreadId, text))}
            />
        );
    }
}

ThreadContainer.propTypes = {
    store: PropTypes.object.isRequired
};

export default ThreadContainer;