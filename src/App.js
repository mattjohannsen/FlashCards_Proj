import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CollectionList from './Components/CollectionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Flash Card Library
        </h1>
      </header>
      <table class="table table-info">
        <thead>
          <tr>
            <th>Select a collection to begin:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CollectionList/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
