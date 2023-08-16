const { SendEmail } = require("../utils");
const sendEmailController = (req, res) => {
  const formData = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
    guidanceType: req.body.guidanceType
  };
  const enquiredEmail = req.body.enquiredEmailFlag;

  formDataHtml = "";
  Object.keys(formData).map((key, index) => {
    formDataHtml += `<strong>${key.toUpperCase()}</strong>:  ${
      formData[key]
    }<br>`;
  });

  const mail = enquiredEmail ? process.env.ENQUIRY_MAIL_1 : process.env.MAIL_TO;

  const message = {
    from: '"Admin" <' + process.env.MAIL_USERNAME + "", // sender address
    to: mail, // list of receivers
    subject: "New Contact Enquiry", // Subject line
    html: `<b>Hello Admin,</b><p>A new contact enquiry at website</p>${formDataHtml}` // html body
  };

  if (enquiredEmail) {
    message.cc = process.env.ENQUIRY_MAIL_2;
  }

  SendEmail(message)
    .then(response => {
      res.json(response);
    })
    .catch(err => res.json(err));
};

module.exports = sendEmailController;
