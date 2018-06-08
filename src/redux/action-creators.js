import { SET_RESULTS, GET_QUESTIONS, SET_NAME, SET_EMAIL, ENTER_CODE, POST_RESULTS } from './constraints'
import services from './services'

export function getQuestions(assessmentID){
    return {
        type: GET_QUESTIONS,
        payload: services.getQuestions(assessmentID)
    }
}

export function setResults(payload){
    return {
        type: SET_RESULTS,
        payload: payload
    }
}

export function setName(payload){
    return {
        type: SET_NAME,
        payload: payload
    }
}

export function setEmail(payload){
    return {
        type: SET_EMAIL,
        payload: payload
    }
}

 export function enterCode(payload){
     return {
         type: ENTER_CODE,
         payload: payload
     }
 }

export function postResults(code, assessmentID, qID){
    return {
        type: POST_RESULTS,
        payload: services.postResults(code, assessmentID, qID)
    }
}