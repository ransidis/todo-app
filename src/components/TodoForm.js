import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        setValue('')
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <h3>Get Everything Done!</h3>
        <input type='text' className='todo-input' value={value} placeholder='What is the Task Today?' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
