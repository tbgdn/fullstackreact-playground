import React from "react";
import MessageView from "./MessageView";
import MessageInput from "./MessageInput";
import Actions from "../domain/Actions";
import {connect} from "react-redux";

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

const mapStateToThreadProps = (state) => ({
    thread: state.threads.find(t => t.id === state.activeThreadId)
});

const mapDispatchToThreadProps = (dispatch) => ({
    dispatch: dispatch
});

const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    handleNewMessage: (text) => {
        dispatchProps.dispatch(Actions.addMessage(stateProps.thread.id, text))
    },
    handleMessageDeletion: (id) => {
        dispatchProps.dispatch(Actions.deleteMessage(stateProps.thread.id, id))
    }
});

export default connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(ThreadView);