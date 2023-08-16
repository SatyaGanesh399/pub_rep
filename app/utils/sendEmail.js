const nodemailer = require("nodemailer");

async function SendMail(message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    },
    logger: true,
    debug: false // include SMTP traffic in the logs
  });

  return await transporter.sendMail(message);
}

module.exports = SendMail;
