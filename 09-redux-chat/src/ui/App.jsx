import React, {Component} from "react";
import {createStore} from "redux";
import Reducers from "../domain/Reducers";
import ThreadContainer from "./ThreadContainer";
import Actions from "../domain/Actions";
import Threads from "../data/threads.json";
import TabsContainer from "./TabsContainer";

export default class App extends Component{
    constructor(props){
        super(props);
        this.store = createStore(Reducers.instance);
    }
    componentDidMount() {
        this.store.subscribe(() => this.forceUpdate());
    }
    handleTabClick = (threadId) => {
        this.store.dispatch(Actions.openThread(threadId));
    };
    render = () => {
        return (
            <div className="container">
                <div className="card shadow-sm bg-white rounded">
                    <TabsContainer store={this.store} />
                    <ThreadContainer store={this.store} />
                </div>
            </div>

        );
    }
}