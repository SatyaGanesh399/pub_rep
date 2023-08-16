const HomeModalData = require("../models/HomeModalData");

const addHomeModalData = (req, res, next) => {
  const modalObj = new HomeModalData({
    guidanceType: req.body.guidanceType
  });

  modalObj
    .save()
    .then(() => {
      return res.status(200).send(true);
    })
    .catch(err => {
      return res.status(400).send(false);
    });
};

module.exports = { addHomeModalData };
