import {useState} from 'react'

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(good * 100) / total} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (value) => setGood(value)
  const setToNeutral = (value) => setNeutral(value)
  const setToBad = (value) => setBad(value)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {() => setToGood(good + 1)} text = 'good'/>
      <Button onClick = {() => setToNeutral(neutral + 1)} text = 'neutral' />
      <Button onClick = {() => setToBad(bad + 1)} text = 'bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App