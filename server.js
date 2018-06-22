const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const nodemailer = require('nodemailer');
const Assessments = require(`./server/dbModels.js`)
const mongoose = require('mongoose')
const fs = require('fs');
const util = require('util')
const testRunner = require('./server/mocha/finalRunner')
const writeFileAsync = util.promisify(fs.writeFile)
const path = require('path');


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

app.post(`/api/submit`, (req,res)=>{

const capitalizedName = req.body.studentName.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');

let questionText = []
Object.keys(req.body).map(results => {
    if (results[0]=== 'Q') {
        return questionText.push(req.body[results]);
    }
});

let code = []
Object.keys(questionText).map((results, i) => {
    return code.push(`<p key=${i}>
    Question ${i + 1}:
    ${questionText[results].passed ? 'PASSED' : 'DID NOT PASS'}
    <br/>
    <br/>
    Student Code:
    <br/>
    ${questionText[results].code}
    </p><br/>`)

})

    const output = `
    <h3>Below are the assessment results for ${capitalizedName}</h3>
    <p><b>${capitalizedName}'s code</b></p>
    <br/>
    <p>${code}</p>
    <br/>`

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'wpr152018@gmail.com',
            pass: 'wpr15-a-password'
        },
        tls:{
        rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Code Bar" <wpr152018@gmail.com>',
        to: `${req.body.instructorEmail}`,
        subject: `Assessment results for ${capitalizedName}`,
        text: 'Hello can you hear me?',
        html: output
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.send({'message sent':true})
    });
});

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`This server is listening on port ${port}`)
})