const cardController = require('../controller/cards');

module.exports = (app) => {
  app.get('/cards/all', cardController.all);
  app.post('/cards/save', cardController.save);
};