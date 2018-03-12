const contactsController = require('../controllers').contacts;
const usersController = require('../controllers').users;
const verifyToken = require('../auth/verifyToken');


module.exports = (app) => {
  app.post('/register', usersController.register);
  app.post('/login', usersController.login);

  app.post('/contacts', verifyToken, contactsController.create);
  app.get('/contacts', verifyToken, contactsController.list);

  // route for handling 404 requests(unavailable routes)
  app.use((req, res) => {
    res
      .status(404)
      .send('Sorry can\'t find that!');
  });
};

