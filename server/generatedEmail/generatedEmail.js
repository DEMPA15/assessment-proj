// const devLogo = require('../../src/assets/dm-Logo-blue');

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

      //   const emailAttempt = `<div class="no-padding" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;">
      //   <table class="wrapper" style="border-collapse: collapse;table-layout: fixed;min-width: 320px;width: 100%;background-color: #073857;" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td>
      //       <div role="banner">
      //         <div class="preheader" style="Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 167440px);">
      //           <div style="border-collapse: collapse;display: table;width: 100%;">
      //           <table align="center" class="preheader" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="width: 280px" valign="top">
      //             <div class="snippet" style="display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 140px; width: 140px;width: calc(14000% - 78120px);padding: 10px 0 5px 0;color: #adb3b9;font-family: sans-serif;">

      //             </div>
      //           </td><td style="width: 280px" valign="top">
      //             <div class="webversion" style="display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 139px; width: 139px;width: calc(14100% - 78680px);padding: 10px 0 5px 0;text-align: right;color: #adb3b9;font-family: sans-serif;">
      //             </div>
      //           </td></tr></table>
      //           </div>
      //         </div>
      //         <div class="header" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);" id="emb-email-header-container">
      //         <table align="center" class="header" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="width: 600px">
      //           <div class="logo emb-logo-margin-box" style="font-size: 26px;line-height: 32px;Margin-top: 12px;Margin-bottom: 39px;color: #c3ced9;font-family: Roboto,Tahoma,sans-serif;Margin-left: 20px;Margin-right: 20px;" align="center">
      //             <div class="logo-center" align="center" id="emb-email-header"><img style="display: block;height: auto;width: 100%;border: 0;max-width: 150px;" src={} alt="" width="150" /></div>
      //           </div>
      //         </td></tr></table>
      //         </div>
      //       </div>
      //       <div role="section">
      //       <div class="layout one-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
      //         <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #073857;">
      //         <table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-fixed-width" style="background-color: #073857;"><td style="width: 600px" class="w560">
      //           <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);">

      //             <div style="Margin-left: 20px;Margin-right: 20px;">
      //       <div style="mso-line-height-rule: exactly;mso-text-raise: 4px;">
      //         <p class="size-26" style="Margin-top: 0;Margin-bottom: 0;font-size: 22px;line-height: 31px;text-align: center;" lang="x-size-26"><span style="color:#fff">This the test results for ${capitalizedName}</span></p>
      //       </div>
      //     </div>

      //           </div>
      //         </td></tr></table>
      //         </div>
      //       </div>

      //       <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>

      //       <div style="background-color: #fff;">
      //         <div class="layout one-col" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
      //           <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
      //           <table width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-full-width" style="background-color: #fff;"><td class="layout__edges">&nbsp;</td><td style="width: 600px" class="w560">
      //             <div class="column" style="max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">

      //               <div style="Margin-left: 20px;Margin-right: 20px;">
      //       <div style="mso-line-height-rule: exactly;mso-text-raise: 4px;">
      //         <p style="Margin-top: 0;Margin-bottom: 0;">${code}</p>
      //       </div>
      //     </div>

      //           </div>
      //         </td><td class="layout__edges">&nbsp;</td></tr></table>
      //         </div>
      //       </div>
      //     </div>

      //       <div style="mso-line-height-rule: exactly;">
      //         <div class="layout email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
      //           <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
      //           <table align="center" cellpadding="0" cellspacing="0" role="presentation"><tr class="layout-email-footer"><td style="width: 400px;" valign="top" class="w360">
      //             <div class="column wide" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 400px;min-width: 320px; width: 320px;width: calc(8000% - 47600px);">
      //               <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">

      //                 <div style="font-size: 12px;line-height: 19px;">

      //                 </div>
      //                 <div style="font-size: 12px;line-height: 19px;Margin-top: 18px;">

      //                 </div>
      //                 &nbsp;
      //               </div>
      //             </div>
      //           </td><td style="width: 200px;" valign="top">
      //             <div class="column narrow" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);">
      //               <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">

      //               </div>
      //             </div>
      //           </td></tr></table>
      //           </div>
      //         </div>
      //         <div class="layout one-col email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
      //         </div>
      //       </div>
      //       <div style="mso-line-height-rule: exactly;line-height: 40px;font-size: 40px;">&nbsp;</div>
      //     </div></td></tr></tbody></table>
      // </div>`

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
            html: output
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