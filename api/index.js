const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailerController = require('./mailer');
console.log("Mailer", mailerController);

const app = express();
const mailer = mailerController();

app.use(bodyParser.json());

app.post('/api/mailer', function(req, res) {
  console.log("INSIDE");
  const name = req.body.name
  const company = req.body.company
  const phone = req.body.phone
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} \n company: ${company} \n phone: ${phone} `
  console.log("After getting variables", content);

  var mail = {
    from: name,
    to: 'raul.vega.dv@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
  console.log("After setting mail", mail);

  mailer.sendEmail(mail);
  console.log("GETTING OUT");
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on PORT', process.env.PORT || 3000);
});
