import { useState } from 'react'
import Form from './components/Form/Form'
import Task from './components/Task/Task'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = (data) => {
    setData(data)
  }
  const editSaveData = (task) => {
    console.log(task)
    let { id, value } = task
    console.log(id, value)

    const temp = data.map((d) => {
      if (d.id === id) {
        d.value = value
      }
      return d
    })
    console.log(temp)
    setData(temp)
  }

  return (
    <div className="container">
      <h1>Task manager</h1>
      <Form getData={getData} />
      <h2>Display all goals</h2>
      <Task goalData={data} editSaveData={editSaveData} />
    </div>
  )
}

export default App
