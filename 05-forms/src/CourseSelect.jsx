import React, {Component} from "react";
import PropTypes from "prop-types";
import Core from './data/api/core.json';
import Electives from './data/api/electives.json';

const NETWORK_DELAY = 2000;
const Courses = {
    core: Core,
    electives: Electives
};

export default class CourseSelect extends Component {
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

    static getDerivedStateFromProps(update) {
        return {
            deparment: update.department,
            course: update.course
        }
    };

    fetch = (department) => {
        this.setState({_loading: true, courses: []});
        apiClient(department).then(courses => {
            this.setState({_loading: false, courses: courses});
        })
    };
    onDepartmentSelect = (event) => {
        let department = event.target.value;
        let course = null;
        this.setState(() => ({department, course}));
        this.props.onChange({
            name: "department",
            value: department
        });
        this.props.onChange({
            name: "course",
            value: course
        });
        if (department) {
            this.fetch(department);
        }
    };
    onCourseSelect = (event) => {
        let course = event.target.value;
        this.setState({course});
        this.props.onChange({
            name: "course",
            value: course
        });
    };
    renderDepartmentSelect = () => (
        <div className="form-group">
            <select className="form-control" onChange={this.onDepartmentSelect}
                    value={this.state.department || ""}>
                <option value="">Which department?</option>
                <option value="core">NodeSchool: Core</option>
                <option value="electives">NodeSchool: Electives</option>
            </select>
        </div>
    );
    renderCourseSelect = () => {
        if (this.state._loading) {
            return (
                <div className="form-group">
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span className="pl-2">Loading courses...</span>
                </div>

            );
        }
        if (!this.state.department || !this.state.courses.length) {
            return <span/>
        }
        return (
            <div className="form-group">
                <select className="form-control" onChange={this.onCourseSelect} value={this.state.course || ""}>
                    {[
                        <option value="" key="course-none">
                            Which course?
                        </option>,
                        ...this.state.courses.map((course, index) => (
                            <option value={course} key={index}>
                                {course}
                            </option>
                        ))
                    ]}
                </select>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.renderDepartmentSelect()}
                {this.renderCourseSelect()}
            </div>
        );
    }
}

const apiClient = (department) => {
    return {
        then: (cb) => {
            setTimeout(() => {
                cb(Courses[department]);
            }, NETWORK_DELAY)
        }
    };
};