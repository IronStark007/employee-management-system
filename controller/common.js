const getHome = (req, res) => {
  console.log("Home page");
  res.status(200).send({ message: "Welcome to Employee Management System" });
};

const getHealth = (req, res) => {
  console.log("health check");
  res.status(200).send({ message: "Happy" });
};

module.exports = {
  getHome: getHome,
  getHealth: getHealth,
};
