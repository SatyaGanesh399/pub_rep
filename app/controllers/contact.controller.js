const ContactQuery = require("../models/ContactQuery");

const addContactQuery = (req, res, next) => {
  const contactObj = new ContactQuery({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
    guidanceType: req.body.guidanceType
  });

  contactObj
    .save()
    .then(() => {
      return res.status(200).send(true);
    })
    .catch(err => {
      return res.status(400).send(false);
    });
};

module.exports = { addContactQuery };
