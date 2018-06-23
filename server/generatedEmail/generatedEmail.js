const nodemailer = require('nodemailer');
const emailTemplate = require('./emailTemplate')

module.exports = {
  emailSend:(req,res)=>{

    const capitalizedName = req.body.studentName.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');

    let questionText = []
    Object.keys(req.body).map(results => {
        if (results[0]=== 'Q') {
            return questionText.push(req.body[results]);
        }
    });

    const passed = "<span style='color:green'>PASSED</span>";
    const failed = "<span style='color:red'>DID NOT PASS</span>";

    let code = []
    Object.keys(questionText).map((results, i) => {
        return code.push(`<div key=${i}>
        Question ${i + 1}:
        ${questionText[results].passed ? passed : failed }
        <br/>
        <br/>
        Student Code:
        <br/>
        ${questionText[results].code}</div>`)
    })

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

      let mailOptions = {
          from: '"Code Bar" <wpr152018@gmail.com>',
          to: `${req.body.instructorEmail}`,
          subject: `Assessment results for ${capitalizedName}`,
          html: emailTemplate.emailAttempt(capitalizedName, code)
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          res.send({'message sent':true})
        });
    }
}