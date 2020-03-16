import React from "react";
import { GlobalState } from "./context/GlobalState";
import Routes from "./routes";
const App = () => {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
};

export default App;
