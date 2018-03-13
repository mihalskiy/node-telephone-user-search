const contactsController = require('../controllers').contacts;
const usersController = require('../controllers').users;
const verifyToken = require('../auth/verifyToken');

module.exports = (app) => {
  app.post('/register', usersController.register);
  app.post('/login', usersController.login);

  app.post('/contacts', verifyToken, contactsController.create);
  app.get('/contacts', verifyToken, contactsController.list);

  app.use((req, res) => {
    res
      .status(404)
      .send('Sorry can\'t find that!');
  });

  app.get('*', (req, res) => res
    .status(200)
    .send({
      message: 'Welcome to the beginning of nothingness.',
    }));
};

