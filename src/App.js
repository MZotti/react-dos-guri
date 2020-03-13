import React from 'react';
import Column from './components/Column'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="row">
      <Column status="Na fila"/>
      <Column status="Em desenvolvimento"/>
      <Column status="Em Teste"/>
      <Column status="Em Homologação"/>
      <Column status="Aguarda Publicação"/>
      <Column status="Pronto"/>
    </div>
  );
}

export default App;
