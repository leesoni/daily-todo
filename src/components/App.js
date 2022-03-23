import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import GlobalStyles from "../GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Home}></Route>
      </Router>
    </>
  );
}

export default App;