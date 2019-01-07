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
        this.setState(() => ({
            value,
            error
        }));
        this.props.onChange(name, value, error);
    };
    static getDerivedStateFromProps(nextProps){
        return {value: nextProps.value};
    };
    render(){
        let iconClasses = classnames("icon", {
            [this.props.iconClass]: this.props.iconClass,
            "ellipsis": !this.props.iconClass,
            "horizontal": !this.props.iconClass,
        });
        return (
            <div className="field">
                <div className="ui left icon input">
                    <input type="text"
                           placeholder={this.props.placeholder}
                           name={this.props.name}
                           value={this.state.value}
                           onChange={this.handleInputChange}
                    />
                    <i className={iconClasses}></i>
                </div>
                {
                    this.state.error ? (
                        <div className="ui red inverted segment">
                            <p>{this.state.error}</p>
                        </div>
                    ) : <span/>
                }
            </div>
        );
    };
}

export default Field;