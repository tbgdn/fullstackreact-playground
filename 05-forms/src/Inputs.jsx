import React, {Component} from "react";

class Inputs extends Component{
    state = {
        name: "",
        names: []
    };
    handleSubmit = (event) => {
        let names = [...this.state.names, this.state.name];
        this.setState({names: names, name: ""});
        event.preventDefault();
    };
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };
    render(){
        return (
            <div className="ui segment">
                <h2 className="ui header">Sign Up Sheet</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui action input">
                        <input placeholder="Name"
                               type="text"
                               value={this.state.name}
                               onChange={this.handleNameChange}/>
                        <button className="ui primary button">Add</button>
                    </div>
                </form>
                <div>
                    <h3>Names</h3>
                    <div className="ui list">
                        {
                            this.state.names.map((name, index) => (<div key={index} className="item">{name}</div>))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Inputs;