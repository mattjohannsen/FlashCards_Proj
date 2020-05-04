import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CollectionList from './Components/CollectionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <CollectionList/>
        </p>

      </header>
    </div>
  );
}

export default App;
