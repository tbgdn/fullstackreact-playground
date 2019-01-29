import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ThreadsNavigator extends Component{
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            active: PropTypes.bool
        })).isRequired,
        handleTabClick: PropTypes.func.isRequired,
        handleNewThreadClick: PropTypes.func.isRequired,
    };
    handleTabClick = (event) => {
        event.preventDefault();
        this.props.handleTabClick(event.target.id);
    };
    render = () => (
        <div className="card-header">
            <ul className="nav nav-pills">
                {
                    this.props.tabs.map(t => (
                        <li className="nav-item" key={t.id}>
                            <a id={t.id} onClick={this.handleTabClick} className={t.active ? "nav-link active" : "nav-link"} href="#">{t.title}</a>
                        </li>
                    ))
                }
                <li className="nav-item" key="new-thread">
                    <a onClick={this.props.handleNewThreadClick} className="nav-link active" href="#">
                        <i className="fas fa-plus"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}