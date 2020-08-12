import React from "react";
import "./App.css";

// RRD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";
import Users from "./screens/Users";

// Component
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <>
              <Menu currentPath="home" />
              <h1>Home</h1>
            </>
          </Route>
          <Route path="/notesBlog">
            <Menu currentPath="notesBlog" />
            <NotesBlog />
          </Route>
          <Route path="/currencyConverter">
            <Menu currentPath="currencyConverter" />
            <CurrencyConverter />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
