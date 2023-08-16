require("dotenv").config();
const Events = require("../models/Events");
const Offers = require("../models/Offers");
const {
  adminAuthenticationHelper
} = require("../helpers/authenticationHelper");
const {
  findAllUserHelper,
  findUserAndUpdateHelper,
  findUserAndPullFromArrayHelper
} = require("../helpers/userHelper");
const { findAllSubscribersHelper } = require("../helpers/subscribeHelper");
const {
  findAllEventsHelper,
  findEventAndUpdate,
  findEventAndDeleteHelper,
  findAllEventsParticipantsHelper
} = require("../helpers/eventsHelper");
const {
  findOfferAndDeleteHelper,
  findAllOffersHelper,
  findOneOffersHelper,
  findOneOfferAndUpdateHelper
} = require("../helpers/offersHelper");

const getAllUsers = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findAllUserHelper(res, users => {
      return res.status(200).send(users);
    });
  });
};

const updateUserPackage = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findUserAndUpdateHelper(res, { email: req.body.email }, req.body, () => {
      return res
        .status(200)
        .send({ message: "User package updated successfully" });
    });
  });
};

const removeUserJourney = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findUserAndPullFromArrayHelper(
      res,
      { email: req.body.email },
      { journey: req.body.journey },
      () => {
        return res
          .status(200)
          .send({ message: "Journey removed successfully" });
      }
    );
  });
};

const getAllSubscribers = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findAllSubscribersHelper(res, subscribers => {
      return res.status(200).send(subscribers);
    });
  });
};

const addEvent = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    const eventObj = new Events(req.body);
    eventObj
      .save()
      .then(() => {
        return res.status(200).send(true);
      })
      .catch(err => {
        return res.status(400).send(false);
      });
  });
};

const addOffer = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    const offerObj = new Offers(req.body);
    offerObj
      .save()
      .then(() => {
        return res.status(200).send(true);
      })
      .catch(err => {
        return res.status(400).send(false);
      });
  });
};

const getEvents = (req, res, next) => {
  findAllEventsHelper(res, events => {
    return res.status(200).send(events);
  });
};

const getOffer = (req, res, next) => {
  findOneOffersHelper(res, req.query, offers => {
    return res.status(200).send(offers);
  });
};

const getEventsRegistrations = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findAllEventsParticipantsHelper(res, events => {
      return res.status(200).send(events);
    });
  });
};

const getAllOffers = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findAllOffersHelper(res, events => {
      return res.status(200).send(events);
    });
  });
};

const updateEventStatus = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findEventAndUpdate(
      res,
      { id: req.body.id },
      { status: req.body.status },
      () => {
        return res.status(200).send(true);
      }
    );
  });
};

const updateOfferCount = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    let count = req.body.count;
    if (count !== 0) {
      count--;
    }
    findOneOfferAndUpdateHelper(
      res,
      { title: req.body.promoCodeTitle },
      { count: count },
      () => {
        return res.status(200).send(true);
      }
    );
  });
};

const deleteEvent = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findEventAndDeleteHelper(res, { id: req.params.id }, () => {
      return res.status(200).send(true);
    });
  });
};

const deleteOffer = (req, res, next) => {
  adminAuthenticationHelper(req, res, next, () => {
    findOfferAndDeleteHelper(res, { id: req.params.id }, () => {
      return res.status(200).send(true);
    });
  });
};

module.exports = {
  getAllUsers,
  removeUserJourney,
  updateUserPackage,
  getAllSubscribers,
  addEvent,
  getEvents,
  deleteEvent,
  getEventsRegistrations,
  updateEventStatus,
  getAllOffers,
  addOffer,
  getOffer,
  deleteOffer,
  updateOfferCount
};
