import { useState } from 'react'
import Form from './components/Form/Form'
import Task from './components/Task/Task'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = (data) => {
    setData(data)
  }

  return (
    <div className="container">
      <h1>Task manager</h1>
      <Form getData={getData} />
      <h2>Display all goals</h2>
      <Task data={data} />
    </div>
  )
}

export default App
