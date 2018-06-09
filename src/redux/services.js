import axios from 'axios';
import { debug } from 'util';

const services = {
    getQuestions: (assessmentID)=>{
        return axios.get(`/api/questions/${assessmentID}`)
            .then(questions=>{
                return questions.data
            })
    },

    postResults: (code, assessmentID, qID)=>{
        const beginModule = 'module.exports = ';
        const data = beginModule + code;
        debugger
        return axios.post('/api/post-results', { data, assessmentID, qID })
            .then(results=>{
                debugger
                return {
                    [results.data.qID]: {
                        passed: results.data.passed,
                        tests: results.data.tests
                    }
                }
            })
    },
}

export default services