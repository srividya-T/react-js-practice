const { createStore } = require("redux");

const reducerFu = (state={count:0},action) => {
    //Increment Count
    //Decrement Count
    switch(action.type){
        case 'INCREMENT':
        return {...state, count:state.count + 1}
        case 'DECREMENT':
        return {... state, count:state.count - 1}
    }
    return state
};
export const store = createStore(reducerFu);
