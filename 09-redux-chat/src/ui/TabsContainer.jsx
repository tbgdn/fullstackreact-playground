import React from 'react';
import Actions from "../domain/Actions";
import {connect} from "react-redux";

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

const mapStateToTabProps = (state) => {
    const tabs = state.threads.map(t => ({
        title: t.title,
        active: t.id === state.activeThreadId,
        id: t.id
    }));
    return {
        tabs
    };
};

const mapDispatchToTabsProps = (dispatch) => ({
    onClick: (id) => {
        dispatch(Actions.openThread(id))
    },
    handleNewThreadClick: () => {
        dispatch(Actions.newThread())
    }
});

export default connect(mapStateToTabProps, mapDispatchToTabsProps)(Tabs);