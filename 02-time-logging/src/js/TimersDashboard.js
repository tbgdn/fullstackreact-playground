import React, {Component} from "react";
import EditableTimersList from "./EditableTimersList"
import ToggleableTimerForm from "./ToggleableTimerForm"
import Helpers from "./Helpers";
const uuidv4 = require("uuid/v4");
require("./client.js");

class TimersDashboard extends React.Component{
    state = {
        timers: []
    };
    handleCreateForSubmit = (timer) => {
        this.createTimer(timer);
    };
    createTimer = (timer) => {
        console.log("Create timer: ", timer);
        const t = new Helpers().newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        });
    };
    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };
    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === attrs.id){
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    });
                }else{
                    return timer;
                }
            })
        });
    };
    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    };
    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });
    };
    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };
    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId){
                    return Object.assign({}, timer, {
                        runningSince: now
                    });
                }else{
                    return timer;
                }
            })
        });

        console.log("[React] starting timer:", timerId, now);
        client.startTimer({
            id: timerId,
            start:  now
        });
    };
    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };
    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId){
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null
                    });
                }else{
                    return timer;
                }
            })
        });
    };
    loadTimersFromServer = () => {
        console.log("Loading from server...");
        client.getTimers((serversTime) => {
            this.setState({timers: serversTime});
        })
    };
    componentDidMount(){
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }
    render(){
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimersList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateForSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default TimersDashboard;