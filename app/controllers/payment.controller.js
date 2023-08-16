const razorpay = require("razorpay")
const shortid = require("shortid")
const crypto = require("crypto")
const {
  findUserAndUpdateHelper,
  findUserCustomHelper,
  updateUserHelper,
} = require("../helpers/userHelper")

const payPortalObj = new razorpay({
  key_id: process.env.PAYMENT_PORTAL_KEY_ID,
  key_secret: process.env.PAYMENT_PORTAL_KEY_SECRET,
})

const ADVANCED_PACKAGE_PRICE = 4999
const setPaymentOrder = async (req, res, next) => {
  let amount = 0
  let receiptId = ""
  if (req.query.packageType === "COUNSELLING1") {
    amount = req.body.packageAmount
    receiptId = `counselling1_${shortid.generate()}`
  } else if (req.query.packageType === "COUNSELLING2") {
    amount = req.body.packageAmount
    receiptId = `counselling2_${shortid.generate()}`
  } else if (req.query.packageType === "BASIC") {
    amount = req.body.packageAmount
    receiptId = `basic_${shortid.generate()}`
  } else if (req.query.packageType === "INTERMEDIATE") {
    amount = req.body.packageAmount
    receiptId = `intermediate_${shortid.generate()}`
  } else if (req.query.packageType === "ADVANCED") {
    amount = req.body.packageAmount
    receiptId = `advanced_${shortid.generate()}`
  } else {
    amount = ADVANCED_PACKAGE_PRICE
    receiptId = `basic_${shortid.generate()}`
  }

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: receiptId,
    payment_capture: 1,
  }

  try {
    const response = await payPortalObj.orders.create(options)
    findUserAndUpdateHelper(
      res,
      req.body,
      {
        promocode: req.body.promoCodeTitle,
      },
      () =>
        console.log(
          `user with email : ${req.body.email}, promo code is updated : ${req.body.promoCodeTitle}`
        )
    )
    res.status(200).send({
      id: response.id,
      amount: response.amount,
      currency: response.currency,
      receipt: response.receipt,
    })
  } catch (error) {
    return res.status(400).json({ errors: error })
  }
}

const verifyPayment = (req, res, next) => {
  const shasum = crypto.createHmac("sha256", process.env.PAYMENT_VERIFY_SECRET)
  shasum.update(JSON.stringify(req.body))
  const digest = shasum.digest("hex")
  if (digest === req.headers["x-razorpay-signature"]) {
    findUserCustomHelper(
      res,
      { orderid: req.body.payload.payment.entity.order_id },
      (user) => {
        updateUserHelper(
          res,
          user,
          {
            package: user.receiptid.split("_")[0],
          },
          () =>
            console.log(
              `Payment Processed for ${user.email} with order ID: ${req.body.payload.payment.entity.order_id}`
            )
        )
      }
    )
  }
  res.status(200).send()
}

const paymentInitiate = (req, res, next) => {
  findUserAndUpdateHelper(res, { email: req.body.email }, req.body, () => {
    return res.status(200).send({ message: "User data updated successfully" })
  })
}

module.exports = {
  setPaymentOrder,
  verifyPayment,
  paymentInitiate,
}
