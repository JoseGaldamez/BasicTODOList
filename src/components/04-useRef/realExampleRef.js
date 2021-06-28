import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import './useref.css';

const RealExampleRef = () => {


    const [show, setshow] = useState(false);
    


    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button onClick={()=>setshow(!show)} className="btn btn-primary mt-10">Show/Hide</button>

        </div>
    );
};



export default RealExampleRef;