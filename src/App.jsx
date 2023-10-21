import { useState } from 'react'
import Form from './components/Form/Form'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const deleteHandler = (id) => {
    const newData = data.filter((d) => d.id != id)
    setData(newData)
  }

  const getData = (data) => {
    setData(data)
  }

  return (
    <div className="container">
      <h1>Task manager</h1>
      <Form getData={getData} />
      <h2>Display all goals</h2>
      <ul className="task">
        {data.map((d) => {
          return (
            <div
              key={d.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <li
                onClick={() => {
                  deleteHandler(d.id)
                }}
              >
                {d.value}
              </li>
              <i style={{ cursor: 'pointer' }}>edit</i>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
