import "./App.css";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Login from "./Loginpage/Login";
import News from "./newsection/News";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <News />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
