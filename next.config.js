// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const path = require("path")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  distDir: process.env.NODE_ENV === "production" ? `build` : ".next",
  env: {
    IMAGES_PATH: "/assets/images",
    TEST_IMAGES_PATH: "/assets/test",
    AVATAR_PATH: `${process.env.FILE_STORAGE_PATH}/avatar`,
    REPORT_PATH: `${process.env.FILE_STORAGE_PATH}/report`,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    SESSION_LINK: process.env.SESSION_LINK,
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
    SESSION_COUNT: process.env.SESSION_COUNT,
    PAYMENT_PORTAL_KEY_ID: process.env.PAYMENT_PORTAL_KEY_ID,
    PAYMENT_PORTAL_KEY_SECRET: process.env.PAYMENT_PORTAL_KEY_SECRET,
    COUNSELLING_PACKAGE_PRICE1: process.env.COUNSELLING_PACKAGE_PRICE1,
    COUNSELLING_PACKAGE_PRICE2: process.env.COUNSELLING_PACKAGE_PRICE2,
    DECODE_PACKAGE_PRICE: process.env.DECODE_PACKAGE_PRICE,
    BASIC_PACKAGE_PRICE: process.env.BASIC_PACKAGE_PRICE,
    ADVANCED_PACKAGE_PRICE: process.env.ADVANCED_PACKAGE_PRICE,
    INTERMEDIATE_PACKAGE_PRICE: process.env.INTERMEDIATE_PACKAGE_PRICE,
    CHATBOT_TITLE: process.env.CHATBOT_TITLE,
    CHATBOT_AGENT_ID: process.env.CHATBOT_AGENT_ID,
    CHATBOT_LANG_CODE: process.env.CHATBOT_LANG_CODE,
    CHATBOT_INTENT: process.env.CHATBOT_INTENT,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
}
// const withSass = require("@zeit/next-sass")

// module.exports = withSass({
//   cssModules: true,
//   distDir: process.env.NODE_ENV === "production" ? `build` : ".next",
//   env: {
//     IMAGES_PATH: "/assets/images",
//     TEST_IMAGES_PATH: "/assets/test",
//     AVATAR_PATH: `${process.env.FILE_STORAGE_PATH}/avatar`,
//     REPORT_PATH: `${process.env.FILE_STORAGE_PATH}/report`,
//     ADMIN_USERNAME: process.env.ADMIN_USERNAME,
//     ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
//     SESSION_LINK: process.env.SESSION_LINK,
//     SESSION_PASSWORD: process.env.SESSION_PASSWORD,
//     SESSION_COUNT: process.env.SESSION_COUNT,
//     PAYMENT_PORTAL_KEY_ID: process.env.PAYMENT_PORTAL_KEY_ID,
//     PAYMENT_PORTAL_KEY_SECRET: process.env.PAYMENT_PORTAL_KEY_SECRET,
//     COUNSELLING_PACKAGE_PRICE1: process.env.COUNSELLING_PACKAGE_PRICE1,
//     COUNSELLING_PACKAGE_PRICE2: process.env.COUNSELLING_PACKAGE_PRICE2,
//     BASIC_PACKAGE_PRICE: process.env.BASIC_PACKAGE_PRICE,
//     ADVANCED_PACKAGE_PRICE: process.env.ADVANCED_PACKAGE_PRICE,
//     INTERMEDIATE_PACKAGE_PRICE: process.env.INTERMEDIATE_PACKAGE_PRICE,
//     CHATBOT_TITLE: process.env.CHATBOT_TITLE,
//     CHATBOT_AGENT_ID: process.env.CHATBOT_AGENT_ID,
//     CHATBOT_LANG_CODE: process.env.CHATBOT_LANG_CODE,
//     CHATBOT_INTENT: process.env.CHATBOT_INTENT,
//     GA_TRACKING_ID: process.env.GA_TRACKING_ID,
//   },
// })
