import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

const TodoForm = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();


        if ( description.trim().length !== 0 ) {
            
            handleAddTodo({
                id: new Date().getTime(),
                desc: description,
                done: false
            });

            reset();
        } else {
            return;
        }

    }


    return (
        <>
            <h3>Agregar tarea</h3>
                        <hr />
                        <form onSubmit={handleSubmit} > 
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="Descripcion.." 
                                name="description" 
                                value={description}
                                onChange={handleInputChange}
                                autoComplete="off" />

                            <button 
                                className="btn btn-outline-success mt-1 btn-block">
                                    Agregar
                                </button>
            </form>
        </>
    );
};

TodoForm.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
};

export default TodoForm;