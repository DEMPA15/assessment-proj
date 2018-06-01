import { combineReducers } from 'redux';


const userInfo = {
    name: null,
    email: null
};

function user(state = userInfo, action ){
    return state
}

function questions(state = [], action ){
    return state
}

function results(state = [], action ){
    return state
}

const reducer = combineReducers({user, questions, results});

export default reducer;