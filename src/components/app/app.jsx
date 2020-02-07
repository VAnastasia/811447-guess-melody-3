import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import propTypes from "prop-types";

const App = ({errorsAmount}) => {
  return <WelcomeScreen errorsAmount={errorsAmount} />;
};

App.propTypes = {
  errorsAmount: propTypes.number.isRequired,
};

export default App;
