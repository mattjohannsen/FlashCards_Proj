import React, {Component} from 'react';
import './App.css';

import StackList from './Components/StackList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Flash Card Library
        </h1>
      </header>
      <table className="table table-info">
        <thead>
          <tr>
            <th>Select a stack of flash cards to begin:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <StackList/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
