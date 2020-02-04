import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

// eslint-disable-next-line react/prop-types
const App = ({errorsAmount}) => {
  return <WelcomeScreen errorsAmount={errorsAmount} />;
};

export default App;
