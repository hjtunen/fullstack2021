import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
    <div>
      <h1>statistics</h1>
      No feedback given
    </div>
    )
  }
  const all = good+neutral+bad
  const average = (good-bad)/all
  const positive = (good+neutral)/all
  return (
    <div>
      <h1>statistics</h1>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
      all {all} <br/>
      average {average} <br/>
      positive {positive} %<br/>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App