const phone = require('phone');

const {Contact} = require('../models');

module.exports = {
  create(req, res) {
    const {
      phoneNumber,
      anotherPhoneNumber,
      firstName,
      lastName,
      email,
      photoURL,
      companyName,
    } = req.body;

    //const clearedTelephoneNumber = phone(phoneNumber)[0];
    //const clearedAnotherTelephoneNumber = phone(anotherPhoneNumber)[0];

    return Contact
      .create({
        phoneNumber: phoneNumber,
        anotherPhoneNumber: anotherPhoneNumber,

        firstName,
        lastName,
        email,
        photoURL,
        companyName,
      })
      .then((contacts) => res.status(201).send(contacts))
      .catch((error) => res.status(400).send(error));
  },

  async createList(req, res) {
    if (!req.body.list || !req.body.list.length) {
      throw new Error('list empty, should provide array of objects');
    }

    const list = req.body.list.map(async (item) => {
      const clearedTelephoneNumber = phone(item.phoneNumber)[0];
      const clearedAnotherTelephoneNumber = phone(item.anotherPhoneNumber)[0];

      return {
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        photoURL: item.photoURL,
        companyName: item.companyName,
        phoneNumber: clearedTelephoneNumber,
        anotherPhoneNumber: clearedAnotherTelephoneNumber,
      };
    });

    try {
      const contacts = await Contact.bulkCreate(list, {
        returning: true,
      });
      return res.status(201).send(contacts);
    } catch (error) {
      return res.status(400).send(error);
    }
  },


  list(req, res) {
    const opts = {
      where: {},
    };

    if (req.query.firstName) {
      opts.where.firstName = {
        $like: '%' + req.query.firstName +'%',
      };
    }

    if (req.query.phoneNumber) {
      opts.where.phoneNumber = {
        $like: '%' + req.query.phoneNumber +'%',
      };
    }

    if (req.query.companyName) {
      opts.where.companyName = {
        $like: '%' + req.query.companyName +'%',
      };
    }

    if (req.query.lastName) {
      opts.where.lastName = {
        $like: '%' + req.query.lastName +'%',
      };
    }

    return Contact.findAll(opts)
      .then((contacts) => res.status(200).send(contacts))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Contact
      .findById(req.params.contactId/* , {
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
