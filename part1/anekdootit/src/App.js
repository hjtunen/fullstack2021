import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Random = (props) => (
  Math.floor(Math.random() * props)
)

const Vote = (props) => {

  //console.log(props)
  //console.log(props[0])
  //console.log(props[1])

  const copy = {...props[1]}
  copy[props[0]] += 1

  return copy

}

const VoteInfo = (props) => (
  <div>
    has {props.votes[props.selected]} votes
  </div>

)

const MostVotes = (props) => {
  let most = 0
  let index = 0
  //console.log(props)
  for (let i = 0; i < props.anecdotes.length; i++) {
    if (props.votes[i] > most) {
      most = props.votes[i]
      index = i
    }
  }

  return (
    <div>
      {props.anecdotes[index]}
      <VoteInfo selected={index} votes={props.votes}></VoteInfo>
    </div>
  )
}

  


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const a = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(a)


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <VoteInfo selected={selected} votes={votes}/>
      <div>
      <Button handleClick={() => setVotes(Vote([selected, votes]))} text="vote"/>
      <Button handleClick={() => setSelected(Random(anecdotes.length))} text="next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
