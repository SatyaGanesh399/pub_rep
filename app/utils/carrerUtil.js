const path = require("path");

const careerFolder = path.join(__dirname, "../data/Career/");

const getCareerDataSheet = career =>
  require(`${careerFolder}/career_${career}.json`);

module.exports = {
  getCareerDataSheet
};
