const contactsController = require('../controllers').contacts;
const usersController = require('../controllers').users;


module.exports = (app) => {
  // route for user signup
  // app.get('/register', usersController.signup);
  app.post('/register', usersController.register);
  app.post('/login', usersController.login);
  app.post('/logout', usersController.logout);
  app.post('/contacts', contactsController.create);
  app.get('/contacts', contactsController.list);

  // route for handling 404 requests(unavailable routes)
  app.use(function(req, res) {
    res.status(404).send('Sorry can\'t find that!');
  });
};

