const initialState = [
    {
        id: 1,
        todo: "Comprar pan",
        done: false,
    }
];


const todoReducer = (state = initialState, action) => {

/*     if (action?.type === "agregar") {
        return [
            ...state,
            action.payload
        ]
    }
 */
    return state;
}




let todos = todoReducer();

const newToto = [
    {
        id: 2,
        todo: "Comprar leche",
        done: false,
    }
];

const agregarTodoAction = {
    type: 'agregar',
    payload: newToto,
}

todos = todoReducer( todos, agregarTodoAction );


console.log(todos);