module.exports = {
  emailAttempt: (capitalizedName, code) => {
    return `<div style="margin: 0;padding: 0;-webkit-text-size-adjust: 100px; display: flex">
    <table class="wrapper" style="border-collapse: collapse;table-layout: fixed; width: 100%;background-color: #073857;"><tbody>
        <div>

          <div style="width: 600px; display: flex">
          <table align="center" class="header">
            <div class="logo emb-logo-margin-box" style="font-size: 30px;line-height: 32px;Margin-top: 12px;Margin-bottom: 35px;color: #c3ced9;font-family: Roboto,Tahoma,sans-serif;Margin-left: 0px;Margin-right: 0px;">
              <div class="logo-center" style="display:flex; justify-content:space-between; width: 100%"><img src="https://s3.us-east-2.amazonaws.com/b6utle5r/devMtnLogo.png" height="150" width="150"/>
              <h2 style="color: white;">Code Bar</h2></div>
            </div>
          </table>
          </div>
        </div>
        <div>
        <div class="layout one-col fixed-width" style="overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
          <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #073857;">
          <table align="center"><tr class="layout-fixed-width" style="background-color: #073857;">
            <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
              <div style="Margin-left: 20px;Margin-right: 20px;">
        <div style="mso-line-height-rule: exactly;mso-text-raise: 4px;">

          <p class="size-26" style="Margin-top: 0;Margin-bottom: 0;font-size: 20px;line-height: 31px;text-align: center;" lang="x-size-26"><span style="color:#fff">Below are the assessment results for ${capitalizedName}</span></p>
        </div>
      </div>

            </div>
          </tr></table>
          </div>
        </div>

        <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>

        <div style="background-color: #fff;">
          <div class="layout one-col" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
            <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
            <table width="100%"><tr class="layout-full-width" style="background-color: #fff;">
              <div class="column" style="text-align: left ;color: #000000;font-size: 14px;line-height: 21px;font-family: sans-serif;">

                <div style="Margin-left: 60px;Margin-right: 20px;">
        <div style="mso-line-height-rule: exactly;mso-text-raise: 4px;">
          <p style="Margin-top: 0;Margin-bottom: 0;">${code}</p>
        </div>
      </div>

            </div>
          </tr></table>
          </div>
        </div>
      </div>

        <div style="mso-line-height-rule: exactly;">
          <div class="layout email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
            <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
            <table align="center"><tr class="layout-email-footer">
            <td style="width: 200px;" valign="top">
              <div class="column narrow" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;">
                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">

                </div>
              </div>
            </td></tr></table>
            </div>
          </div>
          <div class="layout one-col email-footer" style="Margin: 0 auto;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
          <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
            <div class="column" style="text-align: center;font-size: 12px;line-height: 19px;color: #FFFFFF;font-family: sans-serif;">
              <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                <div style="font-size: 22px;line-height: 19px;">
                  <h5>Thank you for for using Code Bar</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="mso-line-height-rule: exactly;line-height: 20px">&nbsp;</div>
    </div></td></tr></tbody></table>
  </div>`
  }
}