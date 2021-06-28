import { useState } from "react";

const useCounter = (initialState = 10) => {
    let [counter, setCounter] = useState(initialState);


    const increment = () => {
        setCounter(counter = counter + 1);
    }

    const dicrement = () => {
        setCounter(counter = counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        dicrement,
        reset
    }
}
 
export default useCounter;