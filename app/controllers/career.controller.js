const {
  findOneCareerHelper,
  findCareerListHelper
} = require("../helpers/careerHelper");

const getCareerData = (req, res, next) => {
  findOneCareerHelper(res, { slug: req.params.career }, career => {
    return res.status(200).send(career);
  });
};

const getCareerList = (req, res, next) => {
  findCareerListHelper(res, careerList => {
    res.status(200).send(careerList);
  });
};

module.exports = { getCareerData, getCareerList };
