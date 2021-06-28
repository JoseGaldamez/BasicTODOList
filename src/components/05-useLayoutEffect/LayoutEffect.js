import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import './layout.css';

const LayoutEffect = () => {
    const {counter, increment} = useCounter(1);

    const {data} = useFetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/'+counter);
    const {quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setboxSize] = useState();

    useLayoutEffect(() => {

        console.log( pTag.current.getBoundingClientRect() );
        setboxSize(pTag.current.getBoundingClientRect())
        
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                
                <blockquote className="blockquote text-right">
                    <p ref={pTag} className="mb-10">{quote}</p>
                </blockquote>
            

            <button
                onClick={increment}
                className="btn btn-primary">
                    Next quote
            </button>

            <pre>
                { JSON.stringify(boxSize, null,3)}
            </pre>

            
        </div>
    );

};


export default LayoutEffect;