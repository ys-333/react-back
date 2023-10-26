import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

const Task = ({ goalData, editSaveData }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('data change')
    setData(goalData)
  }, [goalData])

  const deleteHandler = (id) => {
    const newData = data.filter((d) => d.id != id)
    setData(newData)
  }
  return (
    <ul className="task">
      {data.map((d) => {
        return (
          <Card
            d={d}
            editSaveData={editSaveData}
            deleteHandler={deleteHandler}
          />
        )
      })}
    </ul>
  )
}

export default Task
