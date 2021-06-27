import { useState } from "react";

const useCounter = (initialState = 10) => {
    let [state, setState] = useState(initialState);


    const increment = (factor = 1) => {
        setState(state = state + factor);
    }

    const dicrement = (factor = 1) => {
        setState(state = state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    return {
        state,
        increment,
        dicrement,
        reset
    }
}
 
export default useCounter;