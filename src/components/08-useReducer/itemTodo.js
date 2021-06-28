import React from 'react';

const ItemTodo = ({item, index, handleDelete, handleToggle}) => {

    return (
        <li className="list-group-item" key={item.id}>
            <p className={ item.done ? "complete" : "" } onClick={() => handleToggle( item.id ) }> {index + 1}. {item.desc} </p>
            <button onClick={() => handleDelete(item.id) } className="btn btn-outline-danger">
                Borrar
            </button>
        </li>
    );
};

export default ItemTodo;