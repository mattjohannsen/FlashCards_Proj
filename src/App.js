import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

import StackList from './Components/StackList';
import StackInput from './Components/StackInput';
import FlashcardList from './Components/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(MattsTestCards);
  return (
    <div className=" table table-danger">
      <header className="App-header">
        <h1>
        Flash Card Library
        </h1>
      </header>
      <table className="center">
        <thead>
          <tr>
            <th>Select a stack of flash cards to begin:</th>
          </tr>
          <tr>
            <th>Current Stack: ||</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <StackInput/>
              <StackList/>
            </td>
          </tr>
          <tr>
            <td>
              <FlashcardList flashcards={flashcards} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const MattsTestCards = [
  {
    "id":1,
    "word":"state",
    "definition":"JS object that holds values for a component"
  },
  {
    "id":2,
    "word":"props",
    "definition":"A way to pass data into components on initialization"
  },
  {
    "id":3,
    "word":"component",
    "definition":"Reusable building blocks for UI using JSX"
  }
]


export default App;
