import React from "react";
import Games from './game.jsx'
import Home from './home.jsx'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import Phaser from "phaser";
function App() {
  return (
    <BrowserRouter>
          <Switch>
              {/* <Route path="/play" component = { Games } /> */}
              <Route path="/" component = { Games } />
          </Switch>
    </BrowserRouter>
  );
}
export default App;
