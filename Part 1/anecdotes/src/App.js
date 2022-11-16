import React, { useState } from 'react'
import Anecdote from "./Anecdote";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(0)

  function randomAnecdote () {
    const random = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(random)
  }

  function voting () {
      setVotes(votes+1)
  }

  return (
      <div>
        <Anecdote
          anecdotes={anecdotes}
          selected={selected}
          votes={votes}
        />
        <button onClick={randomAnecdote}>Next</button>
        <button onClick={voting}>Vote</button>
      </div>
  )
}

export default App