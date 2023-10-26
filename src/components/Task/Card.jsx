import { useState } from 'react'

const Card = ({ d, deleteHandler, editSaveData }) => {
  const [edit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState(d.value)

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const saveHandler = (id) => {
    editSaveData({ id, value: inputValue })
    setEdit(false)
  }

  return (
    <div
      key={d.id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {!edit ? (
        <li
          onClick={() => {
            deleteHandler(d.id)
          }}
        >
          {d.value}
        </li>
      ) : (
        <input type="text" value={inputValue} onChange={inputHandler} />
      )}

      {!edit ? (
        <button onClick={() => setEdit(true)}>Edit</button>
      ) : (
        <button onClick={() => saveHandler(d.id)}>Save</button>
      )}
    </div>
  )
}

export default Card
