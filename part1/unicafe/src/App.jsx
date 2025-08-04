import {useState} from 'react'

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad

  if (total == 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine text = 'good' value = {good} />
      <StatisticLine text = 'neutral' value = {neutral} />
      <StatisticLine text = 'bad' value = {bad} />
      <StatisticLine text = 'all' value = {total} />
      <StatisticLine text = 'average' value = {(good - bad) / total} />
      <StatisticLine text = 'positive' value = {`${(good * 100) / total } %`} />
      </tbody>
    </table>
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
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App