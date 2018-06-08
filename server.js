const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const nodemailer = require('nodemailer');
const Assessments = require('./server/dbModels')
const mongoose = require('mongoose')
const fs = require('fs');
const util = require('util')
const testRunner = require('./server/mocha/finalRunner')
const writeFileAsync = util.promisify(fs.writeFile)

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
    });

//-----------endpoints----------//
app.post(`/api/link/:email/:assessmentID`, (req, res) => {
    // Request will come in with email and assessment id or name
    // We will create the link then return the link with the encrypted email and test id.
})

app.get(`/api/assessments`, (req, res) => {
    // Request will pull all Assesments' name and id's from Mongo DB
    // Will return array of objects -- names and id's.
    Assessments.find({}, (err, assessments)=>{
        const assessmentsArray = assessments.map((assessment, i) => {
           return {id: assessment.id, name: assessment.name};
        })
        res.send(assessmentsArray);
    })
})

app.get(`/api/questions/:assessmentID`, (req, res) => {
    // get all questions from assessment id or name 
    // format before sending back
    // {
    //     qID: 'Q1',
    //     qText: '',
    //     testText: []
    // }, 
    Assessments.findOne({_id: req.params.assessmentID}, (err, assessment)=>{
        console.log(assessment)
        res.send(assessment.questions);
    })
})

  
app.post(`/api/post-results`, async (req, res) => {
    const { data, assessmentName, qID } = req.body;
    const path = './test.js';
  
    await writeFileAsync(path, data)
  
    testRunner(path, assessmentName, qID)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err)
      })

    // needs to receive assessmentName, qID, and code 
    // Will pull tests from file
    // will create file from code 
    // will build test suite, run code and return results
    // will send results back to client
})

app.post(`/api/submit`, (req,res)=>{

    // Will receive result data
    // Will draft and send out email
    // Will return success or fail

    const output = `
    <p>Does this email work?</p>
    <h3>Contact Info</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>email: ${req.body.email}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
    `;

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
      from: '"Group Project" <wpr152018@gmail.com>',
      to: 'ryan90butler@gmail.com',
      subject: `Assessment results for ${req.body.name}`,
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
    }
);

const port = process.env.PORT || 3010
app.listen(port, ()=>{
    console.log(`This server is listening on port ${port}`)
})