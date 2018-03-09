const Contact = require('../models').Contact;

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

        const opts = {
            attributes: ['phoneNumber'],
            where : {

            }
        };

        if (req.query.firstName) {
            opts.where.firstName = {
                $like: '%' + req.query.firstName +'%'
            }
        }

        if (req.query.phoneNumber) {
            opts.where.phoneNumber = {
                $like: '%' + req.query.phoneNumber +'%'
            }
        }

        if (req.query.company) {
            opts.where.company = {
                $like: '%' + req.query.company +'%'
            }
        }

        if (req.query.lastName) {
            opts.where.lastName = {
                $like: '%' + req.query.lastName +'%'
            }
        }

        return Contact.findAll(opts)
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

    one(req, res) {
        const opts = {
            attributes: ['firstName'],
            where : {

            }
        };

        if (req.query.phoneNumber) {
            opts.where.phoneNumber = {
                $like: '%' + req.query.phoneNumber +'%'
            }

        }

        return Contact.findAll(opts)
            .then((contacts) => res.status(200).send(contacts))
            .catch((error) => res.status(400).send(error));

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
