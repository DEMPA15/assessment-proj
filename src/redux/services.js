//This file will contain our axios calls that go through redux

import axios from 'axios';

const services = {
    getQuestions: (assessmentID)=>{
        return axios.get(`/api/questions/${assessmentID}`)
            .then(questions=>{
                return questions.data
            })
    }
}

//--------Get Questions
// These should be organized on the back end before coming to the front and being set to redux

//format

// [
//     {
//         qID: 'Q1',
//         qText: '',
//         testText: []
//     }, 
// ]


//-------- Post results
//sends code from redux ---stringify--- to backend to be tested and posts results to redux
// The results should be formatted on the backend before coming to the front. 

//------ this needs to be in the endpoint that runs the code 
// const beginModule = 'module.exports = ';

// const data = beginModule + users code from redux;

// axios.post('/api/post-results', { data, assessmentName: 'object', qID:1 })
//   .then(({ data }) => console.log(data))
//   .catch(console.error)

//format

// [
//     {
//         qID: '',
//         passed: false, 
//         tests: [
//             {
//                 text: '',
//                 passed: true
//             }
//         ]
//     } 
// ]

export default services