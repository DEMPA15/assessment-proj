import { combineReducers } from 'redux';

// initial state used to initiate the popup
const userInfo = {
    name: null,
    email: null
};


//reducer functions
function user(state = userInfo, action ){
    return state
}

function questions(state = [], action ){
    return state
}

function results(state = [], action ){
    return state
}


//combine reducers to send to index.js
const reducer = combineReducers({user, questions, results, code});

export default reducer;