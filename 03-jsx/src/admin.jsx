import React from "react";
import classnames from "classnames";

const AdminMenu = (props) => (
    <div>
        <h1>Admin menu</h1>
        <h2>User: {props.userName}</h2>
        <p className={classnames({
            alert: true,
            "alert-primary": props.authenticated,
            "alert-danger": !props.authenticated,
        })}>
            {props.bio}
        </p>
    </div>
);

export default AdminMenu;