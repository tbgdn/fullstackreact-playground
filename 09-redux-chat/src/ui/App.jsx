import React, {Component} from "react";
import {createStore} from "redux";
import Reducers from "../domain/Reducers";
import ThreadView from "./ThreadView";
import MessageInput from "./MessageInput";
import Actions from "../domain/Actions";
import Threads from "../data/threads.json";
import ThreadsNavigator from "./ThreadsNavigator";

const initialState = Threads;

export default class App extends Component{
    constructor(props){
        super(props);
        this.store = createStore(Reducers.allActionTypes, Threads);
    }
    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }
    handleMessageDelete = (threadId, id) => {
        this.store.dispatch(Actions.deleteMessage(threadId, id));
    };
    handleMessageAdd = (threadId, text) => {
        this.store.dispatch(Actions.addMessage(threadId, text));
    };
    handleTabClick = (threadId) => {
        this.store.dispatch(Actions.openThread(threadId));
    };
    handleNewThreadClick = () => {
        this.store.dispatch(Actions.newThread());
    };
    render = () => {
        let state = this.store.getState();
        let activeThread = state.threads.find(t => t.id === state.activeThreadId);
        let tabs = state.threads.map(t => ({
            id: t.id,
            title: t.title,
            active: t.id === state.activeThreadId
        }));
        return (
            <div className="container">
                <div className="card shadow-sm bg-white rounded">
                    <ThreadsNavigator tabs={tabs}
                                      handleTabClick={this.handleTabClick}
                                      handleNewThreadClick={this.handleNewThreadClick}
                    />
                    <ThreadView thread={activeThread}
                                handleMessageDeletion={this.handleMessageDelete}
                                handleMessageAddition={this.handleMessageAdd}/>
                </div>
            </div>

        );
    }
}