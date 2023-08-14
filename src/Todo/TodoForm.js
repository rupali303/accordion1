import React, { useState } from 'react'
import classes from "./Todo.module.css"

function TodoForm() {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
console.log(input);
const handleSubmit =(e)=>{
    e.preventDefault()
setTodos([...todos], {title:input})
}


const handleChange = (e)=>{
setInput(e.target.value)
}

  return (
    <>
    <form onClick={handleSubmit}>
        <label>
            <input type='text' value={input} onChange={handleChange} className={classes.todoInput} placeholder='Enter Todo'/>
        </label>
        <button type='submit' className={classes.todoButton}>Add</button>
    </form>
    </>
  )
}

export default TodoForm