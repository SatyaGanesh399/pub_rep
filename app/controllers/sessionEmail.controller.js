const { SendEmail } = require("../utils");

const sessionEmailController = (req, res) => {
  const formData = req.body;
  let htmlContent = "";

  if (formData.sessionType === "online") {
    htmlContent = `Hello ${
      formData.name
    },<p>You have successfully booked your counselling session with Pro Garten. Details of your Session ${formData.id +
      1} are as followed.</p><div>Date: ${new Date(
      formData.sessionDate
    ).toDateString()}</div><div>Time: ${formData.sessionTime}</div><div>Mode: ${
      formData.sessionType
    }</div><div>Zoom Link: ${formData.sessionLink}</div><div>Zoom Password: ${
      formData.sessionLinkPassword
    }</div><p>Please join meeting using above link and make sure you have a stable internet connection.</p>`;
  } else {
    htmlContent = `Hello ${
      formData.name
    },<p>You have successfully booked your counselling session with Pro Garten. Details of your Session ${formData.id +
      1} are as followed.</p><div>Date: ${new Date(
      formData.sessionDate
    ).toDateString()}</div><div>Time: ${formData.sessionTime}</div><div>Mode: ${
      formData.sessionType
    }</div><div>Address: ${
      formData.sessionLocation
    }</div><p>Please reach the venue 5-10 minutes before your session time.</p>`;
  }

  const message = {
    from: '"Pro Garten" <' + process.env.MAIL_USERNAME + "", // sender address
    to: "", // list of receivers
    subject: "Session booking confirmed", // Subject line
    html: htmlContent // html body
  };

  req.query.maillist.forEach(to => {
    message.to = to;
    SendEmail(message)
      .then(response => {
        res.json(response);
      })
      .catch(err => res.json(err));
  });
};

module.exports = sessionEmailController;
