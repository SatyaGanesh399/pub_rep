const { getUserReportHelper } = require("../helpers/reportHelper");

const getUserReport = (req, res, next) => {
  getUserReportHelper(res, { id: req.params.id }, report => {
    res.status(200).send(report);
  });
};

module.exports = {
  getUserReport
};
