import axios from 'axios';

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
        return axios.post('/api/post-results', { data, assessmentID, qID })
            .then(results=>{
                return {
                    [results.data.qID]: {
                        passed: results.data.passed,
                        tests: results.data.tests
                    }
                }
            })
            .catch(err => {
                console.error(err);
            })
    },
}

export default services