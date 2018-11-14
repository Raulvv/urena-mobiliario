const express = require('express');
const path = require('path');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const Mailer = require("./mailer");
const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.post("/api/send_email", function(req, res) {
  const name = req.body.name
  const company = req.body.company
  const phone = req.body.phone
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} \n company: ${company} \n phone: ${phone} `

  var mail = {
    from: name,
    to: 'raul.vega.dv@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  new Mailer().sendEmail(mail);
});

// All remaining requests return the React app, so it can handle routing.
app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
