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
import Game from "./components/Game"

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/graph">
            <Home/>
          </Route>
          
          <Route path="/ajuda">
            <text>A</text>
          </Route>
          
          <Route path="/saiba-mais">
            <Curiosity/>
          </Route>

          <Route path="/">
            <Game/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
