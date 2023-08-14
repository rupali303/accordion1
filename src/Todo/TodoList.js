import React from 'react'
import classes from "./Todo.module.css"
import Header from './Header'
import TodoForm from './TodoForm'

function TodoList() {
  return (
    <>
    <div className={classes.todoContainer}>
        <div className={classes.todoWrapper}>
            <Header/>
            <div>
               <TodoForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default TodoList