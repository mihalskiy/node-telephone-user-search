const contactsController = require('../controllers').contacts;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/contacts', contactsController.create);
  app.get('/contacts', contactsController.list);
/*
  app.get('/contacts/:contactId', contactsController.retrieve);
*/
};

