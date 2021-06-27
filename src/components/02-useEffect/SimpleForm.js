import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import './effects.css';
import Message from './Message';

const SimpleForm = () => {


    const [state, setState] = useState({
        name: '',
        email: ''
    })

    const {name, email} =  state;

    
    useEffect( () => {
        console.log("Hey");
    }, []);
    


    useEffect( () => {
        console.log("Hey, cambio email");
    }, [email]);






    const handleOnInputChange = ({target}) => {
        setState({...state,
            [target.name]: target.value});
    }

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
                    onChange={ handleOnInputChange } />
            </div>

            <div className="form-group">
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    autoComplete="off"
                    value = {email}
                    onChange={ handleOnInputChange } />
            </div>

            { (name == "123") && <Message /> }

        </>
    );
};

SimpleForm.propTypes = {};

export default SimpleForm;