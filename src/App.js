import React from "react";
import "./App.css";

// RRD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Users from "./screens/Users";
import UserList from "./screens/UserList";
import UserDetail from "./screens/UserDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
