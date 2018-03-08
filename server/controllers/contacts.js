const Contact = require('../models').Contact;
//const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        return Contact
            .create({
                phoneNumber: req.body.phoneNumber,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                photoString: req.body.photoString,
                company: req.body.company,
                anotherPhoneNumber: req.body.anotherPhoneNumber,
            })
            .then((contacts) => res.status(201).send(contacts))
            .catch((error) => res.status(400).send(error));
    },


    list(req, res) {
        const phoneNumber = req.query.phoneNumber
        const options = {};

        if (req.query.phoneNumber) {
             options. where = {
                phoneNumber: phoneNumber
            }
        }
        return Contact
            .findAll(options)

            .then((contacts) => res.status(200).send(contacts))
    .catch((error) => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Contact
            .findById(req.params.contactId/*, {
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            }*/)
            .then((сontact) => {
            if (!сontact) {
            return res.status(404).send({
                message: 'сontact Not Found',
            });
        }
        return res.status(200).send(сontact);
    })
    .catch((error) => res.status(400).send(error));
    },

    search(req, res) {
        return Contact

    },

    /*update(req, res) {
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
    },*/
};
