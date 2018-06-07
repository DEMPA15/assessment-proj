const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    qID: String,
    qText: String,
    tests: [String]
})

const AssessmentSchema = new Schema({  
    name: String,
    questions: [QuestionSchema]
});

const Assessments = mongoose.model('Assessments', AssessmentSchema);

module.exports = Assessments