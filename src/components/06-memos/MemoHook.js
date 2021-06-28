import React, { useMemo, useState } from 'react';
import procesoPesado from '../../helpers/procesoPesado';


import '../02-useEffect/effects.css';

const MemoHook = () => {
    const [counter, setcounter] = useState(500);
    const [show, setshow] = useState(false);


    const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook <small>{counter}</small> </h1>
            <hr />

            <p>{ memoProcesado }</p>
 
            <button onClick={() => setcounter(counter+1) } className="btn btn-primary" >
                Aumentar
            </button>
            
            <button onClick={() => setshow(!show) } className="btn btn-outline-primary" >
                {JSON.stringify(show)}
            </button>

        </div>
    );
};


export default MemoHook;