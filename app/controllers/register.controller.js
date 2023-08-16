const { findEventAndPushHelper } = require("../helpers/eventsHelper");

const registerForEvent = (req, res, next) => {
  findEventAndPushHelper(
    res,
    { id: req.body.id },
    { registrations: req.body.data },
    () => {
      return res.status(200).send(true);
    }
  );
};

module.exports = {
  registerForEvent
};
