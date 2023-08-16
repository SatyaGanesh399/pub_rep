type slideProp = {
  heading: string;
  text?: string;
  imageURl: string;
};

type aboutusSlideProp = {
  heading: string;
  postion: string;
  text?: string;
  imageURl: string;
};

export const SLIDER_BLOG_DATA: slideProp[] = [
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo",
    text: "ut vehicula justo maximus in. Vivamus porttitor vehicula.",
    imageURl: "blog_image.png"
  }
];

export const SLIDER_VIDEO_DATA: slideProp[] = [
  {
    heading: "Nunc laoreet turpis justo justo nunc laoreet nunc",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo justo nunc laoreet nunc",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo justo nunc laoreet nunc",
    imageURl: "blog_image.png"
  },
  {
    heading: "Nunc laoreet turpis justo justo nunc laoreet nunc",
    imageURl: "blog_image.png"
  }
];

export const SLIDER_TESTIMONIAL_DATA: slideProp[] = [
  {
    heading: "Nupur, B.Des.",
    text:
      "I had no clue about what to do! The psychometric test gave me insights and now I love every day of college.",
    imageURl: "profile_1.png"
  },
  {
    heading: "Kshitij, BBA",
    text:
      "I found the counselling process very innovative. The experience gave me so much confidence in my abilities.",
    imageURl: "profile_2.png"
  },
  {
    heading: "Abhijay, 12th",
    text:
      "My counsellor was very supportive. The report helped me in designing my future plans along with colleges & entrance exams",
    imageURl: "profile_3.png"
  },
  {
    heading: "Deepak, B.Com.",
    text:
      "Great experience! The aptitude & personality results are very accurate, one to one session with counsellor was very insightful.",
    imageURl: "profile_4.png"
  },
  {
    heading: "Ishan, 12th",
    text:
      "Wonderful interaction with the counsellor. This experience gave me the clarity about choosing the right career option & college.",
    imageURl: "profile_5.png"
  }
];

export const SLIDER_ABOUTUS_DATA: aboutusSlideProp[] = [
  {
    heading: "Ankit Aggarwal",
    postion: "Co-Founder",
    text:
      "Ankit, an alumnus of GGSIP University, holds experience in technical and managerial endeavours. His associations include the Smile Foundation, Malsawm Initiative, Delhi Capitals, Dabang Delhi Kabaddi Club, ezKarma.",
    imageURl: ""
  },
  {
    heading: "Jaya Sukul",
    postion: "Co-Founder",
    text:
      "Jaya, an alumnus of Lady Sri Ram College, DU and AIIMS is one of the leading clinical psychologists in Delhi NCR with expertise in Brain Mapping, Behaviour Analysis and Psycho-dynamic therapy.",
    imageURl: ""
  },
  {
    heading: "Ankit Aggarwal",
    postion: "Co-Founder",
    text:
      "Ankit, an alumnus of GGSIP University, holds experience in technical and managerial endeavours. His associations include the Smile Foundation, Malsawm Initiative, Delhi Capitals, Dabang Delhi Kabaddi Club, ezKarma.",
    imageURl: ""
  },
  {
    heading: "Jaya Sukul",
    postion: "Co-Founder",
    text:
      "Jaya, an alumnus of Lady Sri Ram College, DU and AIIMS is one of the leading clinical psychologists in Delhi NCR with expertise in Brain Mapping, Behaviour Analysis and Psycho-dynamic therapy.",
    imageURl: ""
  }
];

export const DASHBOARD_SIDEBAR_DATA = [
  {
    name: "Profile",
    displayName: "Profile",
    type: "profile",
    decodeCheck : true,
    premiumCheck: false
  },
  {
    name: "Introduction",
    displayName: "Introduction",
    type: "intro",
    decodeCheck : true,
    premiumCheck: true
  },
  {
    name: "Alpha",
    displayName: "Verbal Ability",
    premiumCheck: true,
    type: "verbal",
    decodeCheck : false,
    subMenu: true,
    menuItems: [
      {
        name: "Alpha 1",
        displayName: "Verbal Ability",
        type: "verbal",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 2",
        displayName: "Closure Ability",
        type: "closure",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 3",
        displayName: "Clerical Ability",
        type: "clerical",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 4",
        displayName: "Numerical Ability",
        type: "numerical",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 5",
        displayName: "Spatial Ability",
        type: "spatial",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 6",
        displayName: "Reasoning Ability",
        type: "reasoning",
        decodeCheck : false,
        premiumCheck: true
      },
      {
        name: "Alpha 7",
        displayName: "Mechanical Ability",
        type: "mechanical",
        decodeCheck : false,
        premiumCheck: true
      }
    ]
  },
  {
    name: "Beta",
    displayName: "Interest",
    type: "interest",
    decodeCheck : true,
    premiumCheck: true
  },
  {
    name: "Delta",
    displayName: "Work Orientation",
    type: "work",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Sigma",
    displayName: "Personality",
    type: "personality",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Zeta",
    displayName: "Emotional Quotient",
    type: "emotional",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Report",
    displayName: "Report",
    type: "report",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Session Booking",
    displayName: "Session Booking",
    type: "session",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Career Bank",
    displayName: "Career Bank",
    type: "career",
    decodeCheck : true,
    premiumCheck: true
  }
];

export const DASHBOARD_MOBILE_SIDEBAR_DATA = [
  {
    name: "Profile",
    active: true,
    type: "profile",
    displayName: "Profile",
    decodeCheck : true,
    premiumCheck: false
  },
  {
    name: "Assessment",
    type: "mobileassessment",
    displayName: "Assessment",
    decodeCheck : true,
    premiumCheck: true
  },
  {
    name: "Report",
    type: "report",
    displayName: "Report",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Session Booking",
    type: "session",
    displayName: "Session Booking",
    decodeCheck : false,
    premiumCheck: true
  },
  {
    name: "Career",
    type: "career",
    displayName: "Career",
    decodeCheck : false,
    premiumCheck: true
  }
];

export const DASHBOARD_PERSONAL_INFO_FIELDS = [
  {
    key: "name",
    name: "Name",
    readonly: true
  },
  {
    key: "classval",
    name: "Class/Year",
    readonly: false
  },
  {
    key: "school",
    name: "School/Institution",
    readonly: false
  },
  {
    key: "dateofbirth",
    name: "Date of Birth",
    readonly: false
  },
  {
    key: "gender",
    name: "Gender",
    readonly: false
  },
  {
    key: "city",
    name: "City",
    readonly: false
  },
  {
    key: "fathername",
    name: "Father's Name",
    readonly: false
  },
  {
    key: "mothername",
    name: "Mother's Name",
    readonly: false
  },
  {
    key: "phone",
    name: "Phone Number",
    readonly: false
  },
  {
    key: "email",
    name: "Email",
    readonly: true
  }
];

export const HOME_TIMELINE_DATA = [
  {
    key: "Psychometric Assessment",
    title: "Psychometric Assessment",
    text:
      "We use internationally standardised Clinical Tools and Brain Mapping based tests as a wide scale assessment battery for the most authentic results and comprehensive analysis."
  },
  {
    key: "Career Report",
    title: "Career Discovery Report",
    text:
      "The report comes with an in-depth interactive session to answer all your queries. It brings light to the strengths and weaknesses of the child to understand the right career path."
  },
  {
    key: "Industry Exposure",
    title: "Industry Exposure",
    text:
      "We believe it is imperative to have an insight into the real life of a professional. We, at Pro Garten provide live webinars, video support and interaction with industry experts of your choice."
  },
  {
    key: "Year Long Support",
    title: "Year long support",
    text:
      "We won’t leave you so easily! Tagging along for an entire year. Providing counselling and mentorship services. It also comes with quarterly goal tracking and full access to all our resources."
  },
  {
    key: "Bootcamp Exposure",
    title: "Bootcamp Exposure (coming soon)",
    text: "Bringing imagination to life!"
  }
];

export const DASHBOARD_CLASS_YEAR_LIST = [
  {
    id: 1,
    value: "8th Standard",
    displayValue: "8th Standard",
    type: "class"
  },
  {
    id: 2,
    value: "9th Standard",
    displayValue: "9th Standard",
    type: "class"
  },
  {
    id: 3,
    value: "10th Standard",
    displayValue: "10th Standard",
    type: "class"
  },
  {
    id: 4,
    value: "11th Standard",
    displayValue: "11th Standard",
    type: "class"
  },
  {
    id: 5,
    value: "12th Standard",
    displayValue: "12th Standard",
    type: "class"
  },
  {
    id: 6,
    value: "1st Year",
    displayValue: "1st Year",
    type: "year"
  },
  {
    id: 7,
    value: "2nd Year",
    displayValue: "2nd Year",
    type: "year"
  },
  {
    id: 8,
    value: "3rd Year",
    displayValue: "3rd Year",
    type: "year"
  },
  {
    id: 9,
    value: "4th Year",
    displayValue: "4th Year",
    type: "year"
  },
  {
    id: 10,
    value: "5th Year",
    displayValue: "5th Year",
    type: "year"
  }
];

export const DASHBOARD_SEX_LIST = [
  {
    id: 1,
    value: "Male",
    displayValue: "Male"
  },
  {
    id: 2,
    value: "Female",
    displayValue: "Female"
  },
  {
    id: 3,
    value: "Others",
    displayValue: "Others"
  }
];

export const CAREERS_LIST = [
  {
    label: "Computer Applications",
    options: [
      { label: "Ethical Hacking", value: "ethicalhacking" },
      { label: "Game Development", value: "gamedevelopment" }
    ]
  },
  { label: "Merchant Navy", value: "merchantnavy" }
];

export const GUIDANCE_TYPE_DATA = [
  {
    id: "career-selection",
    name: "Career Selection"
  },
  {
    id: "stream-selection",
    name: "Stream Selection"
  },
  {
    id: "college-selection",
    name: "College Selection"
  },
  {
    id: "college-application",
    name: "College Application"
  },
  {
    id: "study-abroad-counselling",
    name: "Study Abroad Counselling"
  },
  {
    id: "job-application",
    name: "Job Application"
  }
];
