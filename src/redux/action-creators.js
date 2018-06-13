import { SET_RESULTS, GET_QUESTIONS, SET_NAME, SET_EMAIL, ENTER_CODE, POST_RESULTS, SET_CODE, GENERATE_LINK, ADD_ASSESSMENT, REMOVE_ASSESSMENT, REMOVE_ALL_ASSESSMENTS } from './constraints'
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

export function setCode(payload){
    return {
        type: SET_CODE,
        payload: payload
    }
}

export function setName(name){
    return {
        type: SET_NAME,
        payload: { name }
    }
}

export function setEmail(email){
    return {
        type: SET_EMAIL,
        payload: { email }
    }
}

 export function enterCode(payload){
     return {
         type: ENTER_CODE,
         payload: payload
     }
 }

//-------post results


//------generate link

export function link(obj){
    return {
        type: GENERATE_LINK,
        payload: obj
    }
}
export function addAssessment(obj){
    return {
        type: ADD_ASSESSMENT,
        payload: obj
    }
}
export function removeAssessment(assessment) {
    return {
        type: REMOVE_ASSESSMENT,
        payload: assessment
    }
}
export function removeAllAssessments() {
    return {
        type: REMOVE_ALL_ASSESSMENTS,
        payload: '',
    }
}
export function postResults(code, assessmentID, qID){
    return {
        type: POST_RESULTS,
        payload: services.postResults(code, assessmentID, qID)
    }
}
