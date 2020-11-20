import React from "react";
import { Router } from "./router";
import Context from "./context/context";
import reviews from "./constants/constants";

const App = () => {
  return (
    <Context.Provider value={reviews}>
      <Router />
    </Context.Provider>
  );
};

export default App;
