import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const errorsAmount = 3;

ReactDOM.render(
    <App errorsAmount={errorsAmount}/>,
    document.getElementById(`root`)
);
