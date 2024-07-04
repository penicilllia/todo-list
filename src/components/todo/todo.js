import React from 'react';
import './todo.css';

export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='task__card'>
        <p className='task__description' onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className='todo__buttons'>
            <button className='button__todo' onClick={() => deleteTodo(task.id)}>
                <img src='./icons8-delete.svg' alt='delete icon'></img>
            </button>
        </div>
    </div>
  )
}
