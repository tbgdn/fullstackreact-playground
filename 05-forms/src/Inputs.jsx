import React, {Component} from "react";
import {isEmail} from "validator";
import Field from "./Field";

class Inputs extends Component{
    state = {
        fields: {
            name: "",
            email: ""
        },
        fieldErrors: [],
        people: []
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((state) => {
            if (this.isFormValid()){
                return {
                    people: [...state.people, state.fields],
                    fields: {
                        name: "",
                        email: ""
                    },
                    fieldErrors: []
                };
            }else{
                return Object.assign({}, state);
            }
        });
    };
    handleInputChange = (name, value, error) => {
        this.setState((state) => {
            let fields = Object.assign({}, state.fields);
            let fieldErrors = state.fieldErrors
                .filter((err) => err.field !== name);
            let errorMessage = {
                field: name,
                message: error
            };

            fields[name] = value;
            return {
                fields,
                fieldErrors: error ? [...fieldErrors, errorMessage] : fieldErrors
            };
        });
    };
    isFormValid = () => {
        let person = this.state.fields;
        if (!person.name) return false;
        if (!person.email) return false;
        return this.state.fieldErrors.length === 0;
    };
    isNameInvalid = (name) => (name ? false : "Name is required");
    isEmailInvalid = (email) => {
        if (email){
            return isEmail(email) ? false : "Email must be valid";
        }else{
            return "Email is required";
        }
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
                        validate={this.isNameInvalid}
                        onChange={this.handleInputChange}
                    />
                    <Field
                        placeholder="Email"
                        iconClass="envelope"
                        name="email"
                        value={this.state.fields.email}
                        validate={this.isEmailInvalid}
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