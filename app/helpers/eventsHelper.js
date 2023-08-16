const Events = require("../models/Events");

const findAllEventsHelper = (res, callback) => {
  Events.find({}).then(events => {
    callback(events);
  });
};

const findAllEventsParticipantsHelper = (res, callback) => {
  Events.find({})
    .select("+registrations")
    .then(events => {
      callback(events);
    });
};

const findEventAndUpdate = (res, data, dataToBeUpdated, callback) => {
  Events.findOneAndUpdate({ _id: data.id }, { $set: dataToBeUpdated }).then(
    event => {
      if (event != null) {
        callback(event);
      } else {
        res.status(401).send("Event not found");
      }
    }
  );
};

const findEventAndDeleteHelper = (res, data, callback) => {
  Events.findOneAndDelete({ _id: data.id }).then(event => {
    if (event != null) {
      callback(event);
    } else {
      res.status(401).send("Event not found");
    }
  });
};

const findEventAndPushHelper = (res, data, dataToBeUpdated, callback) => {
  Events.findOneAndUpdate({ _id: data.id }, { $push: dataToBeUpdated }).then(
    event => {
      if (event != null) {
        callback(event);
      } else {
        res.status(401).send("Event not found");
      }
    }
  );
};

module.exports = {
  findAllEventsHelper,
  findEventAndUpdate,
  findEventAndPushHelper,
  findEventAndDeleteHelper,
  findAllEventsParticipantsHelper
};
