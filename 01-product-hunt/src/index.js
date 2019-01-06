import "./css/main.css";
import "semantic-ui-css/semantic.css";
import ReactDOM from "react-dom";
import React from "react";
import ProductList from "./js/ProductList";

ReactDOM.render(
    <ProductList/>,
    document.getElementById("content")
);