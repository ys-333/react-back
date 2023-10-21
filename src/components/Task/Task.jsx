import { useEffect } from 'react'
import { useState } from 'react'

const Task = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('data change')
    setData(props.data)
  }, [props.data])

  const deleteHandler = (id) => {
    const newData = data.filter((d) => d.id != id)
    setData(newData)
  }
  return (
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
  )
}

export default Task
