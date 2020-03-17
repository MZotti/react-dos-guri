import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Navbar from './components/navbar/Navbar';
import Sprint from './components/pannel/Sprint';
import Sustentacao from './components/pannel/Sustentacao';
import Websocket from './components/Websocket';



import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact={true} component={Sprint} />
            <Route path="/sprint" component={Sprint} />
            <Route path="/sustentacao" component={Sustentacao} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
