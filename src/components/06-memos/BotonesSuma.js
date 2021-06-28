import React from 'react';

const BotonesSuma = React.memo(({onclick, n}) => {
    console.log("Me dibujé...");
    
    return (
        <button onClick={ () => onclick(n)} className="btn btn-primary ms-2">
            {n}
        </button>
    );
});


export default BotonesSuma;