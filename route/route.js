const controller = require("./../controller/userController");

let setRouter = (app) => {
  let baseUrl = `/api/v1/users`;

  app.post(`${baseUrl}/signup`, controller.signup);

  app.post(`${baseUrl}/signin`, controller.signin);
};

module.exports = {
  setRouter: setRouter,
};
