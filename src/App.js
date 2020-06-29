import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Container} />
        <Route path="/:id" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
