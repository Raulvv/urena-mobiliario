import Mailer from './mailer';

const mailer = new Mailer();

module.exports = async function(req, res) {
  console.log({ req: req.body });
  const name = req.body.name;
  const company = req.body.company;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  const content = `
  name: ${name}\n
  email: ${email}\n
  company: ${company}\n
  phone: ${phone}\n
  message: ${message}
  `;

  var mail = {
    from: name,
    to: 'umobiliario@umobiliario.com',
    subject: `Contact from ${name}`,
    text: content
  };

  const response = await mailer.sendEmail(mail);

  return res.json(response);
}
