import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CourseSelect extends Component{
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };
    state = {
        department: null,
        course: null,
        courses: [],
        _loading: false
    };
    getDerivedStateFromProps(update){
        return {
            deparment: update.department,
            course: update.course
        }
    };
    renderDepartmentSelect = () => {};
    renderCourseSelect = () => {};
    render(){
        return(
            <div>
                {this.renderDeparmentSelec()}
                {this.renderCourseSelect()}
            </div>
        );
    }
}