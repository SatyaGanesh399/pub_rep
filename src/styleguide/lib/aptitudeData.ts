export const ASSESSMENT_MA = {
  instructions: {
    type: "MA",
    name: "Mechanical Ability",
    images: true,
    text:
      "In this test you will answer questions about mechanical facts and principles by selecting one of the five choices given. Sometimes there will be a picture with the question; sometimes not. Here are few examples:",
    examples: [
      {
        questionNumber: "X",
        images: ["1.png"],
        question:
          "If gear X is locked in its place, but can turn, and is turning in the direction of the arrow, which way is the Plate moving?",
        options: [
          "A",
          "B",
          "first A, then B",
          "first B, then A",
          "the Plate is not moving"
        ],
        answer: 0,
        answerText:
          "The correct answer is a., since the plate would have to move in direction A."
      },
      {
        questionNumber: "Y",
        images: ["2.png"],
        question: "Which is this tool?",
        options: ["Wrench", "Pipe Wrench", "Scissors", "Pliers", "Clamp"],
        answer: 3,
        answerText: "The answer is d. pliers."
      },
      {
        questionNumber: "Z",
        images: [],
        question:
          "Any material that electricity will pass through is called a(n) ",
        options: [
          "Insulator",
          "Magnet",
          "Transformer",
          "Filament",
          "Conductor"
        ],
        answer: 4,
        answerText: "The answer is e. conductor"
      }
    ],
    followText:
      "Work as quickly as you can. You will have 9 minutes to solve 25 questions in this test. If you are not sure of the right answer for an item, choose the answer that is your best guess."
  },
  test: {
    type: "MA",
    images: true,
    questions: [
      {
        questionNumber: 1,
        images: ["1.png"],
        question: "On what material would this chisel be used?",
        options: ["Metal", "Cement", "Plastic", "Wood", "Glass"]
      },
      {
        questionNumber: 2,
        images: ["2.png"],
        question:
          "If the gear on the left turns in the direction of the arrow, which way does the gear on the right turn",
        options: [
          "A",
          "B",
          "C",
          "Alternately B and C",
          "The right gear does not turn"
        ]
      },
      {
        questionNumber: 3,
        images: ["3.png"],
        question: "What is the tool",
        options: [
          "Drill",
          "Welding Torch",
          "Paint Sprayer",
          "Soldering Gun",
          "Burning Tool"
        ]
      },
      {
        questionNumber: 4,
        images: [],
        question:
          "A device that does the same thing as a fuse does is calles a(n)",
        options: [
          "Circuit Breaker",
          "Resistor",
          "Relay",
          "Alternator",
          "Votage Regulator"
        ]
      },
      {
        questionNumber: 5,
        images: ["5.1.png", "5.2.png", "5.3.png"],
        question:
          "In which of the following situations is the least force needed at the arrow, to balance the lever?",
        options: ["A", "B", "C", "A and C", "B and C"]
      },
      {
        questionNumber: 6,
        images: ["6.png"],
        question: "Where should the highway be elevated or raised",
        options: ["A", "b", "C", "D", "E"]
      },
      {
        questionNumber: 7,
        images: ["7.1.png", "7.2.png", "7.3.png", "7.4.png"],
        question: "Which of the shelves will support the greatest weight?",
        options: ["A", "B", "C", "D", "They will all support the same weight"]
      },
      {
        questionNumber: 8,
        images: ["8.png"],
        question:
          "If the Gear X is turning in the direction of the arrow, in what direction and how fast is Gear Y turning?",
        options: [
          "In the direction A and the same speed as Gear X",
          "In the direction A and faster than Gear X",
          "In the direction B and slower than Gear X",
          "In the direction B and the same speed as Gear X",
          "In the direction B and faster than Gear X"
        ]
      },
      {
        questionNumber: 9,
        images: [],
        question: "Powdered graphite is useful as a(n)",
        options: [
          "Adhesive",
          "Thickening agent",
          "Fuel",
          "Lubricant",
          "Conducting Agent"
        ]
      },
      {
        questionNumber: 10,
        images: ["10.png"],
        question: "Which shaft is turning fastest?",
        options: [
          "A",
          "B",
          "C",
          "A and C",
          "They will all move at the same speed"
        ]
      },
      {
        questionNumber: 11,
        images: [],
        question:
          "In which of the following lists are the four metals arranged from hardest to softest?",
        options: [
          "Steel, copper, iron, lead",
          "Steel, iron, lead, copper",
          "Iron, steel, copper, lead",
          "Iron, steel, lead, copper",
          "Steel iron, copper, lead"
        ]
      },
      {
        questionNumber: 12,
        images: ["12.png"],
        question:
          "In what direction and how fast is the Wheel X turning as the Treadle moves in the direction of the arrow?",
        options: [
          "Direction A and faster than wheel Y",
          "Direction A and slower than wheel Y",
          "Direction B and faster than wheel Y",
          "Direction B and slower than wheel Y",
          "Direction A and the same speed as wheel Y"
        ]
      },
      {
        questionNumber: 13,
        images: [],
        question: "A basic part of many thermostat is",
        options: [
          "A knife switch",
          "A bimettalic strip",
          "A spring-activated relay",
          "An electromagnetic relay",
          "A photo-sensitive activating device"
        ]
      },
      {
        questionNumber: 14,
        images: ["14.png"],
        question:
          "What do we call the part of this tool which is marked with an X",
        options: ["Bit", "Housing", "Chuck", "Reduction gear", "Key"]
      },
      {
        questionNumber: 15,
        images: ["15.png"],
        question: "This tool is used by a mason for",
        options: [
          "Making holes",
          "Measuring thickness of walls",
          "Cementing bricks",
          "Examining the straightness of wall",
          "Writing on the walls"
        ]
      },
      {
        questionNumber: 16,
        images: [],
        question: "Automobile Carburetor",
        options: [
          "Provides a coupling between front and rear wheels",
          "Changes direct electrical current to alternate current",
          "Allows the rear wheels to turn at a greater speed",
          "Converts the up and down motion of the pistons",
          "Allows the mixture of air and petrol"
        ]
      },
      {
        questionNumber: 17,
        images: ["17.png"],
        question:
          "The shaft in the picture cannot move from one side to other, but it can turn. As the shaft is turned in the direction shown by the arrow, which way will the gear turn?",
        options: [
          "A",
          "B",
          "Alternatively A and B",
          "Frist A, then B",
          "The gear will not turn"
        ]
      },
      {
        questionNumber: 18,
        images: ["18.1.png", "18.2.png"],
        question:
          "In which circuit is the voltage always the same across each resistor, regardless of the values of R1 and R2?",
        options: [
          "A",
          "B",
          "both A and B",
          "neither A nor B",
          "It depends on the resistance"
        ]
      },
      {
        questionNumber: 19,
        images: ["19.png"],
        question:
          "After hitting the black coin, which way is the striker likely to go on the carrom-board?",
        options: ["A", "B", "C", "D", "It will rebound"]
      },
      {
        questionNumber: 20,
        images: ["20.1.png", "20.2.png"],
        question:
          "If same kind of coins are dropped in these two beakers, which coin will drown faster?",
        options: [
          "A",
          "B",
          "Both will take equal time",
          "Coin in beaker A will float",
          "Coin in beaker B will float"
        ]
      },
      {
        questionNumber: 21,
        images: ["21.1.png", "21.2.png", "21.3.png"],
        question: "Which of these wooden boxes is the heaviest?",
        options: [
          "A",
          "B",
          "C",
          "All are equal in weight",
          "B and C are the heaviest"
        ]
      },
      {
        questionNumber: 22,
        images: ["22.1.png", "22.2.png", "22.3.png"],
        question: "Which of these shelves will hold the maximum weight?",
        options: [
          "A",
          "B",
          "C",
          "All will hold equal weight",
          "A and B will hold same weight"
        ]
      },
      {
        questionNumber: 23,
        images: [
          "23.1.png",
          "23.2.png",
          "23.3.png",
          "23.4.png",
          "23.5.png",
          "23.6.png"
        ],
        question:
          "How will figure X look in the mirror? Choose from the figures given below:",
        options: ["A", "B", "C", "D", "E", "F"]
      },
      {
        questionNumber: 24,
        images: ["24.1.png", "24.2.png"],
        question:
          "Which of these glass will break easily when pured with very hot liquid?",
        options: [
          "A",
          "B",
          "Both will break at the same time",
          "Both can retain the hot liquid",
          "hot liquid cannot be poured in A"
        ]
      },
      {
        questionNumber: 25,
        images: ["25.png"],
        question: "Find out the missing number?",
        options: ["17", "12", "32", "8", "40"]
      }
    ]
  }
};

export const ASSESSMENT_VA = {
  instructions: {
    type: "VA",
    name: "Verbal Ability",
    text:
      "PART 1: In this part, first look at the word in capital letters. Then, from the five words that follow, find the one that means the same thing as the word in capitals, and choose that answer on the page.",
    text2:
      "PART 2: In this part, first read the saying or proverb in capital letters then, from the five options under it, find the sentence that means the same thing, and select the correct answer.",
    examples: [
      {
        questionNumber: "X",
        question: "ATTEMPT",
        options: ["Hit", "Try", "Falter", "Walk", "Quarrel"],
        answer: 1,
        answerText:
          "Since ATTEMPT and TRY mean the same thing, b. try is the correct answer."
      },
      {
        questionNumber: "Y",
        question: "LET ANOTHER'S SHIPWRECK BE YOUR GUIDE AT SEA",
        options: [
          "One man's meat is another man's poison",
          "Ships Fear Fire more than water",
          "Wise man learn from other man's mistakes ",
          "Walk",
          "The worst things happen at sea ",
          "Chart a careful course"
        ],
        answer: 2,
        answerText:
          "Since LET ANOTHER'S SHIPWRECK BE YOUR GUIDE AT SEA means about the same thing as WISE MEN LEARN FROM OTHER MEN'S MISTAKES, therefore c. is the correct answer."
      }
    ],
    followText:
      "Work as quickly as you can. You will have 7 minutes 30 seconds to solve 24 questions in this test. If you are not sure of the right answer for an item, mark the choice that is your best guess."
  },
  test: {
    type: "VA",
    questions: [
      {
        questionNumber: 1,
        question: "Fast",
        options: ["Old", "Rapid", "Slow", "Early", "Late"]
      },
      {
        questionNumber: 2,
        question: "Deceive",
        options: ["Blunder", "Obtain", "Conceal", "Mislead", "Disclose"]
      },
      {
        questionNumber: 3,
        question: "Excess",
        options: ["Waste", "Departure", "Surplus", "Tax", "Approach"]
      },
      {
        questionNumber: 4,
        question: "Believable",
        options: ["Admirable", "Real", "Personable", "Unlikely", "Credible"]
      },
      {
        questionNumber: 5,
        question: "Contemplate",
        options: ["Heal", "Advance", "Mediate", "Rest", "Worry"]
      },
      {
        questionNumber: 6,
        question: "Amiable",
        options: ["Friendly", "Humorous", "Healthy", "Convincing", "Polished"]
      },
      {
        questionNumber: 7,
        question: "Turmoil",
        options: ["Circular", "Turbulent", "Calm", "Spinning", "Air-borne"]
      },
      {
        questionNumber: 8,
        question: "Deceptive",
        options: ["Illogical", "Illusory", "Magical", "Visible", "Clear"]
      },
      {
        questionNumber: 9,
        question: "Whimsical",
        options: ["Unlike", "Musical", "Dancing", "Unpredictable", "Equatorial"]
      },
      {
        questionNumber: 10,
        question: "Apathetic",
        options: ["Ignorant", "Indifferent", "Pitiful", "Concerned", "Clever"]
      },
      {
        questionNumber: 11,
        question: "Arduous",
        options: ["Repulsive", "Loving", "Easy", "Interesting", "Strenuous"]
      },
      {
        questionNumber: 12,
        question: "Placate",
        options: ["Cover", "Beautify", "Arouse", "Plasticize", "Appease"]
      },
      {
        questionNumber: 13,
        question: "Clandestine",
        options: ["Furtive", "Safe", "Tribal", "Open", "Vindicate"]
      },
      {
        questionNumber: 14,
        question: "Vindicate",
        options: ["Deny", "State", "Persecute", "Defend", "Accuse"]
      },
      {
        questionNumber: 15,
        question: "Inculcate",
        options: ["Grow", "Inquire", "Instil", "Compute", "Acquire"]
      },
      {
        questionNumber: 16,
        question: "Strike while the iron is hot",
        options: [
          "Take things as you find them",
          "Hot love is soon cold",
          "Make hay while the sun shines",
          "First think and then speak",
          "Look before you leap"
        ]
      },
      {
        questionNumber: 17,
        question: "It never rains but it pours",
        options: [
          "Cloudy morning turn to clear evenings",
          "Misfortunes never come one at a time",
          "Easy come, easy go",
          "The least predictable thing is life is the weather",
          "Every cloud has a silver lining"
        ]
      },
      {
        questionNumber: 18,
        question: "Let sleeping dogs lie",
        options: [
          "As you make your bed, so you must lie on it",
          "Do not keep a dog and bark yourself",
          "There will be sleeping enough in the grave",
          "Never look for trouble; let trouble look for you",
          "An old dog does not bark for nothing"
        ]
      },
      {
        questionNumber: 19,
        question: "There is no venom like that of the tongue",
        options: [
          "The tongue of an idle person is never idle",
          "Talking pays no bill",
          "Few words are best",
          "Words cut more than swords",
          "Bad news travel fast"
        ]
      },
      {
        questionNumber: 20,
        question: "It is always darkest before the dawn",
        options: [
          "The longest day means the shortest night",
          "What is done by night appears by day",
          "He who runs in the dark may well stumble",
          "He who groups in the dark finds what he would not",
          "When things are at the worst they will improve"
        ]
      },
      {
        questionNumber: 21,
        question: "All that glitters is not gold",
        options: [
          "Don’t judge a book by its cover",
          "All men can’t be masters",
          "Gold dust blinds all eyes",
          "Money is the root of all evils",
          "Riches alone will not make a man happy"
        ]
      },
      {
        questionNumber: 22,
        question: "Too many cooks spoil the broth",
        options: [
          "Too much praise is a burden",
          "Too much consulting confounds",
          "Truth needs not many words",
          "Action speak louder than words",
          "When need is highest, help is nighest"
        ]
      },
      {
        questionNumber: 23,
        question: "A stitch in time saves nine",
        options: [
          "It is never too late to mend",
          "Times cures all things",
          "Preventions is better than cure",
          "Take time while time is, for time will away",
          "It is no use crying over spilled milk"
        ]
      },
      {
        questionNumber: 24,
        question: "Little strokes fell great oaks",
        options: [
          "Step after step the ladder is ascended",
          "Great strokes make not sweet music",
          "Tall oaks from little acorns grow",
          "Oaks may fall when reeds stand the storm",
          "Little things please little minds"
        ]
      }
    ]
  }
};

export const ASSESSMENT_SA = {
  instructions: {
    type: "SA",
    name: "Spatial Ability",
    images: true,
    text:
      "On the next page, there are drawings of all kinds of figures, and you have to imagine them in different positions. In each question, there is one Sample Figure on the left side which is followed by a Test Figure on the right side.",
    examples: [
      {
        questionNumber: "X",
        question: "S = the same (only turned around)",
        images: ["1.jpg"],
        answerText:
          "The above Test Figures are same as the Sample Figure but just turned around."
      },
      {
        questionNumber: "Y",
        question: "R = Reversed (or turned over) ",
        images: ["2.png"],
        answerText:
          "The above Test Figures are same as the Sample Figure but just turned over / reversed."
      },
      {
        questionNumber: "Z",
        question: "SAMPLE FIGURE TEST FIGURE",
        images: ["3.png"],
        answerText:
          "If a Test Figure is same as the Sample Figure select the S (Same) option. If a Test Figure is reversed from the Sample Figure select the R (Reverse) option. The following example is marked correctly for your help. Look at each of the figures to understand how to mark “S” or “R”."
      }
    ],
    followText:
      "Be sure to mark S or R for the Test Figure in each question. You will have to work quickly to finish 72 questions in this test. If you are not sure of the right answer for an item, mark the choice that is your best guess."
  },
  test: {
    type: "SA",
    images: true,
    questions: [
      {
        questionNumber: 1,
        images: ["1-6.png", "1.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 2,
        images: ["1-6.png", "2.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 3,
        images: ["1-6.png", "3.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 4,
        images: ["1-6.png", "4.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 5,
        images: ["1-6.png", "5.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 6,
        images: ["1-6.png", "6.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 7,
        images: ["7-12.png", "7.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 8,
        images: ["7-12.png", "8.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 9,
        images: ["7-12.png", "9.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 10,
        images: ["7-12.png", "10.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 11,
        images: ["7-12.png", "11.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 12,
        images: ["7-12.png", "12.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 13,
        images: ["13-18.png", "13.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 14,
        images: ["13-18.png", "14.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 15,
        images: ["13-18.png", "15.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 16,
        images: ["13-18.png", "16.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 17,
        images: ["13-18.png", "17.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 18,
        images: ["13-18.png", "18.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 19,
        images: ["19-24.png", "19.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 20,
        images: ["19-24.png", "20.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 21,
        images: ["19-24.png", "21.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 22,
        images: ["19-24.png", "22.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 23,
        images: ["19-24.png", "23.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 24,
        images: ["19-24.png", "24.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 25,
        images: ["25-30.png", "25.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 26,
        images: ["25-30.png", "26.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 27,
        images: ["25-30.png", "27.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 28,
        images: ["25-30.png", "28.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 29,
        images: ["25-30.png", "29.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 30,
        images: ["25-30.png", "30.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 31,
        images: ["31-36.png", "31.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 32,
        images: ["31-36.png", "32.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 33,
        images: ["31-36.png", "33.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 34,
        images: ["31-36.png", "34.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 35,
        images: ["31-36.png", "35.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 36,
        images: ["31-36.png", "36.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 37,
        images: ["37-42.png", "37.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 38,
        images: ["37-42.png", "38.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 39,
        images: ["37-42.png", "39.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 40,
        images: ["37-42.png", "40.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 41,
        images: ["37-42.png", "41.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 42,
        images: ["37-42.png", "42.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 43,
        images: ["43-48.png", "43.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 44,
        images: ["43-48.png", "44.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 45,
        images: ["43-48.png", "45.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 46,
        images: ["43-48.png", "46.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 47,
        images: ["43-48.png", "47.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 48,
        images: ["43-48.png", "48.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 49,
        images: ["49-54.png", "49.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 50,
        images: ["49-54.png", "50.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 51,
        images: ["49-54.png", "51.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 52,
        images: ["49-54.png", "52.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 53,
        images: ["49-54.png", "53.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 54,
        images: ["49-54.png", "54.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 55,
        images: ["55-60.png", "55.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 56,
        images: ["55-60.png", "56.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 57,
        images: ["55-60.png", "57.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 58,
        images: ["55-60.png", "58.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 59,
        images: ["55-60.png", "59.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 60,
        images: ["55-60.png", "60.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 61,
        images: ["61-66.png", "61.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 62,
        images: ["61-66.png", "62.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 63,
        images: ["61-66.png", "63.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 64,
        images: ["61-66.png", "64.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 65,
        images: ["61-66.png", "65.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 66,
        images: ["61-66.png", "66.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 67,
        images: ["67-72.png", "67.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 68,
        images: ["67-72.png", "68.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 69,
        images: ["67-72.png", "69.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 70,
        images: ["67-72.png", "70.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 71,
        images: ["67-72.png", "71.png"],
        options: ["S", "R"]
      },
      {
        questionNumber: 72,
        images: ["67-72.png", "72.png"],
        options: ["S", "R"]
      }
    ]
  }
};

export const ASSESSMENT_CL = {
  instructions: {
    type: "CL",
    name: "Clerical",
    text:
      "This test consists of letters or numbers, which are either the same or different. If the pair is exactly the same, you are to select the S (Same). If the pair is different in any way, you are to select the D (Different).",
    examples: [
      {
        questionNumber: "X",
        question: "TRSPUVGY ------- TRSUPVGYG",
        options: ["S", "D"],
        answer: 1,
        answerText:
          "In this EXAMPLE, the parts of the pair are different, so the correct answer is D."
      },
      {
        questionNumber: "Y",
        question: "10295364 ------- 10295364?",
        options: ["S", "D"],
        answer: 0,
        answerText:
          "In this EXAMPLE, the parts of the pair are same, so the correct answer is S."
      },
      {
        questionNumber: "Z",
        question: "lmjarpb ------- lmjarpb",
        options: ["S", "D"],
        answer: 0,
        answerText:
          "In this EXAMPLE, the parts of the pair are same, so the correct answer is S."
      }
    ],
    followText:
      "The idea is to see how quickly and accurately you can decide whether pairs are the same or different, so work as quickly as you can to complete 72 questions without sacrificing the accuracy. If you are not sure of the right answer for a pair, select the choice that is your best guess."
  },
  test: {
    type: "CL",
    images: true,
    questions: [
      {
        questionNumber: 1,
        images: ["1.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 2,
        images: ["2.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 3,
        images: ["3.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 4,
        images: ["4.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 5,
        images: ["5.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 6,
        images: ["6.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 7,
        images: ["7.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 8,
        images: ["8.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 9,
        images: ["9.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 10,
        images: ["10.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 11,
        images: ["11.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 12,
        images: ["12.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 13,
        images: ["13.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 14,
        images: ["14.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 15,
        images: ["15.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 16,
        images: ["16.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 17,
        images: ["17.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 18,
        images: ["18.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 19,
        images: ["19.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 20,
        images: ["20.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 21,
        images: ["21.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 22,
        images: ["22.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 23,
        images: ["23.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 24,
        images: ["24.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 25,
        images: ["25.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 26,
        images: ["26.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 27,
        images: ["27.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 28,
        images: ["28.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 29,
        images: ["29.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 30,
        images: ["30.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 31,
        images: ["31.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 32,
        images: ["32.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 33,
        images: ["33.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 34,
        images: ["34.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 35,
        images: ["35.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 36,
        images: ["36.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 37,
        images: ["37.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 38,
        images: ["38.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 39,
        images: ["39.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 40,
        images: ["40.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 41,
        images: ["41.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 42,
        images: ["42.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 43,
        images: ["43.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 44,
        images: ["44.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 45,
        images: ["45.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 46,
        images: ["46.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 47,
        images: ["47.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 48,
        images: ["48.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 49,
        images: ["49.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 50,
        images: ["50.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 51,
        images: ["51.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 52,
        images: ["52.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 53,
        images: ["53.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 54,
        images: ["54.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 55,
        images: ["55.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 56,
        images: ["56.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 57,
        images: ["57.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 58,
        images: ["58.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 59,
        images: ["59.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 60,
        images: ["60.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 61,
        images: ["61.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 62,
        images: ["62.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 63,
        images: ["63.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 64,
        images: ["64.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 65,
        images: ["65.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 66,
        images: ["66.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 67,
        images: ["67.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 68,
        images: ["68.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 69,
        images: ["69.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 70,
        images: ["70.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 71,
        images: ["71.jpg"],
        options: ["S", "D"]
      },
      {
        questionNumber: 72,
        images: ["72.jpg"],
        options: ["S", "D"]
      }
    ]
  }
};

export const ASSESSMENT_RA = {
  instructions: {
    type: "RA",
    name: "Reasoning Ability",
    text:
      "In each question, you are to look at five sets of letters. Four of the five sets follow a certain rule while one set does not. You have to select the set that does not follow the rule.",
    examples: [
      {
        questionNumber: "X",
        question: "Look at the following example: ",
        options: ["BBLJ", "TTRU", "FWZP", "XXBK", "MMEO"],
        answer: 2,
        answerText:
          "In four of the sets, the first two letters are the same. In the other one, c. FWZP, this rule is not followed, so the correct answer for this example is c. Please note that the rules are not based on sounds, shapes or types (vowels or consonant) of the letters."
      },
      {
        questionNumber: "Y",
        question: "Now try another example:",
        options: ["ABCD", "GHIJ", "LMNO", "QSRT", "VWXY"],
        answer: 3,
        answerText:
          "In four of the sets, the letters follow one another in alphabetical order. However, in one set, d. QSRT, this is not followed, because the S and R are not in the right alphabetical order. Therefore, the correct answer is d."
      }
    ],
    followText:
      "Work quickly to finish as many items as you can. You will have 5 minutes to solve 12 questions. If you are not sure of the right answer for an item, mark the choice that is your best guess."
  },
  test: {
    type: "RA",
    questions: [
      {
        questionNumber: 1,
        options: ["DEPD", "RFMR", "SJUS", "TVWT", "GBBK"]
      },
      {
        questionNumber: 2,
        options: ["XFGX", "BLMB", "KQRK", "DTSD", "MYZM"]
      },
      {
        questionNumber: 3,
        options: ["FGHE", "IJKH", "LMNP", "RSTQ", "VWXU"]
      },
      {
        questionNumber: 4,
        options: ["EDDG", "IHHJ", "NMMO", "RQQS", "TSSU"]
      },
      {
        questionNumber: 5,
        options: ["VWVT", "SVWV", "VWVR", "QVWV", "VWPV"]
      },
      {
        questionNumber: 6,
        options: ["CDED", "LMOM", "PQRQ", "STUT", "WXYX"]
      },
      {
        questionNumber: 7,
        options: ["RYAA", "BBRG", "RPCC", "DDRD", "RLEE"]
      },
      {
        questionNumber: 8,
        options: ["ORAR", "PGRR", "RBVR", "RRUH", "LRLX"]
      },
      {
        questionNumber: 9,
        options: ["DECG", "JKIL", "MNLO", "QRPS", "UVIW"]
      },
      {
        questionNumber: 10,
        options: ["BCFF", "GHKK", "KLNN", "PQTT", "VWZZ"]
      },
      {
        questionNumber: 11,
        options: ["CGFJ", "EIHL", "GKJN", "IMNR", "MQPT"]
      },
      {
        questionNumber: 12,
        options: ["HGFC", "KJIG", "NMLI", "TSRO", "YXWT"]
      }
    ]
  }
};

export const ASSESSMENT_NA = {
  instructions: {
    type: "NA",
    name: "Numerical Ability",
    text:
      "This test is made up of short number problems. Each questions has five choices. You have to select the correct answer. Here are two examples. Do them for practice. You can use any extra sheet for ROUGH WORK.",
    examples: [
      {
        questionNumber: "X",
        question: "ADD:  X: 47 + 194",
        options: ["231", "241", "153", "261", "243"],
        answer: 1,
        answerText: "The correct answer is b. 241"
      },
      {
        questionNumber: "Y",
        question: "Y:  ADD: 1/2 + 1/4",
        options: ["1/8", "3/5", "3/4", "1/3", "1/2"],
        answer: 2,
        answerText: "The correct answer is c. 3/4"
      }
    ],
    followText:
      "Work as quickly as you can to finish as many problems as possible. You will have 5 minutes 30 seconds for 20 questions. If you are not sure of the right answer for a problem, mark the choice that is your best guess."
  },
  test: {
    type: "NA",
    images: true,
    questions: [
      {
        questionNumber: 1,
        images: ["1.jpg"],
        options: ["230", "218", "200", "220", "219"]
      },
      {
        questionNumber: 2,
        images: ["2.jpg"],
        options: ["552", "542", "522", "531", "523"]
      },
      {
        questionNumber: 3,
        images: ["3.jpg"],
        options: ["2822", "2582", "2922", "2893", "2904"]
      },
      {
        questionNumber: 4,
        images: ["4.jpg"],
        options: ["318", "316", "324", "326", "213"]
      },
      {
        questionNumber: 5,
        images: ["5.jpg"],
        options: ["5050", "5060", "4760", "4750", "4050"]
      },
      {
        questionNumber: 6,
        images: ["6.jpg"],
        options: ["224", "234", "235", "225", "325"]
      },
      {
        questionNumber: 7,
        images: ["7.jpg"],
        options: ["16 1/10", "16 1/5", "15 4/5", "15 1/10", "15 9/10"]
      },
      {
        questionNumber: 8,
        images: ["8.jpg"],
        options: ["1.2", "15.0", "12.0", "0.12", "1.5"]
      },
      {
        questionNumber: 9,
        images: ["9.jpg"],
        options: ["22.60", "22.50", "22.40", "22.26", "26.10"]
      },
      {
        questionNumber: 10,
        images: ["10.jpg"],
        options: ["30", "32", "70", "72", "60"]
      },
      {
        questionNumber: 11,
        images: ["11.jpg"],
        options: ["2/3", "1 1/3", "1 1/9", "1 7/9", "2 2/3"]
      },
      {
        questionNumber: 12,
        images: ["12.jpg"],
        question:
          "Which one of the numbers below could replace X in both places in: 4 + X = 6 – X?",
        options: ["4", "3", "2", "1", "-2"]
      },
      {
        questionNumber: 13,
        images: ["13.jpg"],
        options: ["39/40", "7/40", "1 11/80", "2 11/40", "7/80"]
      },
      {
        questionNumber: 14,
        images: ["14.jpg"],
        options: ["7 1/6", "7 5/6", "7 1/12", "6 11/12", "6 5/6"]
      },
      {
        questionNumber: 15,
        images: ["15.jpg"],
        options: ["6", "12", "32", "52", "40"]
      },
      {
        questionNumber: 16,
        images: ["16.jpg"],
        options: ["14", "16", "24", "36", "98"]
      },
      {
        questionNumber: 17,
        images: ["17.jpg"],
        options: ["165", "175", "185", "207", "343"]
      },
      {
        questionNumber: 18,
        images: ["18.jpg"],
        options: ["1/3", "1/8", "11/12", "1 1/9", "5/8"]
      },
      {
        questionNumber: 19,
        images: ["19.jpg"],
        options: ["1/8", "81/256", "17/64", "25/36", "1 1/4"]
      },
      {
        questionNumber: 20,
        images: ["20.jpg"],
        options: ["1 5/6", "5/27", "1 1/9", "8/9", "7/9"]
      }
    ]
  }
};

export const ASSESSMENT_CA = {
  instructions: {
    type: "CA",
    name: "Closure Ability",
    images: true,
    text:
      "In this test, you will see a word with parts of the letters missing. This incomplete word is followed by five jumbled words. You are first to use your imagination to figure out what the incomplete word is. Then find, among the five scramble choices, the one that has the right letters to spell the incomplete word.",
    examples: [
      {
        questionNumber: "X",
        images: ["1.png"],
        options: ["ehrsu", "recsu", "osher", "roesc", "rtose"],
        answer: 3,
        answerText:
          "When you see that the word is score, you look at the five jumbled choices and see which one contains the letters of the word score. The correct answer is d. roesc. None of the Other four has all the letters in the word score."
      },
      {
        questionNumber: "Y",
        images: ["2.png"],
        options: ["rldead", "trlate", "cdtroo", "urldde", "urderd"],
        answer: 0,
        answerText:
          "The word is ladder, and only choice a. rldead contains all the letters in the word ladder. So the correct answer is a."
      }
    ],
    followText:
      "Incomplete words on the next page vary in length. There are no capital letters in any of the words. Work quickly to finish as many items as you can. You will have 5 minutes for 20 questions in this test. If you are not sure of the right answer for an incomplete word, select the choice that is your best guess."
  },
  test: {
    type: "CA",
    images: true,
    questions: [
      {
        questionNumber: 1,
        images: ["1.png"],
        options: ["rodba", "dnbra", "aibnr", "radeb", "bneas"]
      },
      {
        questionNumber: 2,
        images: ["2.png"],
        options: ["sisleln", "nselsu", "rsipmes", "drusens", "ruseds"]
      },
      {
        questionNumber: 3,
        images: ["3.png"],
        options: ["lowilw", "rdweno", "dwowni", "nawred", "nidrem"]
      },
      {
        questionNumber: 4,
        images: ["4.png"],
        options: ["rgaon", "gapna", "lpano", "ginaa", "garin"]
      },
      {
        questionNumber: 5,
        images: ["5.png"],
        options: ["rygzeran", "ezcyrnai", "izonrega", "yezirdan", "nyoneiza"]
      },
      {
        questionNumber: 6,
        images: ["6.png"],
        options: ["onimr", "rrimor", "lermi", "rmuro", "ulrrc"]
      },
      {
        questionNumber: 7,
        images: ["7.png"],
        options: ["rweat", "twahc", "lovra", "twckei", "berbru"]
      },
      {
        questionNumber: 8,
        images: ["8.png"],
        options: ["eusscsc", "aesrfcu", "dscucee", "sdsaces", "pssrepus"]
      },
      {
        questionNumber: 9,
        images: ["9.png"],
        options: ["yldiena", "gdalein", "lnoadgi", "nlginae", "ldidaene"]
      },
      {
        questionNumber: 10,
        images: ["10.png"],
        options: ["irouf", "rknfa", "cflka", "efrla", "alnfk"]
      },
      {
        questionNumber: 11,
        images: ["11.png"],
        options: ["leorfma", "altnemni", "aintmlne", "letanirm", "faelrimr"]
      },
      {
        questionNumber: 12,
        images: ["12.png"],
        options: ["dernccee", "condiunce", "ndeucaei", "enoduine", "eodncnie"]
      },
      {
        questionNumber: 13,
        images: ["13.png"],
        options: ["ljoyl", "glaji", "yegll", "eyjil", "lylej"]
      },
      {
        questionNumber: 14,
        images: ["14.png"],
        options: ["hytrae", "amgienn", "meyinan", "ylnmeai", "lyehaht"]
      },
      {
        questionNumber: 15,
        images: ["15.png"],
        options: ["trsepen", "tpnesaa", "patsran", "psarnet", "trnoasp"]
      },
      {
        questionNumber: 16,
        images: ["16.png"],
        options: ["hcicn", "issgh", "nices", "hnies", "ncaih"]
      },
      {
        questionNumber: 17,
        images: ["17.png"],
        options: ["cmlignba", "abcorlig", "grmlaigh", "mbigagnl", "lirggamn"]
      },
      {
        questionNumber: 18,
        images: ["18.png"],
        options: ["maarce", "rlnua", "rtaem", "yllauble", "nocraa"]
      },
      {
        questionNumber: 19,
        images: ["19.png"],
        options: ["ecrtcor", "aocrtr", "acmaer", "tnoanc", "fornca"]
      },
      {
        questionNumber: 20,
        images: ["20.png"],
        options: ["nroait", "ruatne", "gtarin", "tinono", "ntiaon"]
      }
    ]
  }
};

export const ASSESSMENT_EMOTIONAL = {
  instructions: {
    type: "EMOTIONAL_QUOTIENT",
    name: "Emotional Quotient",
    text:
      "On the next page is given a list of items that may be used to describe the leadership effectiveness of an institutional or organisational leader/ head. Think about how frequently your head or leader engages in the act described in the item. Then select any one of the five options given against each item to show the act of your leader or head which describes him/her the best. Please answer all 79 items. Though there is no time limit for this scale, you can conveniently complete it in 30 minutes.",
    examples: [
      {
        questionNumber: "X",
        question: "Appreciates the good work.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"],
        answerText:
          "There is no right or wrong in the statement. Select your own choice."
      }
    ],
    followText:
      "Note: The term 'Group' is used to refer to an institution, department, division of any other unit of organisation which is headed by a person being described. You can consider the leader/head to be anyone in authority from your school/institute. You will have 2 hours to answer 79 questions."
  },
  test: {
    type: "EMOTIONAL_QUOTIENT",
    questions: [
      {
        questionNumber: 1,
        question: "Appreciates the good work.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 2,
        question: "Makes his ideas known to the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 3,
        question: "Tries out innovative strategies in solving group problems.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 4,
        question: "Informs the changes well in advance.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 5,
        question: "Plans the work to be carried out.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 6,
        question: "Considers not accountable for his actions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 7,
        question: "Supports the group in his activities.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 8,
        question: "Judicious and fair in using the rewards.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 9,
        question: "Overexercises his power.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 10,
        question: "Is unpredictable in his behaviour.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 11,
        question: "Easily moved by the situations.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 12,
        question: "Rational in making decisions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 13,
        question: "Makes his presence felt in the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 14,
        question:
          "Makes sure that each member of the group understands his work.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 15,
        question: "Easily approachable.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 16,
        question: "Acts as the spokesman of the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 17,
        question: "Encourages participative decison making.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 18,
        question:
          "Consults the group before implementing the important decisions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 19,
        question: "Loyal to the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 20,
        question: "Abides by the rules and regulations of the organistaion.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 21,
        question: "Adheres to the group norms.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 22,
        question: "Treats others as his equal.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 23,
        question: "Concerned about the welfare of the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 24,
        question: "Advocates rights of the group members.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 25,
        question: "Recognises rights of the group members.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 26,
        question: "Stands by his words.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 27,
        question: "Predictable in his behaviour.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 28,
        question: "Admits his mistakes.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 29,
        question: "Defends his mistakes.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 30,
        question: "Avoid repeating mistakes.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 31,
        question: "Tends to escape obligations.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 32,
        question: "Is attentive while listening to others.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 33,
        question: "Does not mingle with group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 34,
        question: "Enjoys loneliness.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 35,
        question: "Respects the opinion of others in group decisions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 36,
        question:
          "Involves the community and general public in major policy formulations.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 37,
        question: "Disregards the information that challenges his status quo.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 38,
        question: "Helps group to arrive at consensus.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 39,
        question: "Strives hard to analyse the group problems.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 40,
        question: "Adamant in taking decisions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 41,
        question: "Takes decision himself.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 42,
        question: "Places principles above his own personal advantages.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 43,
        question: "Well-informed about contemporary events.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 44,
        question: "Interested in social, economics and political issues.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 45,
        question: "Expresses abstract ideas clearly.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 46,
        question: "Uses suitable words to convey his ideas.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 47,
        question: "Warm and appealing in relationship with others.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 48,
        question: "Faces the challenging situations calmly.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 49,
        question: "Ignores the viewpoints of others.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 50,
        question: "Empathises with staff problems.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 51,
        question: "Sorts out the correct information before action.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 52,
        question: "Strives hard to maintain group identity.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 53,
        question: "Stimulates well ordered climate, conducive for team work.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 54,
        question: "Vague and fuzzy in expression.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 55,
        question: "Tends to delay action on poilices.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 56,
        question:
          "Experiments new ideas after carefully studying the pros and cons.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 57,
        question: "Makes other feels at ease in his presence.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 58,
        question:
          "Monopolizes discussion when appointed official leader of the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 59,
        question: "Moves surely and judiciously in affecting policies.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 60,
        question: "Consistently seeks and employs new data.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 61,
        question:
          "Tends to be upset by everyday occurrences and keeps the staff in continous uproar.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 62,
        question: "Hesitant to lead discussions in new situations.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 63,
        question: "Facilitates others to make effective contribution to group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 64,
        question:
          "Involves in exchange of information with peers as well as with subordinates and superiors.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 65,
        question:
          "Translates information into actionable instruction for subordinates.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 66,
        question: "Gives opportunity to others to develop and grow.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 67,
        question: "Shows interest in group members and their activities.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 68,
        question: "Lacks patience for doing an activity continously.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 69,
        question: "Lacks confidence to initiate actions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 70,
        question: "Uses arbitrary authority to control group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 71,
        question: "Refuses to explain his actions.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 72,
        question: "Gets disturbed easily.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 73,
        question: "Identifies himself with group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 74,
        question: "Gives directions to the activities of the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 75,
        question: "Exhibits flexibility in decision making.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 76,
        question: "Gets anxious about petty matters.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 77,
        question: "Worries over unforeseen consequences.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 78,
        question: "Tends to feel one among the group.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      },
      {
        questionNumber: 79,
        question: "Enjoys undue exercise of power.",
        options: ["Always", "Often", "Occasionally", "Rarely", "Never"]
      }
    ]
  }
};

export const ASSESSMENT_WORK = {
  instructions: {
    type: "WORK_ORIENTATION",
    name: "Work Orientation",
    text:
      "There are statements given in this assessment. Read every statement carefully and see that you agree or disagree with it. Five options are given beside every statement. Select the option which is most suitable in your opinion.",
    examples: [
      {
        questionNumber: "X",
        question:
          "Statement - Leader should remain firm on his decision. Choose your option",
        options: [
          "Fully agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully disagree"
        ],
        answerText:
          "There is no right or wrong in the statement. Mark your own choice."
      }
    ],
    followText:
      "Read each statement carefully and answer according to your opinion. Answering of each statement is necessary. Your answers will be kept confidential. You have two hours to answer 30 questions."
  },
  test: {
    type: "WORK_ORIENTATION",
    questions: [
      {
        questionNumber: 1,
        question:
          "A leader who lives cordially with members is very influential.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 2,
        question:
          "A good leader does not hesitate in accepting his mistake in the presence of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 3,
        question:
          "Leader should always manage his group with the opinion of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 4,
        question: "Leader is omnipotent, he can punish or reward anyone.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 5,
        question:
          "Which way should be adopted to achieve the objective of the group, leader should decide this by taking the opinion of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 6,
        question:
          "Skilful leader is he who determines all the policies himself.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 7,
        question:
          "A leader should always be attemptful so that there is no tension among the members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 8,
        question:
          "A good leader decides the policies of group only by opinion of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 9,
        question:
          "A leader should take initiative at the time of need instead of taking consent from others.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 10,
        question:
          "A good leader is he who leads the members on the policy and way which he wants and no members objects to it.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 11,
        question: "A leader should be hard to his critics.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 12,
        question:
          "A leader should do according to the opinion of majority of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 13,
        question:
          "A leader should give details of his work and report to the members from time to time.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 14,
        question: "A leader should keep the members divided in many groups.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 15,
        question:
          "A leader should not confess his mistakes in the presence of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 16,
        question:
          "A good leader plans the outlines of future programme of the group according to the opinion of members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 17,
        question:
          "A good leader can not say that any of his order may be disobeyed.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 18,
        question:
          "Leadership of a leader depends upon the mutual agreement of the members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 19,
        question: "Whatever leader say is the law for members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 20,
        question:
          "Division of a work into many small groups should be done by the leader according to the opinion of the members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 21,
        question:
          "A leader should be careful that no other member of the group tries to become leader.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 22,
        question:
          "A leader should propose different names in need of an expert so that members may choose any of them.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 23,
        question: "A leader should honour the opinion of his critics.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 24,
        question:
          "A leader should decide according to the opinions of members that which member together will do a work.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 25,
        question:
          "A leader should maintain his leadership by taking advantage of discord and mutual enmity of the members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 26,
        question:
          "A leader working according to the opinion of members is a prey of corruption.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 27,
        question:
          "A leader should provide the details of future programmes of the group to all the members.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 28,
        question:
          "A leader who cares least of the members is supposed equally to be a good and successful leader.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 29,
        question:
          "A leader should keep confidential from the members the planning and policies of work.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      },
      {
        questionNumber: 30,
        question:
          "A leader should work according to his views, he should not ask frequently the opinion of his associates.",
        options: [
          "Fully Agree",
          "Agree",
          "Uncertain",
          "Disagree",
          "Fully Disagree"
        ]
      }
    ]
  }
};

export const ASSESSMENT_PERSONALITY = {
  instructions: {
    type: "PERSONALITY",
    name: "Personality",
    text:
      "Statements in this assessment have no “right” or “wrong” answer because everyone has the right to his own views. To be able to get the best advice from your results, you will want to answer them exactly and truly.",
    examples: [
      {
        questionNumber: "X",
        question: "I like to watch team games",
        options: ["Yes", "Occasionally", "No"],
        answerText:
          "There is no right/wrong answer for this example as everyone has its own view."
      },
      {
        questionNumber: "Y",
        question: "I prefer people who",
        options: ["Are reserved", "(are) in between", "Make friends quickly"],
        answerText:
          "There is no right/wrong answer for this example as everyone has its own view."
      },
      {
        questionNumber: "Z",
        question: "Money cannot bring happiness",
        options: ["Yes (true)", "In between", "No (false)"],
        answerText:
          "There is no right/wrong answer for this example as everyone has its own view."
      },
      {
        questionNumber: "A",
        question: "Woman is to child as cat is to:",
        options: ["Kitten", "Dog", "Boy"],
        answerText:
          "In this example there is a right answer – Kitten. But there are very few such reasoning items."
      }
    ],
    followText:
      "When you answer, keep these four points in mind: You are asked not to spend time pondering.",
    followTextBullets: [
      "Give the first, natural answer as it comes to you. Of course, the questions are too short to give you all the particulars you would sometimes like to have. For instance, the above question asks you about “team games” and you might be fonder of football than basketball. But you are to reply “for the average game,” or to strike an average in situations of the kind stated. Give the best answer you can at a rate not slower than five or six a minute. You should finish in a little more than half an hour.",
      "Try not to fall back on the middle, “uncertain” answers except when the answer at either end is really impossible for you – perhaps once every four or five questions.",
      "Be sure not to skip anything, but answer every question, somehow. Some may not apply to you very well, but give your best guess. Some may seem personal; but remember that the answers are kept confidential and cannot be scored without a special stencil key. Answer to particular questions are not inspected.",
      "Answer as honestly as possible what is true of you. Do not merely choose what seems “the right thing to say” to impress the examiner."
    ]
  },
  test: {
    type: "PERSONALITY",
    questions: [
      {
        questionNumber: 1,
        question: "I have the instructions for this test clearly in mind",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 2,
        question:
          "I am ready to answer each question as truthfully as possible",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 3,
        question: "I would rather have a house",
        options: ["In a sociable suburb", "In between", "Alone in deep woods"]
      },
      {
        questionNumber: 4,
        question: "I can find enough energies to face my difficulties",
        options: ["Always", "Generally", "Seldom"]
      },
      {
        questionNumber: 5,
        question:
          "I feel a bit nervous of wild animals even when they are in strong cages",
        options: ["Yes (True)", "Uncertain", "No (False)"]
      },
      {
        questionNumber: 6,
        question: "I hold back from criticizing people and their ideas",
        options: ["Yes", "Sometimes", "No"]
      },
      {
        questionNumber: 7,
        question:
          "I make smart, sarcastic remarks to people if I think they deserve it",
        options: ["Generally", "Sometimes", "Never"]
      },
      {
        questionNumber: 8,
        question: "I prefer semiclassical music to popular tunes",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 9,
        question: "If I saw two neighbours’ children fighting, I would",
        options: ["Leave them to settle it", "Uncertain", "Reason with them"]
      },
      {
        questionNumber: 10,
        question: "On social occasions I",
        options: [
          "Readily come forward",
          "In Between",
          "Prefer to stay quietly in the background"
        ]
      },
      {
        questionNumber: 11,
        question: "It would be more interesting to be",
        options: ["A construction Worker", "Uncertain", "A writer of plays"]
      },
      {
        questionNumber: 12,
        question:
          "I would rather stop in the street to watch an artist painting than listen to some people having a quarrel",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 13,
        question:
          "I can generally put up with conceited people even though they brag or show they think too well of themselves",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 14,
        question:
          "You can almost always notice on a man’s face when he is dishonest ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 15,
        question:
          "It would be good for everyone if vacations (holidays) were longer and everyone had to take them",
        options: ["Agree", "Uncertain", "Disagree"]
      },
      {
        questionNumber: 16,
        question:
          "I would rather take the gamble of a job with possibly large but uneven earnings, than one with a steady, small salary",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 17,
        question: "I talk about my feelings",
        options: [
          "Only if necessary",
          "In between",
          "Readily, whenever I have a chance"
        ]
      },
      {
        questionNumber: 18,
        question:
          "Once in a while I have a sense of vague danger or sudden dread for reasons that I do not understand",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 19,
        question: "When criticized wrongly for something I did not do I",
        options: [
          "Have no feeling of guilt",
          "In between",
          "Still fill a bit guilty"
        ]
      },
      {
        questionNumber: 20,
        question: "Money can buy almost everything",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 21,
        question: "My decisions are governed more by my",
        options: ["Heart", "Feelings and reason equally", "Head"]
      },
      {
        questionNumber: 22,
        question:
          "Most people would be happier if they lived more with their fellows and did the same things as other",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 23,
        question:
          "I occasionally get puzzled, when looking in a mirror, as to which is my right and left ",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 24,
        question: "When talking, I like",
        options: [
          "To say things, just as they occur to me",
          "In Between",
          "To get my thoughts well organised first"
        ]
      },
      {
        questionNumber: 25,
        question:
          "When something really makes me furious, I find calm down again quite quickly",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 26,
        question:
          "With the same hours and pay, it would be more interesting to be",
        options: [
          "A carpenter or cook",
          "Uncertain",
          "A waiter in a good restaurant"
        ]
      },
      {
        questionNumber: 27,
        question: "I have been elected to",
        options: ["Only a few offices", "Several", "Many offices"]
      },
      {
        questionNumber: 28,
        question: "“Spade” is to “dig” as “knife” is to",
        options: ["Sharp", "Cut", "Point"]
      },
      {
        questionNumber: 29,
        question:
          "I sometimes can’t get to sleep because an idea keeps running through my mind",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 30,
        question:
          "In my personal life I reach the goals I set, almost, all the time",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 31,
        question: "An out-dated law should be changed",
        options: [
          "Only after considerable discussion",
          "In Between",
          "Promptly"
        ]
      },
      {
        questionNumber: 32,
        question:
          "I am uncomfortable when I work on a project requiring quick action affecting others",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 33,
        question:
          "Most of the people I know would rate me as an amusing talker",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 34,
        question: "When I see “sloppy,” untidy people I",
        options: ["Just accept it", "In Between", "Get disgusted and annoyed"]
      },
      {
        questionNumber: 35,
        question:
          "I get slightly embarrassed if I suddenly become the focus of attention in a social group",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 36,
        question:
          "I am always glad to join a large gathering, for example, a party, dance, or public meeting",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 37,
        question: "In school I preferred (or prefer)",
        options: ["Music", "Uncertain", "Handwork and crafts"]
      },
      {
        questionNumber: 38,
        question:
          "When I have been put in charge of something, I insist that my instructions are followed or else I resign",
        options: ["Yes", "Sometimes", "No"]
      },
      {
        questionNumber: 39,
        question: "For parents, it is more important to",
        options: [
          "Help their children develop their affection",
          "In Between",
          "Teach their children how to control emotion"
        ]
      },
      {
        questionNumber: 40,
        question: "In a group task I would rather",
        options: [
          "Try to improve arrangements",
          "In Between",
          "Keep the records and see the rules are followed"
        ]
      },
      {
        questionNumber: 41,
        question:
          "I feel a need every now and then to engage in a tough physical activity",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 42,
        question:
          "I would rather mix with polite people than rough, rebellious individuals",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 43,
        question:
          "I feel terribly dejected when people criticize me in a group",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 44,
        question: "If I am called in by my boss, I",
        options: [
          "Make it a chance to ask for something want",
          "In Between",
          "Fear I’ve done something wrong"
        ]
      },
      {
        questionNumber: 45,
        question: "What this world needs is",
        options: [
          "More steady and “solid” citizens",
          "Uncertain",
          "More “idealists” with plans for a better world"
        ]
      },
      {
        questionNumber: 46,
        question:
          "I am always keenly aware of attempts at propaganda in things I read",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 47,
        question: "As a teenager, I joined in school sports",
        options: ["Occasionally", "Fairly Often", "A great deal"]
      },
      {
        questionNumber: 48,
        question:
          "I keep my room well organised, with things in known places almost all the time",
        options: ["Yes", "In between", "No"]
      },
      {
        questionNumber: 49,
        question:
          "I sometimes get in a state of tension and turmoil as I think of the day’s happenings",
        options: ["Yes", "In between", "No"]
      },
      {
        questionNumber: 50,
        question:
          "I sometimes doubt whether people I am talking to are really interested in what I am saying",
        options: ["Yes", "In between", "No"]
      },
      {
        questionNumber: 51,
        question: "If I had to choose, I would rather be",
        options: ["A Forester", "Uncertain", "A high school teacher"]
      },
      {
        questionNumber: 52,
        question: "For special holidays and birthdays, I",
        options: [
          "Like to give personal presents",
          "Uncertain",
          "Feel that buying presents is a bit of a nuisance"
        ]
      },
      {
        questionNumber: 53,
        question: "“Tired” is to “work” as “proud” is to",
        options: ["Smile", "Success", "Happy"]
      },
      {
        questionNumber: 54,
        question:
          "Which of the following items is different in kind from the others",
        options: ["Candle", "Moon", "Electric Light"]
      },
      {
        questionNumber: 55,
        question: "I have been let down by my friends",
        options: ["Hardly ever", "Occasionally", "Quite a lot"]
      },
      {
        questionNumber: 56,
        question:
          "I have some characteristics in which I feel definitely superior to most people ",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 57,
        question: "When I get upset, I try hard to hide my feeling from others",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 58,
        question: "I like to go out to a show or entertainment",
        options: [
          "More than once a week (more than average)",
          "About once a week (average)",
          "Less than once a week (less than average)"
        ]
      },
      {
        questionNumber: 59,
        question:
          "I think that plenty of freedom is more important than good manners and respect for the law",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 60,
        question:
          "I tend to keep quite in presence of senior persons (people of greater experience, age, or rank)",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 61,
        question: "I find it hard to address or recite to a large group",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 62,
        question:
          "I have a good sense of direction (find it easy to tell which is North, South, East, or West) when in a strange place",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 63,
        question: "If someone got mad at me, I would",
        options: ["Try to calm him down", "Uncertain", "Get irritated"]
      },
      {
        questionNumber: 64,
        question:
          "When I read an unfair magazine, article, I am more inclined to forget it than to feel like “hitting back”",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 65,
        question:
          "My memory tends to drop a lot of unimportant, trivial things, for example, names of streets or stores in town",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 66,
        question:
          "I could enjoy the life of an animal doctor, handling diseases and surgery of animals.",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 67,
        question:
          "I eat my food with gusto, not always so carefully and properly as some people",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 68,
        question:
          "There are times when I don’t feel in the right mood to see anyone",
        options: ["Very Rarely", "In Between", "Quite often"]
      },
      {
        questionNumber: 69,
        question:
          "People sometimes warn me that I show my excitement in voice and manner too obviously",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 70,
        question:
          "As a teenager, if I differed my opinion from my parents, I usually",
        options: [
          "Kept my own opinions",
          "In Between",
          "Accepted their authority"
        ]
      },
      {
        questionNumber: 71,
        question:
          "I would prefer to have my office of my own, not sharing it with another person",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 72,
        question:
          "I would rather enjoy the life quietly in my own way than be admired for my achievements",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 73,
        question: "I feel mature in most things",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 74,
        question:
          "I find myself upset rather than helped by the kind of criticism that many people offer one",
        options: ["Often", "Occasionally", "Never"]
      },
      {
        questionNumber: 75,
        question:
          "I am always able to keep the expression of my feelings under exact control",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 76,
        question: "In starting a useful invention, I would prefer",
        options: [
          "Working on it in a laboratory",
          "Uncertain",
          "Selling it to people"
        ]
      },
      {
        questionNumber: 77,
        question: "“Surprise” is to “strange” as “fear” is to",
        options: ["Brave", "Anxious", "Terrible"]
      },
      {
        questionNumber: 78,
        question:
          "Which of the following fractions is not in the same class as others",
        options: ["3/7", "3/9", "3/11"]
      },
      {
        questionNumber: 79,
        question:
          "Some people seem to ignore or avoid me, although I don’t know why",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 80,
        question:
          "People treat me less reasonably than my good intentions deserve",
        options: ["Often", "Occasionally", "Never"]
      },
      {
        questionNumber: 81,
        question:
          "The use of foul language, even when it is not in a mixed group of men and women, still disgusts me",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 82,
        question: "I have decidedly fewer friends than most people do ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 83,
        question:
          "I would hate to be where there wouldn’t be a lot of people to talk to",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 84,
        question:
          "People sometimes call me careless, even though they think I am a likable person",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 85,
        question:
          "“Stage-fright” in various social situations is something I have experienced",
        options: ["Quite often", "Occasionally", "Hardly Never"]
      },
      {
        questionNumber: 86,
        question:
          "When I am in a small group, I am content to sit back and let others do most of the talking",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 87,
        question: "I prefer reading",
        options: [
          "A realistic account of military or political battles",
          "Uncertain",
          "A sensitive, imaginative novel"
        ]
      },
      {
        questionNumber: 88,
        question:
          "When bossy people try to “push me around”, I do just the opposite of what they wish",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 89,
        question:
          "Business superiors or members of my family as a rule, find fault with me only when there is real cause",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 90,
        question:
          "In streets or stores, I dislike the way some persons stare at people ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 91,
        question: "On a long journey, I would prefer to ",
        options: [
          "Read something profound, but interesting",
          "Uncertain",
          "Pass the time talking casually with a fellow passenger"
        ]
      },
      {
        questionNumber: 92,
        question:
          "In a situation which may become dangerous, believe in making a fuss and speaking up even if calmness and politeness are lost",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 93,
        question: "If acquaintances treat me badly and show they dislike me",
        options: [
          "It doesn’t upset me a bit",
          "In between",
          "I tend to get downhearted"
        ]
      },
      {
        questionNumber: 94,
        question:
          "I find it embarrassing to have praise or complements bestowed on me",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 95,
        question: "I would rather have a job with",
        options: [
          "A fixed, certain salary",
          "In Between",
          "A larger salary, which depends on my constantly persuading people I am worth it"
        ]
      },
      {
        questionNumber: 96,
        question: "To keep informed, I like",
        options: [
          "To discuss issues with people",
          "In between",
          "To rely on the actual news reports"
        ]
      },
      {
        questionNumber: 97,
        question:
          "I like to take an active part in social affairs, committee work, etc",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 98,
        question:
          "In carrying out a task, I am not satisfied unless even the minor details are given close attention ",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 99,
        question: "Quite small setbacks occasionally irritate me too much",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 100,
        question:
          "I am always a sound sleeper, never walking or talking in my sleep",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 101,
        question: "It would be more interesting to work in a business",
        options: [
          "Talking to customers",
          "In between",
          "Keeping official accounts and records"
        ]
      },
      {
        questionNumber: 102,
        question: "“Size” is to “length” as “dishonest” is to",
        options: ["Prison", "Sin", "Stealing"]
      },
      {
        questionNumber: 103,
        question: "AB is to dc as SR is to",
        options: ["qp", "pq", "tu"]
      },
      {
        questionNumber: 104,
        question: "When people are unreasonable I just",
        options: ["Keep quite", "Uncertain", "Despise them"]
      },
      {
        questionNumber: 105,
        question: "If people talk loudly while I am listening to music, I",
        options: [
          "Can keep my mind on music and not be bothered",
          "In Between",
          "Find it spoils my enjoyment and annoys me"
        ]
      },
      {
        questionNumber: 106,
        question: "I think I am better described as",
        options: ["Polite & quite", "In between", "Forceful"]
      },
      {
        questionNumber: 107,
        question:
          "I attend social functions only when I have to, and stay away from any other time",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 108,
        question:
          "To be cautious and expect little is better than to be happy at heart, always expecting success",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 109,
        question: "In thinking of difficulties in my work, I",
        options: [
          "Try to plan ahead, before I meet them",
          "In Between",
          "Assume I can handle them when they come"
        ]
      },
      {
        questionNumber: 110,
        question: "I find it easy to mingle among people at social gathering",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 111,
        question:
          "When a bit of diplomacy and persuasion are needed to get people moving, I generally the one asked to do it",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 112,
        question: "It would be more interesting to be",
        options: [
          "A guidance worker helping young people find job",
          "Uncertain",
          "A manager in efficiency engineering"
        ]
      },
      {
        questionNumber: 113,
        question:
          "If I am quite sure that a person is unjust or behaving selfishly, I show him up, even if it takes some trouble",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 114,
        question:
          "I sometimes make foolish remarks in fun, just to surprise people and see what they will say",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 115,
        question:
          "I would enjoy being a newspaper writer on drama, concerts, opera, etc",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 116,
        question:
          "I never feel the urge to doodle and fidget when kept sitting still at the meeting",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 117,
        question:
          "If someone tells me something which I know is wrong, I am more likely to say to myself",
        options: [
          "“He is a liar”",
          "In between",
          "“Apparently he is misinformed”"
        ]
      },
      {
        questionNumber: 118,
        question:
          "I feel some punishment is coming to me even when I have done nothing wrong",
        options: ["Often", "Occasionally", "Never"]
      },
      {
        questionNumber: 119,
        question:
          "The idea that sickness comes as much from mental as physical causes is much exaggerated",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 120,
        question:
          "The pomp and splendour of any big state ceremony are things which should be preserved",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 121,
        question:
          "It bothers me if people think I am too unconventional or odd",
        options: ["A lot", "Somewhat", "Not at all"]
      },
      {
        questionNumber: 122,
        question: "In constructing something I would rather work",
        options: ["With a committee", "Uncertain", "On my own"]
      },
      {
        questionNumber: 123,
        question: "I have moments when it’s hard to stop a mood of self-pity",
        options: ["Often", "Occasionally", "Never"]
      },
      {
        questionNumber: 124,
        question: "Often, I get angry with people too quickly",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 125,
        question:
          "I can always change old habits without difficulty and without slipping back",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 126,
        question: "If the earnings would be same, I would rather be",
        options: ["A lawyer", "Uncertain", "A navigator or pilot"]
      },
      {
        questionNumber: 127,
        question: "“Better” is to “worst” as “slower” is to",
        options: ["Fast", "Best", "Quicker"]
      },
      {
        questionNumber: 128,
        question:
          "Which of the following should come next at the end of this row of letters: X0000XX000XXX",
        options: ["0XXX", "00XX", "X000"]
      },
      {
        questionNumber: 129,
        question:
          "When the time comes for something I have planned and looked forward to, I occasionally do not feel up to going",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 130,
        question:
          "I can work carefully on most things without being bothered by people making a lot of noise around me",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 131,
        question:
          "I occasionally tell strangers things that seem to me important, regardless of whether they ask about them",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 132,
        question:
          "I spend much of my spare time talking with friends about social events enjoyed in the past ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 133,
        question: "I enjoy doing “daring”, foolhardy things “just for fun”",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 134,
        question: "I find the sight of an untidy room very annoying",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 135,
        question: "I consider myself a very sociable, outgoing person ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 136,
        question: "In social contacts I",
        options: [
          "Show my emotions as I wish",
          "In between",
          "Keep my emotions to myself"
        ]
      },
      {
        questionNumber: 137,
        question: "I enjoy music that is",
        options: [
          "Light, dry, and brisk",
          "In Between",
          "Emotional & Sentimental"
        ]
      },
      {
        questionNumber: 138,
        question: "I admire beauty of a poem more than that of a well-made gun",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 139,
        question: "If a good remark of mine is passed by, I",
        options: [
          "Let it go",
          "In between",
          "Give people a chance to hear it again"
        ]
      },
      {
        questionNumber: 140,
        question:
          "I would like to work as a probation officer with criminals on parole",
        options: ["Yes", "In between", "No"]
      },
      {
        questionNumber: 141,
        question:
          "One should be careful about mixing with kinds of strangers, since there are dangers, infections and so on",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 142,
        question:
          "In travelling abroad, I would rather go on expertly conducted tour than plan by myself the places I wish to visit",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 143,
        question:
          "I am properly regarded as only a plodding half-successful person",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 144,
        question:
          "If people take advantage of my friendliness, I do not resent it and I soon forget",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 145,
        question:
          "If a heated argument developed between other members taking part in a group discussion, I would",
        options: [
          "Like to see a ”winner”",
          "In Between",
          "Wish that it would be smoothed over"
        ]
      },
      {
        questionNumber: 146,
        question:
          "I like to do my planning alone, without interruptions and suggestions from others",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 147,
        question:
          "I sometimes let my actions get swayed by feeling of jealousy",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 148,
        question:
          "I firmly believe “the boss may not always be right, but he always has the right to be boss”",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 149,
        question: "I get tense as I think of all the things lying ahead of me",
        options: ["Yes", "Sometimes", "No"]
      },
      {
        questionNumber: 150,
        question:
          "If people shout suggestions when I am playing a game, it doesn’t upset me",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 151,
        question: "It would be more interesting to be",
        options: ["An artist", "Uncertain", "A secretary running a club"]
      },
      {
        questionNumber: 152,
        question:
          "Which of the following words does not properly belong with the others",
        options: ["Any", "Some", "Most"]
      },
      {
        questionNumber: 153,
        question: "“Flame” is to “heat” as “rose” is to",
        options: ["Thorn", "Red petals", "Scent"]
      },
      {
        questionNumber: 154,
        question: "I have vivid dreams, disturbing my sleep",
        options: ["Often", "Occasionally", "Practically never"]
      },
      {
        questionNumber: 155,
        question:
          "If the odds are really against something’s being a success, I still believe in taking the risk",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 156,
        question:
          "I like it when I know so well what the group has to do that, I naturally become the one in command",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 157,
        question:
          "I would rather dress with quite correctness than with eye-catching personal style",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 158,
        question:
          "An evening with a quite hobby appeals to me more than a lively party",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 159,
        question:
          "I close my mind to well-meant suggestions of others, even though I know I shouldn’t",
        options: ["Occasionally", "Hardly ever", "Never"]
      },
      {
        questionNumber: 160,
        question:
          "I always make it a point, in deciding anything, to refer to basic rules of right and wrong",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 161,
        question: "I somewhat dislike having a group watch me at work",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 162,
        question:
          "Because it is not always possible to get things done by gradual, reasonable method. It is sometimes necessary to use force",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 163,
        question: "In school, I preferred (or prefer)",
        options: ["English", "Uncertain", "Mathematics or arithmetic"]
      },
      {
        questionNumber: 164,
        question:
          "I have sometimes been troubled by people’s saying bad things about me behind my back, with no grounds at all",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 165,
        question: "Talk with ordinary, habit-bound, conventional people",
        options: [
          "Is often quite interesting and has a lot to it",
          "In Between",
          "Annoys me because it deals with trifles and lacks depth"
        ]
      },
      {
        questionNumber: 166,
        question:
          "Some things make me so angry that I find it best not to speak",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 167,
        question: "In education, it is more important to",
        options: [
          "Give the child enough affection",
          "In between",
          "Have the child learn desirable habits and attitudes"
        ]
      },
      {
        questionNumber: 168,
        question:
          "People regard me as a solid, undisturbed person, unmoved by ups and downs in circumstances",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 169,
        question:
          "I think society should let reason lead it to new customs and throw aside old habits or mere traditions",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 170,
        question: "I think it’s more important in the modern world to solve",
        options: [
          "The question of moral purpose",
          "Uncertain",
          "The political difficulties"
        ]
      },
      {
        questionNumber: 171,
        question: "I learn better by",
        options: [
          "Reading a well-written book",
          "In Between",
          "Joining a group discussion"
        ]
      },
      {
        questionNumber: 172,
        question:
          "I like to go my own ways instead of acting on approved rules",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 173,
        question:
          "I like to wait till I am sure that what I am saying is correct, before I put forth an argument ",
        options: ["Always", "Generally", "Only if it’s practicable"]
      },
      {
        questionNumber: 174,
        question:
          "Small things sometimes “get on my nerves” unbearably, though I realise they are trivial ",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 175,
        question:
          "I don’t often say things on the spur of the moment that I greatly regret",
        options: ["True", "Uncertain", "False"]
      },
      {
        questionNumber: 176,
        question: "If asked to work with a charity drive, I would",
        options: ["Accept", "Uncertain", "Politely say I am too busy"]
      },
      {
        questionNumber: 177,
        question:
          "Which of the following words does not belong with the others",
        options: ["Wide", "Zigzag", "Straight"]
      },
      {
        questionNumber: 178,
        question: "“Soon” is to “never” as” near” is to",
        options: ["Nowhere", "Far", "Away"]
      },
      {
        questionNumber: 179,
        question: "If I make an awkward social mistake, I can soon forget it",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 180,
        question:
          "I am known as an “idea man” who almost always puts forward some ideas on a problem",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 181,
        question: "I think I am better at showing",
        options: [
          "Nerve in meeting challenges",
          "Uncertain",
          "Tolerance of other people’s wishes"
        ]
      },
      {
        questionNumber: 182,
        question: "I am considered a very enthusiastic person",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 183,
        question:
          "I like a job that offers change, variety, and travel even if it involves some danger",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 184,
        question:
          "I am a fairly strict person insisting on always doing things as correctly as possible",
        options: ["True", "In Between", "False"]
      },
      {
        questionNumber: 185,
        question:
          "I enjoy work that requires conscientious, or exacting skills",
        options: ["Yes", "In Between", "No"]
      },
      {
        questionNumber: 186,
        question: "I am the energetic type who keeps busy",
        options: ["Yes", "Uncertain", "No"]
      },
      {
        questionNumber: 187,
        question:
          "I am sure there are no questions that I have skipped or failed to answer properly",
        options: ["Yes", "Uncertain", "No"]
      }
    ]
  }
};

export const ASSESSMENT_INTEREST = {
  instructions: {
    type: "INTEREST",
    name: "Interest",
    text:
      "The main objective of this test is to know your educational interest. There are no right or wrong responses, you have to mark your responses based on your preferences.",
    examples: [
      {
        questionNumber: "X",
        question: "I like interacting with new people.",
        options: ["Yes", "No"],
        answer: 0,
        answerText:
          "Select Yes or No based on your liking. There are no right/wrong answers."
      },
      {
        questionNumber: "Y",
        question: "I like reading and collecting books",
        options: ["Yes", "No"],
        answer: 1,
        answerText:
          "Make sure no items are left unresponded. Feel free to ask any queries"
      }
    ],
    followText:
      "There is no time limit to answer 78 questions but try not to wait on any item for too long."
  },
  test: {
    type: "INTEREST",
    questions: [
      {
        questionNumber: 1,
        question:
        "I enjoy problem-solving using logical reasoning.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 2,
        question:
          "Learning more about gadgets and machinery and trying to fix them intrigues me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 3,
        question:
          "I am inclined towards analysing and acquiring knowledge about the environment, the earth, space, and the planets.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 4,
        question: "I enjoy fixing things when they break. I find pleasure in mending broken items.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 5,
        question:
          "Learning a new coding language seems very interesting to me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 6,
        question:
          "I find scientific theories fascinating and like reading about both recent and historical discoveries or innovations.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 7,
        question:
          "I like to analyse abstract concepts.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 8,
        question:
          "I find it easy to apply mathematical concepts to understand real-life problems.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 9,
        question:
          "I like to imagine new ways of doing monotonous things or simply enjoy taking creative leverage.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 10,
        question:
          "I am keen on finding tech-based solutions for social problems.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 11,
        question: "I like helping others in all aspects of life and finding solutions to the problems they might be facing.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 12,
        question:
          "I am interested in studying the functions of the human body or organisms in general.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 13,
        question:
          "I like interacting with others and getting to know them better.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 14,
        question: "I like to pay close attention to details.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 15,
        question:
          "I have investigative interests. I prefer to look at the core of the problems and not just the surface.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 16,
        question:
          "I am interested in knowing more about the different communities and ethnicities that people come from.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 17,
        question:
          "Advising people to make healthier diet and lifestyle choices is something I am interested in pursuing as a career.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 18,
        question:
          "Constantly elevating my knowledge in my chosen field keeps me motivated.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 19,
        question: "Trying to learn more about the medications required for different ailments deeply interests me.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 20,
        question:
          "The different species of flora and fauna should be explored as thoroughly as other organisms.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 21,
        question:
          "I like to invest my energy in helping children learn and develop adequately.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 22,
        question:
          "Nurturing and sustaining plant crops is something I feel passionate about.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 23,
        question: "I find the share market interesting.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 24,
        question:
          "I am confident in my abilities to run a successful business.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 25,
        question:
          "I like making financial decisions, so I may think of pursuing a career involving financial management.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 26,
        question:
          "I can persuade people.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 27,
        question:
          "I feel I am good at maintaining interpersonal relationships.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 28,
        question:
          "I like to negotiate.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 29,
        question:
          "I am interested in the workings of the world economy.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 30,
        question:
          "I like to plan and organise activities systematically.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 31,
        question: "Publicising anything comes naturally to me.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 32,
        question:
          "I like to actively participate in activities involving a large number of people.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 33,
        question:
          "Learning more about the cognitive and behavioural aspects of human beings intrigues me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 34,
        question: "Analysing and interpreting maps is enjoyable for me.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 35,
        question:
          "I am interested in trying to understand other people’s needs and would like to engage in social work.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 36,
        question:
          "Learning about our society and its history intrigues me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 37,
        question: "I like to use different art forms as a way of expressing myself.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 38,
        question:
          "I enjoy managing and doing administrative work.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 39,
        question: "I wish to serve my country.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 40,
        question: "I like to read and write.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 41,
        question:
          "I enjoy studying political ideologies.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 42,
        question:
          "I would like to play sports competitively or professionally. For example: cricket, football, basketball, badminton, lawn tennis, running, javelin throw, swimming, online gaming, carrom, etc.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 43,
        question:
          "I like to analyse and understand current affairs and developments around the world.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 44,
        question: "I like to work in a corporate setting.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 45,
        question: "I like to take charge.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 46,
        question:
          "I enjoy being in a position of power and like to control situations around me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 47,
        question: "I like to focus on the smaller parts while thinking about the bigger picture.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 48,
        question:
          "I like investing my energy to come up with innovative ideas and solutions.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 49,
        question:
          "I like a physically active lifestyle.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 50,
        question:
          "I like to play or work in a large group setting.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 51,
        question: "I like to pay attention to the structural and functional details of buildings and other living spaces.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 52,
        question: "I prefer to work or play by myself.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 53,
        question: "I would like to spend a significant amount of time taking care of animals.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 54,
        question:
          "I am interested in business development and expansion.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 55,
        question: "I am interested in travelling around the world for the better part of my job.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 56,
        question:
          "I would like to get into a profession that has flexible working hours.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 57,
        question: "I like to take my time when making decisions.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 58,
        question: "I like to work on multiple tasks simultaneously.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 59,
        question:
          "I like to assist people by extending my services.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 60,
        question:
          "I enjoy being in front of the camera.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 61,
        question: "I like being in the limelight.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 62,
        question:
          "I like to express my perspective by enrapturing stories through a camera.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 63,
        question: "I enjoy improving the visual appeal and usability of already existing items. I like it when my work is visually appealing.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 64,
        question:
          "I like to bring my imagination to life.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 65,
        question:
          "I like to consider the legal aspects of things.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 66,
        question:
          "I like to take calculated risks in order to support and enhance things or people with potential.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 67,
        question:
          "I can easily put myself in other people’s shoes and enjoy seeing things from their perspective.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 68,
        question:
          "I am interested in exploring and experimenting with various cuisines and their ingredients.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 69,
        question:
          "I am inclined towards upholding the honour of my country.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 70,
        question:
          "Understanding the complexities of the chemical properties and reactions of various substances interests me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 71,
        question:
          "I am interested in examining the sport's strategies, techniques, and records.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 72,
        question:
          "I enjoy interpreting and analysing data.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 73,
        question: "I am interested in learning about the world and gaining philosophical insight.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 74,
        question:
          "Gaining proficiency in different languages interests me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 75,
        question:
          "I like to deliver entertaining performances.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 76,
        question: "I find working with musical beats and rhythms pleasurable and satisfying.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 77,
        question: "I like to stay well-informed about current trends.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 78,
        question:
          "I am fascinated by the idea of working on or in an aeroplane.",
          options: [
            "Yes",
            "No"
          ]
      },
    ]
  }
};

export const ASSESSMENT_INTEREST_B = {
  instructions: {
    type: "INTEREST",
    name: "Interest",
    text:
      "The main objective of this test is to know your educational interest. There are no right or wrong responses, you have to mark your responses based on your preferences.",
    examples: [
      {
        questionNumber: "X",
        question: "I like interacting with new people.",
        options: ["Yes", "No"],
        answer: 0,
        answerText:
          "Select Yes or No based on your liking. There are no right/wrong answers."
      },
      {
        questionNumber: "Y",
        question: "I like reading and collecting books",
        options: ["Yes", "No"],
        answer: 1,
        answerText:
          "Make sure no items are left unresponded. Feel free to ask any queries"
      }
    ],
    followText:
      "There is no time limit to answer 78 questions but try not to wait on any item for too long."
  },
  test: {
    type: "INTEREST",
    questions: [
      {
        questionNumber: 1,
        question:
        "I enjoy problem-solving using logical reasoning.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 2,
        question:
          "I am interested in learning more about electronic items and machinery and trying to fix them.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 3,
        question:
          "I am inclined towards analysing and acquiring knowledge about the environment, the earth, space, and the planets.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 4,
        question: "I enjoy fixing things when they break.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 5,
        question:
          "I find coding interesting and would like to learn more about it.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 6,
        question:
          "I find scientific theories fascinating and like reading about both recent and historical discoveries or innovations.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 7,
        question:
          "I like to study/examine out of the box concepts.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 8,
        question:
          "I like to use mathematical concepts in everyday-life.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 9,
        question:
          "I like to come up with new ways to do repetitive tasks or simply enjoy giving a creative twist to them.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 10,
        question:
          "I am eager to find technology based solutions for social problems.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 11,
        question: "I like helping others in difficult situations and finding solutions to the problems they might be facing.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 12,
        question:
          "I am interested in studying the functions of the human body or organisms in general.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 13,
        question:
          "I like interacting with others and getting to know them better, I like talking to others and getting to know them better.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 14,
        question: "I like to pay close attention to details.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 15,
        question:
          "I would rather not just look at the external part of the problem but dig deeper to find it’s solution.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 16,
        question:
          "I am interested in knowing more about the different communities and cultural backgrounds that people come from.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 17,
        question:
          "I am interested in helping people make healthier food and lifestyle choices",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 18,
        question:
          "I like challenging myself in terms of my knowledge in my chosen field.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 19,
        question: "I am interested in learning more about medicines and its uses for different diseases and disorders.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 20,
        question:
          "I believe that plants need to be studied as deeply as other organisms.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 21,
        question:
          "I like spending time with children and helping them learn and grow properly.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 22,
        question:
          "I am interested in growing and maintaining plant crops.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 23,
        question: "I am interested to understand how the exchange of shares/stocks work and how they benefit an individual or company in monetary ways.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 24,
        question:
          "I am confident in my abilities to run a successful business.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 25,
        question:
          "I like making financial decisions, so I may think of pursuing a career involving financial management.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 26,
        question:
          "I can convince people to follow my guidance.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 27,
        question:
          "I feel I am good at maintaining interpersonal relationships.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 28,
        question:
          "I like to discuss and debate the pros and cons of an issue.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 29,
        question:
          "I like to study how the world economy works.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 30,
        question:
          "I like to organise things.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 31,
        question: "I feel I can promote anything.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 32,
        question:
          "I like to actively participate in activities involving a large number of people.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 33,
        question:
          "I am interested in learning about human behaviour and the mind.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 34,
        question: "I enjoy reading and interpreting maps.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 35,
        question:
          "I am interested in trying to understand other people’s needs and would like to engage in social work.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 36,
        question:
          "The past and learning about society intrigues me, History makes me curious and makes me learn more about society.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 37,
        question: "I like to express myself through different art forms like drawing, painting, singing, dancing or any other art form.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 38,
        question:
          "I enjoy doing management related tasks.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 39,
        question: "I wish to serve my country.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 40,
        question: "I like to read and write.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 41,
        question:
          "I enjoy studying political ideologies.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 42,
        question:
          "I would like to play sports competitively or professionally. For example: cricket, football, basketball, badminton, lawn tennis, running, javelin throw, swimming, online gaming, carrom, etc.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 43,
        question:
          "I like to analyse and understand current affairs and developments around the world.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 44,
        question: "I like to work in a corporate setting.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 45,
        question: "I like to take charge.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 46,
        question:
          "I enjoy being in a position of power and like to control situations around me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 47,
        question: "I like to focus on the smaller parts while thinking about the bigger picture.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 48,
        question:
          "I like investing my energy to come up with innovative ideas and solutions.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 49,
        question:
          "I like a physically active lifestyle.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 50,
        question:
          "I like to play or work in a large group setting.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 51,
        question: "I like to pay attention to the structural and functional details of buildings and other living spaces.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 52,
        question: "I prefer to work or play by myself.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 53,
        question: "I would like to spend a significant amount of time taking care of animals.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 54,
        question:
          "I am interested in growing and expanding businesses.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 55,
        question: "I am interested in travelling around the world for the better part of my job.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 56,
        question:
          "I would like to get into a profession that has flexible working hours.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 57,
        question: "I like to take my time when making decisions.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 58,
        question: "I like to work on multiple tasks simultaneously.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 59,
        question:
          "I like to assist people by extending my services.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 60,
        question:
          "I enjoy being in front of the camera.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 61,
        question: "I like being in the limelight.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 62,
        question:
          "I like to capture the world from my point of view with the help of a camera.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 63,
        question: "I enjoy improving the visual appeal and usability of already existing items. I like it when my work is visually appealing.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 64,
        question:
          "I like to bring my imagination to life.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 65,
        question:
          "I like to consider the legal aspects of things.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 66,
        question:
          "I like to take calculated risks in order to support and enhance things or people with potential.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 67,
        question:
          "I am interested in putting myself in other people’s shoes and seeing things from their point of view.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 68,
        question:
          "I am interested in exploring and experimenting with various cuisines and their ingredients.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 69,
        question:
          "I am devoted to keeping the pride and respect of my country.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 70,
        question:
          "Understanding the complexities of the chemical properties and reactions of various substances interests me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 71,
        question:
          "I am interested in examining the sport's strategies, techniques, and records.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 72,
        question:
          "I enjoy interpreting and analysing data.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 73,
        question: "I am interested in learning about the world and closely reflecting on my thoughts about it.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 74,
        question:
          "Gaining proficiency in different languages interests me.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 75,
        question:
          "I like to give entertaining performances.",
          options: [
            "Yes",
            "No"
          ]
      },
      {
        questionNumber: 76,
        question: "I enjoy working with musical beats and rhythms.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 77,
        question: "I like to stay up to date with current trends.",
        options: [
          "Yes",
          "No"
        ]
      },
      {
        questionNumber: 78,
        question:
          "I am fascinated by the idea of working on or in an aeroplane.",
          options: [
            "Yes",
            "No"
          ]
      },
    ]
  }
};
