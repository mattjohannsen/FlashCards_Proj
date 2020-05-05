import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
          className="card"
          onClick={() => setFlip(!flip)}
        >
{/*           <div className="front">
            {flashcard.definition}
          </div>
          <div className="back">
            {flashcard.word}
          </div>     */}      
            {flip ? flashcard.word : flashcard.definition}
        </div>
    )
}
