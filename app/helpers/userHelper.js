const User = require("../models/User");

const createUserHelper = (res, data, callback) => {
  new User({
    ...data
  })
    .save()
    .then(user => {
      callback(user);
    })
    .catch(err => {
      res.status(401).send({ message: err });
    });
};

const findUserHelper = (res, data, callback) => {
  User.findOne({ email: data.email }).then(user => {
    if (user != null) {
      callback(user);
    } else {
      res.status(401).send("No User exists");
    }
  });
};

const findUserCustomHelper = (res, data, callback) => {
  User.findOne(data)
    .select("+receiptid")
    .then(user => {
      if (user != null) {
        callback(user);
      } else {
        res.status(401).send("No User exists");
      }
    });
};

const findUserAndSendHelper = (res, data, callback) => {
  User.findOne({ email: data.email }).then(user => {
    callback(user);
  });
};

const updateUserHelper = (res, user, data, callback) => {
  return user.updateOne(data).then(() => callback());
};

const findUserAndUpdateHelper = (res, data, dataToBeUpdated, callback) => {
  User.findOneAndUpdate({ email: data.email }, { $set: dataToBeUpdated }).then(
    user => {
      if (user != null) {
        callback(user);
      } else {
        res.status(401).send("User not found");
      }
    }
  );
};

const findUserAndUpdateHelperByID = (res, data, dataToBeUpdated, callback) => {
  User.findOneAndUpdate({ _id: data.hash }, { $set: { dataToBeUpdated } }).then(
    user => {
      if (user != null) {
        callback(user);
      } else {
        res.status(401).send("User not found");
      }
    }
  );
};

const findUserAndUpdateMultipleHelper = (
  res,
  data,
  dataSet,
  dataAddToSet,
  callback
) => {
  User.findOneAndUpdate(
    { email: data.email },
    { $set: dataSet, $addToSet: dataAddToSet }
  ).then(user => {
    if (user != null) {
      callback(user);
    } else {
      res.status(401).send("User not found");
    }
  });
};

const findAllUserHelper = (res, callback) => {
  User.find({}).then(user => {
    if (user != null) {
      callback(user);
    } else {
      res.status(401).send("No User exists");
    }
  });
};

const findUserAndPullFromArrayHelper = (
  res,
  data,
  dataToBeUpdated,
  callback
) => {
  User.findOneAndUpdate({ email: data.email }, { $pull: dataToBeUpdated }).then(
    user => {
      if (user != null) {
        callback(user);
      } else {
        res.status(401).send("User not found");
      }
    }
  );
};

const findUserAndUpdateGuidedTour = (res, data, dataToBeUpdated, callback) => {
  User.findOneAndUpdate({ email: data.email }, { $set: dataToBeUpdated }).then(
    user => {
      if (user != null) {
        callback(user);
      } else {
        res.status(401).send("User not found");
      }
    }
  );
};

module.exports = {
  createUserHelper,
  findUserHelper,
  findUserCustomHelper,
  findUserAndSendHelper,
  updateUserHelper,
  findAllUserHelper,
  findUserAndUpdateHelper,
  findUserAndUpdateMultipleHelper,
  findUserAndPullFromArrayHelper,
  findUserAndUpdateHelperByID,
  findUserAndUpdateGuidedTour
};
