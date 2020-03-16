import React from 'react';

import Navbar from './components/navbar/Navbar';
import Pannel from './components/pannel/Pannel';
import Websocket from './components/Websocket';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Pannel />
    </div>
  );
}

export default App;
