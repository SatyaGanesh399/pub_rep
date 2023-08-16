const createUserSchema = () => {
  const sessions = [];
  for (let index = 0; index < process.env.SESSION_COUNT; index++) {
    sessions.push({
      id: index,
      name: "",
      sessionDate: "",
      sessionTime: "",
      sessionType: "online",
      sessionStatus: "na",
      sessionLink: process.env.SESSION_LINK,
      sessionLinkPassword: process.env.SESSION_PASSWORD,
      sessionLocation: ""
    });
  }
  return {
    name: "",
    phone: "",
    package: "none",
    sessions: sessions
  };
};

module.exports = createUserSchema;
