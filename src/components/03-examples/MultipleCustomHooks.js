import React from 'react';
import useFetch from '../../hooks/useFetch';
import './multiplehooks.css';

const MultipleCustomHooks = () => {
    const state = useFetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/1`);
    console.log(state);
    return (
        <div>
            <h1>Custom Hooks</h1>
        </div>
    );
};


export default MultipleCustomHooks;