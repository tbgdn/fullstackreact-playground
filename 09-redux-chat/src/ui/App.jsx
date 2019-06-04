import React, {Component} from "react";
import ThreadContainer from "./ThreadContainer";
import TabsContainer from "./TabsContainer";

export default class App extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="card shadow-sm bg-white rounded">
                    <TabsContainer/>
                    <ThreadContainer/>
                </div>
            </div>

        );
    }
}