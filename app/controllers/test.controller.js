const { testUtil } = require("../utils/index.js")
const {
  findUserAndUpdateMultipleHelper,
  findUserHelper,
  updateUserHelper,
} = require("../helpers/userHelper.js")
const {
  authenticationHelper,
  adminAuthenticationHelper,
} = require("../helpers/authenticationHelper.js")
const { getUserTestResults } = require("../helpers/reportHelper.js")

const fetchResultScore = (answerObj, response) => {
  if (answerObj.one && answerObj.one.includes(response)) {
    return 1
  } else if (answerObj.two && answerObj.two.includes(response)) {
    return 2
  } else if (answerObj.three && answerObj.three.includes(response)) {
    return 3
  } else if (answerObj.four && answerObj.four.includes(response)) {
    return 4
  } else if (answerObj.five && answerObj.five.includes(response)) {
    return 5
  } else {
    return 0
  }
}

const calculateTestResult = (testResponses, type) => {
  const testAnswers = testUtil.geAnswersFromTestName(type)
  let resultScore = 0
  const answerTypes = {}
  if (type == "INTEREST") {
    testAnswers.map((answerContainer) => {
      answerTypes[answerContainer.type] = 0
    })
    // alpha scores to save subject which crossed 10 points
    let alphaScores = []
    testResponses.map((response) => {
      let QuestionNum = response.Q
      let UserAnswer = response.R
      for (let i = 0; i < testAnswers.length; i++) {
        let answerContainer = testAnswers[i].answersKey
        for (let j = 0; j < answerContainer.length; j++) {
          if (answerContainer[j].id == QuestionNum) {
            if (UserAnswer == 0) {
              answerTypes[testAnswers[i].type] += 1
              if (answerTypes[testAnswers[i].type] == 10) {
                alphaScores.push(testAnswers[i].type)
              }
            }
          }
        }
      }
    })

    // save super fileds in array
    let superFields = []
    if (alphaScores.length > 3) {
      let superScoring = testUtil.geAnswersFromTestName(
        "SUPER_SPECIALIZATION_SCORE"
      )
      for (let p = 0; p < superScoring.length; p++) {
        let alphaSubject = superScoring[p]
        for (let q = 0; q < alphaScores.length; q++) {
          if (alphaSubject.type == alphaScores[q]) {
            superFields.push(alphaSubject)
          }
        }
      }
    }

    let finalSubject = []
    if (superFields.length > 0) {
      for (let k = 0; k < superFields.length; k++) {
        let superSubject = superFields[k].type
        let superSubFields = superFields[k].answersKey
        for (let l = 0; l < superSubFields.length; l++) {
          let subFielddata = superSubFields[l]
          finalSubject.push({
            mainSub: superSubject,
            superSub: subFielddata.subfield,
            superSubQuestions: subFielddata.answers,
          })
        }
      }
    }
    let finalScoresWithSubFields = []
    if (finalSubject.length > 0) {
      for (let a = 0; a < finalSubject.length; a++) {
        let eachSub = finalSubject[a]
        let questionsNumbers = eachSub.superSubQuestions
        let totalQuestions = questionsNumbers.length
        let correctAnswers = 0
        for (let b = 0; b < questionsNumbers.length; b++) {
          let questionNumber = questionsNumbers[b]
          testResponses.map((response) => {
            let responseQue = response.Q
            let responseAns = response.R
            if (questionNumber == responseQue && responseAns == 0) {
              correctAnswers += 1
            }
          })
        }
        let totalCount = (correctAnswers / totalQuestions) * 10
        finalScoresWithSubFields.push({
          mainSub: eachSub.mainSub,
          superSubs: eachSub.superSub,
          superSubScore: totalCount,
        })
      }
      const compareScores = (a, b) => {
        if (a.superSubScore < b.superSubScore) {
          return 1
        } else if (a.superSubScore > b.superSubScore) {
          return -1
        } else {
          return 0
        }
      }
      let displayScores = {}
      finalScoresWithSubFields.sort(compareScores)

      let topScores = {}
      let existingFields = []
      let items = {}
      for (let i = 0; i < finalScoresWithSubFields.length; i++) {
        let mainSubject = finalScoresWithSubFields[i].mainSub

        if (existingFields.indexOf(mainSubject) !== -1) {
          if (items[mainSubject] <= 2) {
            if (!displayScores[mainSubject]) {
              displayScores[mainSubject] = [] // Initialize as an array if it doesn't exist
            }
            displayScores[mainSubject].push({
              sub: finalScoresWithSubFields[i].superSubs,
              score: finalScoresWithSubFields[i].superSubScore,
            })
            items[mainSubject] = (items[mainSubject] || 0) + 1
            topScores[mainSubject] = finalScoresWithSubFields[i].superSubScore
          } else {
            if (
              topScores[mainSubject] ==
              finalScoresWithSubFields[i].superSubScore
            ) {
              displayScores[mainSubject].push({
                sub: finalScoresWithSubFields[i].superSubs,
                score: finalScoresWithSubFields[i].superSubScore,
              })
              items[mainSubject] = (items[mainSubject] || 0) + 1
              topScores[mainSubject] = finalScoresWithSubFields[i].superSubScore
            }
          }
        } else {
          existingFields.push(mainSubject)
          topScores[mainSubject] = finalScoresWithSubFields[i].superSubScore
          items[mainSubject] = 1
        }
      }

      answerTypes["SuperSpecialization"] = displayScores
    }
    return answerTypes
  }

  if (testAnswers.length === 1) {
    testResponses.map((response) => {
      const answerObj = testAnswers[0].answersKey[response.Q - 1]
      resultScore += parseInt(fetchResultScore(answerObj, response.R))
    })
  } else {
    const answerTypes = {}
    testAnswers.map((answerContainer) => {
      answerTypes[answerContainer.type] = 0
    })
    testResponses.map((response) => {
      const questionNumber = response.Q
      for (let i = 0; i < testAnswers.length; i++) {
        let answerContainer = testAnswers[i]
        let answerKey = answerContainer.answersKey.find((answer) =>
          findAnswerKeyFromQuestionNo(answer, questionNumber)
        )
        if (answerKey !== undefined) {
          answerTypes[answerContainer.type] += parseInt(
            fetchResultScore(answerKey, response.R)
          )
          break
        }
      }
    })
    resultScore = answerTypes
  }
  return resultScore
}

const findAnswerKeyFromQuestionNo = (answerKey, questionNumber) => {
  return answerKey.id === questionNumber
}

const updateResponses = (req, res, next) => {
  authenticationHelper(req, res, next, { session: false }, "jwt", (user) => {
    const result = calculateTestResult(req.body.responses, req.body.type)

    findUserAndUpdateMultipleHelper(
      res,
      { email: user.email },
      {
        [`testResponses.${req.body.type}`]: req.body.responses,
        [`testResults.${req.body.type}`]: result,
      },
      {
        [`journey`]: req.body.menuType,
      },
      () => {
        return res.status(200).send({
          message: `Test Response & Result saved for ${req.body.type} saved successfully`,
        })
      }
    )
  })
}

const testEvaluation = (user) => {
  const scoresPalette = testUtil.getEvaluationScores()
  const testResults = user.testResults
  const studentAge = user.age
  const studentGender = user.gender
  let testsEvaluationScores = {}
  let ageIndex = -1
  let scoreIndex = -1

  //get Age index for Aptitude
  scoresPalette.ages.every((age, index) => {
    let ageArr = age.split("-")
    if (
      studentAge >= parseInt(ageArr[0]) &&
      studentAge <= parseInt(ageArr[1])
    ) {
      ageIndex = index
      return false
    }
    return true
  })

  //Iterate over test results to evaluate score
  for (const key in testResults) {
    if (key === "WORK_ORIENTATION") {
      const scoreKey = testResults[key].toString()
      testsEvaluationScores[key] = scoresPalette[key].hasOwnProperty(scoreKey)
        ? scoresPalette[key][scoreKey]
        : scoresPalette[key]["default"]
    } else if (key === "EMOTIONAL_QUOTIENT") {
      const eqResults = testResults[key]
      let scoresObj = {}
      let scoreKey = ""
      let addAll = 0
      for (const eq in eqResults) {
        scoreKey = testResults[key][eq]
        if (eq !== "Main") {
          addAll += eqResults[eq]
          scoresObj[eq] = scoresPalette[key][eq].hasOwnProperty(scoreKey)
            ? scoresPalette[key][eq][scoreKey]
            : scoresPalette[key][eq]["default"]
        }
      }
      scoresObj["Main"] = scoresPalette[key]["Main"].hasOwnProperty(addAll)
        ? scoresPalette[key]["Main"][addAll]
        : scoresPalette[key]["Main"]["default"]
      testsEvaluationScores[key] = scoresObj
    } else if (key === "INTEREST") {
      // INTEREST TEST EVALUATION
      // user test results
      const interestResults = testResults[key]

      let scoresObj = {}
      // answer key
      scoresPalette[key].map((obj) => {
        const scoreKey = obj.range
        scoresObj[obj.score] = interestResults[scoreKey]
      })

      testsEvaluationScores[key] = scoresObj
    } else if (key === "PERSONALITY") {
      let ageIndexPersonality = -1
      let scoreObj = {}
      scoresPalette[key].ages.every((age, index) => {
        let ageArr = age.split("-")
        if (
          studentAge >= parseInt(ageArr[0]) &&
          studentAge <= parseInt(ageArr[1])
        ) {
          ageIndexPersonality = index
          return false
        }
        return true
      })

      if (ageIndexPersonality === -1) {
        testsEvaluationScores[key] = 0
      } else {
        const testResult = testResults[key]
        for (const resultKey in testResult) {
          let scores =
            scoresPalette[key][studentGender][
              `personality_${ageIndexPersonality}`
            ][resultKey]
          scores.every((score) => {
            if (score.range.indexOf("-") !== -1) {
              let rangeArr = score.range.split("-")
              if (
                testResult[resultKey] >= parseInt(rangeArr[0]) &&
                testResult[resultKey] <= parseInt(rangeArr[1])
              ) {
                scoreObj[resultKey] = score.score
                return false
              }
              return true
            } else {
              if (testResult[resultKey] === parseInt(score.range)) {
                scoreObj[resultKey] = score.score
                return false
              }
              return true
            }
          })
        }
        testsEvaluationScores[key] = scoreObj
      }
    } else if (typeof testResults[key] === "number") {
      if (ageIndex === -1) {
        testsEvaluationScores[key] = 0
      } else {
        const testResult = testResults[key]
        const scores = scoresPalette[`aptitudeScore_${ageIndex}`][key]
        //get Score index
        scores.every((score, index) => {
          if (score.range.indexOf("-") !== -1) {
            let rangeArr = score.range.split("-")
            if (
              testResult >= parseInt(rangeArr[0]) &&
              testResult <= parseInt(rangeArr[1])
            ) {
              scoreIndex = index
              return false
            }
            return true
          } else {
            if (testResult === parseInt(score.range)) {
              scoreIndex = index
              return false
            }
            return true
          }
        })
        testsEvaluationScores[key] =
          scoreIndex === -1 ? 0 : scores[scoreIndex].score
        scoreIndex = -1
      }
    }
  }
  return testsEvaluationScores
}

const saveEvaluation = (req, res, next) => {
  // adminAuthenticationHelper(req, res, next, () => {
  findUserHelper(res, { email: req.query.email }, (user) => {
    const result = testEvaluation(user)
    updateUserHelper(
      res,
      user,
      {
        [`testEvaluation`]: result,
      },
      () => {
        return res.status(200).send({
          message: `Test evaluated successfully and added to dashboard`,
        })
      }
    )
  })
  // });
}

module.exports = { updateResponses, saveEvaluation }
