import { useState, useEffect } from 'react'

import { fakeData } from '../../assets/data'

const Form = (props) => {
  const [input, setInput] = useState('')

  useEffect(() => {
    props.getData(fakeData)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    const temp = {
      id: Math.floor(Math.random() * 100),
      value: input,
    }

    const data = [...fakeData, temp]

    props.getData(data)
  }

  const inputChangeHandler = (event) => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <input
        className="goal"
        type="text"
        name="goal"
        id="goal"
        placeholder="enter your task"
        onChange={inputChangeHandler}
        value={input}
      />

      <input className="button" type="submit" value="Add goal" />
    </form>
  )
}

export default Form
