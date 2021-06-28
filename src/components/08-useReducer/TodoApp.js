import React, { useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './styles.css';
import { todoReducer } from './todoReducer';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}


const TodoApp = () => {

    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos]);


    const handleAddTodo = (newTodo) => {
        
        dispatch({
            type: "add",
            payload: newTodo
        });

    }


    

    const handleDelete = (id) => {
        const action = {
            type: "delete",
            payload: id
        }

        dispatch(action);
    }

    const handleToggle = (id) => {
        dispatch({
            type: "toggle",
            payload: id
        });
    }

    return (
        <div>
            <h1>Todo App ({todos.length}) </h1>
            <hr />
                <div className="row">
                    <div className="col-5">
                        <TodoForm handleAddTodo={handleAddTodo} />
                    </div>
                    <div className="col-7">
                        <h3>Lista de Tareas por hacer</h3>
                        <hr />

                        <TodoList 
                                todos={todos} 
                                handleDetele = {handleDelete}
                                handleToggle = {handleToggle} />

                    </div>
                </div>
        </div>
    );
};


export default TodoApp;