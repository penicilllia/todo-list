import React, {useState, useEffect} from 'react'
import { TodoForm } from '../todo-form/todoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../todo/todo';
import { Flower } from '../flower/flower';
import './todoWrapper.css';

uuidv4();

export const TodoWrapper = () => {
    const initialTodoList = JSON.parse(localStorage.getItem('todoList'));
    const [todoList, setTodoList] = useState(initialTodoList);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('todoList'));
        if (list) {
            setTodoList(list);
        }
    }, []);

    const addTodo = (todo) => {
        setTodoList([...todoList, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    const toggleComplete = id => {
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

    const deleteTodo = id => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    return (
        <div className='todo-wrapper'>
            <div className='todo-wrapper__header'>
                <Flower></Flower>
                <h1 className='todo-wrapper__title'>Let's get things done!</h1>
                <Flower></Flower>
            </div>
            <TodoForm addTodo={addTodo}></TodoForm>
            {todoList.map((todo, index) => (
                <Todo 
                    task={todo}
                    key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                >
                </Todo>
            ))}
        </div>
    )
}
