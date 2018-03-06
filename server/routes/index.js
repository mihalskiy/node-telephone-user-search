const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const contactsController = require('../controllers').contactsController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to ЖЮТАМ АГЛА-ГЛА!',
  }));

  app.post('/api/contacts', contactsController.create);
  app.get('/api/contacts', contactsController.list);
 /* app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));*/
};
