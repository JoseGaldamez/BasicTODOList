import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './useref.css';

const FocusScreen = () => {

    const inputRef = useRef();

    const handlerClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input ref={inputRef} type="text" className="form-control mt-10" />
            <br />

            <button onClick={handlerClick} className="btn btn-outline-primary mt-10">
                Focus
            </button>
        </>
    );
};

FocusScreen.propTypes = {};

export default FocusScreen;