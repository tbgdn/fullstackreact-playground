import React from "react";
import classnames from "classnames";

const User = (props) => (
    <div>
        <h1>User</h1>
        <h3>{props.userName}</h3>
        <p className={classnames({
            alert: true,
            "alert-secondary": props.authenticated,
            "alert-danger": !props.authenticated,
        })}>
            {props.bio}
        </p>
        {/*
            Display some input to see the attributes in action;
        */}
        <form>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Icon</div>
                    </div>
                    <input type="text" className="form-control" name="search" disabled={false}/>
                </div>
            </div>
        </form>
    </div>
);

export default User;