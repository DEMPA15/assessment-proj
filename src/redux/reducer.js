import { combineReducers } from 'redux';
import { GET_QUESTIONS, SET_RESULTS, SET_EMAIL, SET_NAME, ENTER_CODE } from './constraints'

// initial state used to initiate the popup
const userInfo = {
    name: null,
    email: null
};


//reducer functions
function user(state = userInfo, action ){
    switch(action.type){
        case `${SET_NAME}`:
            return state.name = action.payload;
        case `${SET_EMAIL}`:
            return state.email = action.payload
        default:
            return state; 
    }
}

function questions(state = [], action ){
    switch(action.type){
        case `${GET_QUESTIONS}_PENDING`:
            return state;
        case `${GET_QUESTIONS}_FULFILLED`:
            return state = [...state, ...action.payload]
        case `${GET_QUESTIONS}_REJECTED`:
             return [`Questions not set`];
        default:
            return state;
    }
}

function results(state = [], action ){
    switch(action.type){
        case SET_RESULTS:
            return [...state, ...action.payload];
        default:
            return state
    }
}

function code(state={}, action){
    switch(action.type){
        case ENTER_CODE:
            return Object.assign({}, state, action.payload)
        default: 
            return state
    }
}


//combine reducers to send to index.js
const reducer = combineReducers({user, questions, results});

export default reducer;