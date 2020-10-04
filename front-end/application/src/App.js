import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home"
import Curiosity from "./components/Curiosity"

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/graph">
            <text>A</text>
          </Route>
          
          <Route path="/ajuda">
            <text>A</text>
          </Route>
          
          <Route path="/saiba-mais">
            <Curiosity/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
