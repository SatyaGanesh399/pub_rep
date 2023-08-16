const Subscribers = require("../models/Subscribers");

const findAllSubscribersHelper = (res, callback) => {
  Subscribers.find({})
    .lean()
    .exec()
    .then(subscribers => {
      callback(subscribers);
    });
};

const findSubscriberHelper = (res, data, callback) => {
  Subscribers.findOne({ email: data.email }).then(subscriber => {
    callback(subscriber);
  });
};

module.exports = {
  findAllSubscribersHelper,
  findSubscriberHelper
};
