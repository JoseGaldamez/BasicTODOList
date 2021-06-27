import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import './effects.css';
import Message from './Message';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm ({
        name: '',
        password: '',
        email: '',
    })

    const {name, email, password} =  formValues;

    
    return (
        <>
          <h1>Use Effect</h1>  
          <hr />
            <div className="form-group">
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value = {name}
                    onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    autoComplete="off"
                    value = {email}
                    onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <input type="password"
                    name="password"
                    className="form-control"
                    placeholder="Contraseña"
                    autoComplete="off"
                    value = {password}
                    onChange={ handleInputChange } />
            </div>

            { (name == "123") && <Message /> }

        </>
    );
};

FormWithCustomHook.propTypes = {};

export default FormWithCustomHook;