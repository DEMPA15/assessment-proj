import { combineReducers } from 'redux';
import { GET_QUESTIONS, SET_RESULTS, SET_EMAIL, SET_NAME, ENTER_CODE, POST_RESULTS, GENERATE_LINK, ADD_ASSESSMENT} from './constraints'


const userInfo = {
    name: null,
    email: null
};

function user(state = userInfo, action ){
    switch(action.type){
        case SET_NAME:
            return Object.assign({}, state, action.payload)
        case SET_EMAIL:
            return Object.assign({}, state, action.payload)
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

function results(state = {}, action ){
    switch(action.type){
        case SET_RESULTS:
            return Object.assign({}, state, action.payload)
        case `${POST_RESULTS}_PENDING`:
            return state;
        case `${POST_RESULTS}_FULFILLED`:
            return Object.assign({}, state, action.payload)
        case `${POST_RESULTS}_REJECTED`:
             return state
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
function code(state={}, action){
    switch(action.type){
        case ENTER_CODE:
            return Object.assign({}, state, action.payload)
        default: 
            return state
    }
}

const reducer = combineReducers({user, questions, results, code, link, assessments});

export default reducer;