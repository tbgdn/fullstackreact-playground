import React, {Component} from "react";

class Inputs extends Component{
    state = {
        names: []
    };
    handleSubmit = (event) => {
        let name = this.refs.name.value;
        this.setState({names: [...this.state.names, name]});
        this.refs.name.value = "";
        event.preventDefault();
    };
    render(){
        return (
            <div className="ui segment">
                <h2 className="ui header">Sign Up Sheet</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui action input">
                        <input placeholder="Name" type="text" ref="name"/>
                        <button className="ui primary button">Add</button>
                    </div>
                </form>
                <div className="ui list">
                    {
                        this.state.names.map((name, index) => (<div key={index} className="item">{name}</div>))
                    }
                </div>
            </div>
        );
    }
}

export default Inputs;