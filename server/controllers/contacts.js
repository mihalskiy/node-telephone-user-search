const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const Contact = require('../models').Contact;

module.exports = {
    create(req, res) {
        return Contact
            .create({
                Contact: req.body.phoneNumber,
            })
            .then((todo) => res.status(201).send(todo))
    .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
        return Contact
            .findAll({
                /*include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],*/
                /*order: [
                    ['createdAt', 'DESC'],
                    [{ model: Contact, as: 'Contacts' }, 'createdAt', 'ASC'],
                ],*/
            })
            .then((contacts) => res.status(200).send(contacts))
    .catch((error) => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Todo
            .findById(req.params.todoId, {
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then((todo) => {
            if (!todo) {
            return res.status(404).send({
                message: 'Todo Not Found',
            });
        }
        return res.status(200).send(todo);
    })
    .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Todo
            .findById(req.params.todoId, {
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then(todo => {
            if (!todo) {
            return res.status(404).send({
                message: 'Todo Not Found',
            });
        }
        return todo
            .update({
                title: req.body.title || todo.title,
            })
            .then(() => res.status(200).send(todo))
    .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Todo
            .findById(req.params.todoId)
            .then(todo => {
            if (!todo) {
            return res.status(400).send({
                message: 'Todo Not Found',
            });
        }
        return todo
            .destroy()
            .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
    },
};
