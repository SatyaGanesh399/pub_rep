const Offers = require("../models/Offers");

const findOneOffersHelper = (res, data, callback) => {
  Offers.find({ title: data.promo }).then(offers => {
    if (offers != null) {
      callback(offers);
    } else {
      res.status(401).send("offer not found");
    }
  });
};

const findAllOffersHelper = (res, callback) => {
  Offers.find({}).then(events => {
    callback(events);
  });
};

const findOfferAndDeleteHelper = (res, data, callback) => {
  Offers.findOneAndDelete({ _id: data.id }).then(offers => {
    if (offers != null) {
      callback(offers);
    } else {
      res.status(401).send("Offer not found");
    }
  });
};

const findOneOfferAndUpdateHelper = (res, data, dataToBeUpdated, callback) => {
  Offers.findOneAndUpdate(
    { title: data.title },
    { $set: dataToBeUpdated }
  ).then(offers => {
    if (offers != null) {
      callback(offers);
    } else {
      res.status(401).send("Offer not found");
    }
  });
};

module.exports = {
  findOfferAndDeleteHelper,
  findAllOffersHelper,
  findOneOffersHelper,
  findOneOfferAndUpdateHelper
};
