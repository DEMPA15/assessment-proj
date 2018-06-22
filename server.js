const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const Assessments = require(`./server/dbModels.js`)
const mongoose = require('mongoose')
const fs = require('fs');
<<<<<<< HEAD
const util = require('util')
const testRunner = require('./server/mocha/finalRunner')
const writeFileAsync = util.promisify(fs.writeFile)
const path = require('path');

=======
const util = require('util');
const testRunner = require('./server/mocha/finalRunner');
const writeFileAsync = util.promisify(fs.writeFile);
>>>>>>> c6f7ff779dba2f58785e27d63ccafa06dbddb248

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(session({
    name: 'Assessment-proj',
    secret: process.env.SESSION_SECRET,
    cookie: {
        expires:  5 * 24 * 60 * 60 *1000,
    },
    saveUninitialized: false,
    rolling: true,
    resave: false,
}))

const generatedEmail = require('./server/generatedEmail/generatedEmail')

mongoose.connect(process.env.CONNECTION_STRING)
    .then((res)=>{
        console.log(`db connected`);
    })
    .catch(error=>{
        console.log(error)
    });

app.use(express.static(path.join(__dirname, 'build')));


//-----------endpoints----------//
app.post(`/api/link/:email/:assessmentID`, (req, res) => {
    // Request will come in with email and assessment id or name
    // We will create the link then return the link with the encrypted email and test id.
})

app.get(`/api/assessments`, (req, res) => {
    Assessments.find({}, (err, assessments)=>{
        const assessmentsArray = assessments.map((assessment, i) => {
           return {id: assessment.id, name: assessment.name};
        })
        res.send(assessmentsArray);
    })
})

app.get('/api/assessment-name/:assessmentID', (req, res)=>{
    Assessments.findOne({_id: req.params.assessmentID}, (err, assessment)=>{
        res.send(assessment.name);
    })
})

app.get(`/api/questions/:assessmentID`, (req, res) => {
    Assessments.findOne({_id: req.params.assessmentID}, (err, assessment)=>{
        res.send(assessment.questions);
    })
})

app.post(`/api/post-results`,  (req, res) => {
    const { data, assessmentID, qID } = req.body;
        Assessments.findOne({_id: assessmentID}, async (err, assessment)=>{
            let assessmentName = assessment.name
            const path = './test.js';

            await writeFileAsync(path, data)

            testRunner(path, assessmentName, qID)
            .then(result => {
                res.send(result);
            })
            .catch(err => {
                console.log(err)
            })
        })
});

app.post(`/api/submit`, generatedEmail.emailSend);

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`This server is listening on port ${port}`)
})