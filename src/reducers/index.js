// import { combineReducers } from 'redux';
// import pizzaReducer from './pizzaReducer';

// export default combineReducers({
//     pizzaReducer
// });

const pizzaReducer = (state = {
    pizzas: []
}, action) => {
    switch(action.type){
        case "SAVE_PIZZAS":
            const newState = {
                pizzas: action.payload
            }
            return newState;
        case "EDIT_PIZZA":
            console.log(action);
            return state;
        default:
            return state;
    }
}

export default pizzaReducer;