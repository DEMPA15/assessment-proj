const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const nodemailer = require('nodemailer');

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
    // get all questions from assessment id and format before sending back
})

app.post(`/api/post-results`, (req, res) => {
    // Will pull tests from Mongo DB
    // will create file from tests and code
    // will run child process and return results
    // will parse results and send back to client
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