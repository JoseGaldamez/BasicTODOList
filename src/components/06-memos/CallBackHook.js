import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import BotonesSuma from './BotonesSuma';


const CallBackHook = () => {

    const [counter, setcounter] = useState(10);

    
    const handleIncrement = useCallback(
        (n) => {
            setcounter( v => v + n);
        },
        [setcounter],
    );


    return (
        <div>
            <h1>UseCallback Hook {counter} </h1>
            <hr />
            <BotonesSuma onclick = {handleIncrement} n={1} />
            <BotonesSuma onclick = {handleIncrement} n={2} />
            <BotonesSuma onclick = {handleIncrement} n={4} />
            <BotonesSuma onclick = {handleIncrement} n={5} />
            <BotonesSuma onclick = {handleIncrement} n={10} />
        </div>
    );
};

CallBackHook.propTypes = {};

export default CallBackHook;