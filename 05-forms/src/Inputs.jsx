import React, {Component} from "react";
import {isEmail} from "validator";
import Field from "./Field";

class Inputs extends Component{
    state = {
        fields: {
            name: "",
            email: ""
        },
        people: []
    };
    handleSubmit = (event) => {
        this.setState((state) => {
            let person = this.state.fields;
            let fieldErrors = this.validate(person);
            if (Object.keys(fieldErrors).length){
                return {fieldErrors};
            }else{
                return {
                    people: [...state.people, state.fields],
                    fields: {
                        name: "",
                        email: ""
                    },
                    fieldErrors: {}
                };
            }
        });
        event.preventDefault();
    };
    handleInputChange = (name, value, error) => {
        this.setState((state) => {
            let fields = Object.assign({}, state.fields);
            fields[name] = value;
            return fields;
        });
    };
    isFormValid = () => {
        return !this.validateName(this.state.fields.name) &&
            !this.validateEmail(this.state.fields.email);
    };
    validateName = (name) => {
        if (name){
            return false;
        }else{
            return "Name is required";
        }
    };
    validateEmail = (email) => {
        if (!email){
            return "Email is required";
        }
        if (!isEmail(email)){
            return "Email must be valid"
        }
        return false;
    };
    render(){
        return (
            <div className="ui segment">
                <h2 className="ui header">Sign Up Sheet</h2>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <Field
                        placeholder="Name"
                        iconClass="users"
                        name="name"
                        value={this.state.fields.name}
                        validate={this.validateName}
                        onChange={this.handleInputChange}
                    />
                    <Field
                        placeholder="Email"
                        iconClass="envelope"
                        name="email"
                        value={this.state.fields.name}
                        validate={this.validateEmail}
                        onChange={this.handleInputChange}
                    />
                    <button className="ui button positive"
                            disabled={!this.isFormValid()}
                            type="submit">Add</button>
                </form>
                <div className="ui segment">
                    <h3 className="ui header">
                        <i className="users icon"></i>
                        <div className="content">
                            People
                        </div>
                    </h3>
                    <div className="ui list">
                        {
                            this.state.people.map((p) => (
                                <div key={p.name + p.email} className="item">
                                    {p.name}({p.email})
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Inputs;