import React, {useState} from 'react';
import './todoForm.css';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState([]);

    const submitTodoForm = event => {
        event.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form className='todo-form' onSubmit={submitTodoForm}>
            <input 
                type='text'
                placeholder='What are we going to do?'
                value={value}
                onChange={e => setValue(e.target.value)}
            >
            </input>
            <button type='submit'>Submit</button>
        </form>
    )
}
