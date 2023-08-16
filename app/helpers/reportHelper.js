const Report = require("../models/Report")

const getUserReportHelper = (res, data, callback) => {
  Report.findOne({ _id: data.id }).then((report) => {
    if (report != null) {
      callback(report)
    } else {
      res.status(401).send("Report not found")
    }
  })
}

module.exports = {
  getUserReportHelper,
}
