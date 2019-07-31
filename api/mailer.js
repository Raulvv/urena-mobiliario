import nodemailer from 'nodemailer';

export default class Mailer {
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

  async sendEmail(mail) {
    console.log("Starting email ...");
    return new Promise((resolve, reject) => {
      this.transporter.verify((error, success) => {
        if (error) {
          throw error;
        }

        console.log("VERIFIED!!");

        this.transporter.sendMail(mail, (err, data) => {
          if (err) {
            console.log({ msg: 'fail' });
            reject({ msg: 'fail' });
          }

          console.log({ msg: 'success' });

          resolve({ msg: 'success' });
        })
      });
    });
  }
}
