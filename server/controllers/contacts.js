const Contact = require('../models').Contact;

module.exports = {
    create(req, res) {
        return Contact
            .create({
                phoneNumber: req.body.phoneNumber,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                photoURL: req.body.photoURL,
                companyName: req.body.companyName,
                anotherPhoneNumber: req.body.anotherPhoneNumber,
            })
            .then((contacts) => res.status(201).send(contacts))
            .catch((error) => res.status(400).send(error));
    },


    list(req, res) {

        const opts = {
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

        if (req.query.companyName) {
            opts.where.companyName = {
                $like: '%' + req.query.companyName +'%'
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

};
