const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')

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

//-----------endpoints----------//
app.post(`/api/link/:email/:assessmentID`, (req, res) => {
    // Request will come in with email and assessment id
    // We will create the link then return the link with the encrypted email and test id.
})
  
app.get(`/api/assessments`, (req, res) => {
    // Request will pull all Assesments' name and id's from Mongo DB
    // Will return array of objects -- names and id's.
})

app.get(`/api/questions/:assessmentID`, (req, res) => {
    // get all questions from assessment id 
    // format before sending back

    // {
    //     qID: 'Q1',
    //     qText: '',
    //     testText: []
    // }, 
})
  
app.post(`/api/post-results`, (req, res) => {
    // needs to receive assessmentName, qID, and code 
    // Will pull tests from file
    // will create file from code 
    // will build test suite, run code and return results
    // will send results back to client
})
  
app.post(`/api/submit`, (req,res) => {
    // Will receive result data
    // Will draft and send out email
    // Will return success or fail
})


const port = process.env.PORT || 3010
app.listen(port, ()=>{
    console.log(`This server is listening on port ${port}`)
})