import React, { useState } from 'react';
import Small from './Small';


import '../02-useEffect/effects.css';

const Memorize = () => {

    const [counter, setcounter] = useState(0);

    const [show, setshow] = useState(false);

    return (
        <div>
            <h1>Memoriza <Small value={counter} /></h1>
            <hr />

            <button onClick={() => setcounter(counter+1) } className="btn btn-primary" >Aumentar</button>
            <button onClick={() => setshow(!show) } className="btn btn-outline-primary" >
                {JSON.stringify(show)}
            </button>

        </div>
    );
};


export default Memorize;