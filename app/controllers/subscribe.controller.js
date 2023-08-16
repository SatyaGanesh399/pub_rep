const Subscribers = require("../models/Subscribers");
const { findSubscriberHelper } = require("../helpers/subscribeHelper");

const subscribe = (req, res, next) => {
  findSubscriberHelper(res, { email: req.body.email }, subscriber => {
    if (subscriber !== null) {
      return res.status(200).send(true);
    } else {
      const subcriberObj = new Subscribers({
        email: req.body.email
      });
      subcriberObj
        .save()
        .then(() => {
          return res.status(200).send(true);
        })
        .catch(err => {
          return res.status(400).send(false);
        });
    }
  });
};

module.exports = { subscribe };
