import { SET_RESULTS } from './constraints'


// holds the functions that create our actions used to change state in the reducer



//-------get questions



// --------set results

//the payload here needs to contain the results shell with all passed keys set to false. We will need to know
//the state.questions.length AND each state.questions[i].tests.length before we can create this payload. 
// we can probably create the shell on the front end

export function setResults(payload){
    return {
        type: SET_RESULTS,
        payload: payload
    }
}


// shell format
[
    {
        qID: '',
        passed: false, 
        tests: [
            {
                text: '',
                passed: true
            }
        ]
    }, 
]


//------set user Info


//-----enter code

//-------post results