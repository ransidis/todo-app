import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, togleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>togleComplete(task.id)} className={`${task.completed? 'completed':''}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)} id='editIcon'/>
        <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
