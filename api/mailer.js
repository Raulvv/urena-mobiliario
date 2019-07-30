const nodemailer = require('nodemailer');

module.exports = function () {
  return new Mailer();
}

class Mailer {
  constructor() {
    const creds = {
      USER: 'raul.vega.dv@gmail.com',
      PASS: 'gudvhlqnlrexajoi'
    };

    const transport = {
      host: 'smtp.gmail.com',
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    };

    this.transporter = nodemailer.createTransport(transport);
  }

  sendEmail(mail) {
    this.transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      }

      this.transporter.sendMail(mail, (err, data) => {
        console.log('sending...');
        if (err) {
          res.json({
            msg: 'fail'
          })
        }

        res.json({
          msg: 'success'
        });
      })
      console.log('Server is ready to take messages');
    });
  }
}
