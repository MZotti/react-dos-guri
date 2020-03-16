import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Pannel from './components/pannel/Pannel';
import Sustentacao from './components/pannel/Sustentacao';
import Websocket from './components/Websocket';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact={true} component={Pannel} />
            <Route path="/sprint" exact={true} component={Pannel} />
            <Route path="/sustentacao" component={Sustentacao} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
