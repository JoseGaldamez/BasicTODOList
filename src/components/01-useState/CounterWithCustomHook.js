import React from 'react';
import useCounter from '../../hooks/useCounter';


import './counter.css';

const CounterWithCustomHook = () => {

    const {state, increment, dicrement, reset } = useCounter(100);


    return ( <>

        <h1>Counter with Hook {state}</h1>
        <hr />

        <button className="btn btn-primary" onClick={ () => increment(2)}>
            +1
        </button>

        <button className="btn btn-primary" onClick={() => dicrement(2)}>
            -1
        </button>


        <button className="btn btn-primary" onClick={reset}>
            Reset
        </button>
    
    </> );
}
 
export default CounterWithCustomHook;