import React, {Component} from 'react';
import PropTypes from "prop-types";
import Actions from "../domain/Actions";

const Tabs = (props) => (
    <div className="card-header">
        <ul className="nav nav-pills">
            {
                props.tabs.map(t => (
                    <li className="nav-item" key={t.id}>
                        <a id={t.id}
                           onClick={() => props.onClick(t.id)}
                           className={t.active ? "nav-link active" : "nav-link"}
                           href="#">
                            {t.title}
                        </a>
                    </li>
                ))
            }
            <li className="nav-item ml-md-2" key="new-thread">
                <a onClick={props.handleNewThreadClick} className="nav-link active" href="#">
                    <i className="fas fa-plus"></i>
                </a>
            </li>
        </ul>
    </div>
);

class TabsContainer extends Component {
    componentDidMount() {
        this.props.store.subscribe(() => this.forceUpdate());
    }
    render() {
        const state = this.props.store.getState();
        const tabs = state.threads.map(t => ({
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id
        }));
        return (
            <Tabs tabs={tabs}
                  onClick={id => this.props.store.dispatch(Actions.openThread(id))}
                  handleNewThreadClick={ () => this.props.store.dispatch(Actions.newThread())}
            />
        );
    }
}

TabsContainer.propTypes = {
    store: PropTypes.object.isRequired,
};

export default TabsContainer;