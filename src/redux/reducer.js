import { combineReducers } from 'redux';
import { GET_QUESTIONS, SET_RESULTS, GENERATE_LINK, ADD_ASSESSMENT } from './constraints'

// initial state used to initiate the popup
const userInfo = {
    name: null,
    email: null
};


//reducer functions
function user(state = userInfo, action ){
    return state
}

function assessmentInfo(state = {}, action){

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
        case `SET_RESULTS`:
            return [...state, ...action.payload];
        default:
            return state
    }
}

function link(state = {}, action){
    switch(action.type){
        case GENERATE_LINK:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

function assessments(state = [], action){
    switch(action.type){
        case ADD_ASSESSMENT:
            return [...state, ...action.payload]
        default:
            return state;
    }
}


//combine reducers to send to index.js
const reducer = combineReducers({user, questions, results, link});

export default reducer;