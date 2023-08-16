const path = require("path")
const fs = require("fs")

const testFolder = path.join(__dirname, "../data/Tests/")

const getAllTests = () =>
  fs.readdirSync(testFolder).map((folder) => ({
    testName: folder,
  }))

const geTestDetailsFromTestName = (testName) =>
  require(`${testFolder}/${testName}/test.json`)

const geAnswersFromTestName = (testName) =>
  require(`${testFolder}/${testName}/answer-key.json`)

const getAllTestsQuestions = () =>
  getAllTests().map((test) => ({
    ...test,
    questions: require(`${testFolder}/${folder}/questions.json`),
  }))

const getEvaluationScores = () => require(`${testFolder}/evaluation-score.json`)

module.exports = {
  getAllTests,
  getAllTestsQuestions,
  geTestDetailsFromTestName,
  geAnswersFromTestName,
  getEvaluationScores,
}
