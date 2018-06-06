const nodemailer = require('nodemailer');

module.exports ={
  submit: (req,res)=>{
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
}