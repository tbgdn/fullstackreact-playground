import React from "react";
import {render} from "react-dom";
import AdminMenu from "./admin";
import User from "./user";
import "bootstrap/dist/css/bootstrap.css";
import Common from "./common";

let container = document.createElement("div");
container.setAttribute("id", "root");
document.body.appendChild(container);


const adminPrivileges = Math.random() * 10 > 5;
const props = {
    userName: "John Doe",
    bio: "There's nothing you can find about me; i got no fingerprints.",
    authenticated: true
};

const page = (
    <div className={"container"}>
        {
            adminPrivileges ?
                <AdminMenu {...props}/> :
                <User {...props}/>
        }
        <div>
            <Common/>
        </div>
    </div>

);
render(page,
    container
);