const Careers = require("../models/Careers");

const findOneCareerHelper = (res, data, callback) => {
  Careers.findOne({ slug: data.slug }).then(career => {
    if (career != null) {
      callback(career);
    } else {
      res.status(401).send("Career not found");
    }
  });
};

const findCareerListHelper = (res, callback) => {
  Careers.find({}, { title: 1, slug: 1, careerCategory: 1, _id: 0 }).then(
    careerList => {
      if (careerList != null) {
        callback(careerList);
      } else {
        res.status(401).send("Career List not found");
      }
    }
  );
};

module.exports = {
  findOneCareerHelper,
  findCareerListHelper
};
