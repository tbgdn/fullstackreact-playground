import React, {Component} from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";

class Field extends Component{
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        iconClass: PropTypes.string,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired,
    };
    state = {
        value: this.props.value,
        error: false
    };
    handleInputChange = (event) => {
        let name = this.props.name;
        let value = event.target.value;
        let error = this.props.validate ? this.props.validate(value) : false;
        this.setState({
            value,
            error
        });
        this.props.onChange({name, value, error});
    };
    static getDerivedStateFromProps(nextProps, previousState){
        return {
            value: nextProps.value,
            error: previousState.error
        };
    };
    render(){
        let inputClasses = classnames("form-control", {
            "is-invalid": this.state.error
        });
        return (
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Icon</span>
                    </div>
                    <input type="text"
                           className={inputClasses}
                           placeholder={this.props.placeholder}
                           name={this.props.name}
                           value={this.state.value}
                           onChange={this.handleInputChange}
                    />
                </div>
                {
                    this.state.error ? (
                        <div className="mt-1">
                            <span className="text-danger">{this.state.error}</span>
                        </div>
                    ) : <span/>
                }
            </div>
        );
    };
}

export default Field;