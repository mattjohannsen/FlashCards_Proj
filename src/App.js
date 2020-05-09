import React, {useState, useEffect} from 'react';
import StackList from './Components/StackList';
import StackInput from './Components/StackInput';
import FlashcardList from './Components/FlashcardList';
import './App.css';
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const currentStack = 1;
  // const testarray = [];

  useEffect(() => {
    axios
      .get('https://localhost:44393/api/collection')
      .then(res => {
        setFlashcards(res.data.filter(item=> item.id === currentStack).map(m=>m))
        console.log(res.data)
      })
  }, [])

  return (
    <div className=" table table-danger">
      <header className="App-header">
        <h1>
        Flash Card Library
        </h1>
      </header>
      <div>
              <StackInput/>
      </div>
      <div>
              <StackList />
      </div>
      <div>
              <FlashcardList flashcards={MattsTestCards} />
      </div>
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

// const MattsTestCards = [
// 	{
// 		"id":1,
// 		"title":"React",
// 		"cards":[
// 			{
// 				"id":1,
// 				"word":"state",
// 				"definition":"JS object that holds values for a component"
// 			},
// 			{
// 				"id":2,
// 				"word":"props",
// 				"definition":"A way to pass data into components on initialization"
// 			},
// 			{
// 				"id":3,
// 				"word":"component",
// 				"definition":"Reusable building blocks for UI using JSX"
// 			}
// 			]
// 	},
// 	{
// 		"id":2,
// 		"title":"C#",
// 		"cards":[
// 			{
// 				"id":4,
// 				"word":"variable",
// 				"definition":"Named space in memory"
// 			},
// 			{
// 				"id":5,
// 				"word":"class",
// 				"definition":"Template for an object that consists of member variables, constructor, methods"
// 			},
// 			{
// 				"id":6,
// 				"word":"object",
// 				"definition":"Instance of a class"
// 			}
// 			]
// 	},
// 	{
// 		"id":3,
// 		"title":"Flutter",
// 		"cards":[
// 			{
// 				"id":7,
// 				"word":"widget",
// 				"definition":"Reusable component in Flutter"
// 			}
// 			]
// 	}
// ]


export default App;
