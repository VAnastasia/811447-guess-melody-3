import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";

const errorsAmount = 3;

ReactDOM.render(
    <App
      errorsAmount={errorsAmount}
      questions={questions}
    />,
    document.getElementById(`root`)
);
