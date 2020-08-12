import React from "react";
import "./App.css";

// RRD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Screens
import NotesBlog from "./screens/NotesBlog";
import CurrencyConverter from "./screens/CurrencyConverter";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <>
              <h1>Home</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/notesBlog">Blog de notas</Link>
                  </li>
                  <li>
                    <Link to="/currencyConverter">Conversor de divisas</Link>
                  </li>
                </ul>
              </nav>
            </>
          </Route>
          <Route path="/notesBlog">
            <NotesBlog />
          </Route>
          <Route path="/currencyConverter">
            <CurrencyConverter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
