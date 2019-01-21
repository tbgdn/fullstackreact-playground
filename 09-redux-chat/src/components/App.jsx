import React, {Component} from "react";
import Store from "../Store";
import Reducers from "../Reducers";
import MessageView from "./MessageView";
import MessagesListView from "./MessagesListView";
import MessageInput from "./MessageInput";
import Actions from "../Actions";

export default class App extends Component{
    constructor(props){
        super(props);
        this.store = new Store(Reducers.allActionTypes);
    }
    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }
    handleMessageDelete = (index) => {
        this.store.dispatch(Actions.deleteMessage(index));
    };
    handleMessageAdd = (message) => {
        this.store.dispatch(Actions.addMessage(message));
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