import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { fakeData } from '../../assets/data'

const Form = (props) => {
  const [input, setInput] = useState('')

  useEffect(() => {
    props.getData([])
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    if (input.length === 0) return

    const id = uuid()

    const temp = {
      id,
      value: input,
    }

    const data = [temp]

    props.getData(data)
    setInput('')
  }

  const inputChangeHandler = (event) => {
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
