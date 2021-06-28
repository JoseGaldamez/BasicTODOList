import React from 'react';

import ItemTodo from './itemTodo';

const TodoList = ({todos = [], handleDetele, handleToggle}) => {

    return (
        <ul className="list-group">
            {
                todos.map( (todo, i) => (
                    <ItemTodo 
                            key={todo.id} 
                            item={todo} 
                            index={i} 
                            handleDelete={handleDetele} 
                            handleToggle = {handleToggle} />
                ) )
            }        
        </ul>
    );
};


export default TodoList;