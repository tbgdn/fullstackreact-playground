import React, {Component} from "react";
import {createStore} from "redux";
import Reducers from "../domain/Reducers";
import MessagesListView from "./MessagesListView";
import MessageInput from "./MessageInput";
import Actions from "../domain/Actions";

export default class App extends Component{
    constructor(props){
        super(props);
        this.store = createStore(Reducers.allActionTypes, {messages: []});
    }
    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }
    handleMessageDelete = (id) => {
        this.store.dispatch(Actions.deleteMessage(id));
    };
    handleMessageAdd = (text) => {
        this.store.dispatch(Actions.addMessage(text));
    };
    render = () => {
        let messages = this.store.getState().messages;
        return (
            <div className="container">
                <div className="card shadow-sm bg-white rounded">
                    <div className="card-header">
                        <h3>Redux Chat</h3>
                    </div>
                    <div className="card-body">
                        <MessagesListView messages={messages} onDelete={this.handleMessageDelete}/>
                    </div>
                    <div className="card-footer">
                        <MessageInput onAdd={this.handleMessageAdd}/>
                    </div>
                </div>
            </div>

        );
    }
}