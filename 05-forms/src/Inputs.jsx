import React, {Component} from "react";
import {isEmail} from "validator";
import Field from "./Field";
import CourseSelect from "./CourseSelect";
import SaveStatus from "./SaveStatus";
import PeopleService from "./PeopleService";

let peopleService = new PeopleService();

class Inputs extends Component {
    state = {
        fields: {
            name: "",
            email: "",
            department: null,
            course: null,
        },
        fieldErrors: [],
        people: [],
        _loading: false,
        _saveStatus: SaveStatus.READY
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            let people = [...this.state.people, this.state.fields];
            this.setState({_saveStatus: SaveStatus.SAVING});
            peopleService.save(people)
                .then(() => {
                    this.setState({
                        people,
                        fields: {
                            name: "",
                            email: "",
                            course: null,
                            department: null
                        },
                        _saveStatus: SaveStatus.SUCCESS
                    });
                })
                .catch(err => {
                    console.error(err);
                    this.setState({_saveStatus: SaveStatus.ERROR});
                })
        }
    };
    handleInputChange = ({name, value, error}) => {
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
                fieldErrors: error ? [...fieldErrors, errorMessage] : fieldErrors,
                _saveStatus: SaveStatus.READY
            };
        });
    };
    isFormValid = () => {
        let person = this.state.fields;
        if (!person.name) return false;
        if (!person.email) return false;
        if (!person.department) return false;
        if (!person.course) return false;
        return this.state.fieldErrors.length === 0;
    };
    isNameInvalid = (name) => (name ? false : "Name is required");
    isEmailInvalid = (email) => {
        if (email) {
            return isEmail(email) ? false : "Email must be valid";
        } else {
            return "Email is required";
        }
    };

    componentDidMount() {
        this.setState({_loading: true});
        peopleService.load().then(people => {
            this.setState({_loading: false, people: people})
        });
    }

    render() {
        return (
            <div className="card shadow-sm bg-white rounded">
                <h4 className="card-header">Sign Up Sheet</h4>
                <div className="card-body">
                    {this.state._loading ?
                        this.renderLoadingPlaceholder() :
                        this.renderLoadedBody()
                    }
                </div>
            </div>
        );
    }

    renderLoadingPlaceholder = () => (
        <div className="card-body">
            <div className="spinner-border spinner-border-sm text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <span className="pl-2">Loading courses...</span>
        </div>
    );
    renderLoadedBody = () => (
        <div className="card-body">
            {this.renderPersonForm()}
            {this.renderPeopleList()}
        </div>
    );
    renderPeopleList = () => (
        <div className="ui segment">
            <h3 className="ui header">
                <div className="content">
                    People
                </div>
            </h3>
            <ul className="list-group list-group-flush">
                {
                    this.state.people.map((p) => (
                        <li key={p.name + p.email} className="list-group-item">
                            {[p.name, p.department, p.course].join(",")}({p.email})
                        </li>
                    ))
                }
            </ul>
        </div>
    );
    renderPersonForm = () => (
        <form onSubmit={this.handleSubmit} noValidate={true}>
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
            <CourseSelect
                onChange={this.handleInputChange}
                department={this.state.fields.department}
                course={this.state.fields.course}
            />
            { this.renderSubmitButton() }
        </form>
    );
    renderSubmitButton = () => {
        if (this.state._saveStatus === SaveStatus.SAVING){
            return (
                <button className="btn btn-primary" type="submit" disabled={true}>
                    Saving...
                </button>
            );
        }
        if (this.state._saveStatus === SaveStatus.SUCCESS){
            return (
                <button className="btn btn-success" disabled={true} type="submit">
                    Saved!
                </button>
            );
        }
        if (this.state._saveStatus === SaveStatus.ERROR){
            return (
                <button className="btn btn-danger" disabled={!this.isFormValid()} type="submit">
                    Save Failed - Retry?
                </button>
            );
        }
        if (this.state._saveStatus === SaveStatus.READY){
            return (
                <button className="btn btn-light" disabled={!this.isFormValid()} type="submit">
                    Add
                </button>
            );
        }
    };
}

export default Inputs;