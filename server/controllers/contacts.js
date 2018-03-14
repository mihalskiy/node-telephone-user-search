const phone = require('phone');

const {Contact} = require('../models');

module.exports = {
  create(req, res) {
    const {
      firstName,
      lastName,
      email,
      photoURL,
      companyName,
      phoneNumber,
      anotherPhoneNumber,
    } = req.body;

    const clearedPhoneNumber = phone(phoneNumber)[0];
    const clearedAnotherPhoneNumber = phone(anotherPhoneNumber)[0];

    return Contact
      .create({
        phoneNumber: clearedPhoneNumber,
        anotherPhoneNumber: clearedAnotherPhoneNumber,

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
      const clearedPhoneNumber = phone(item.phoneNumber)[0]
        || item.phoneNumber.replace(/[\(\)\.\-\ \+\x]/g, '');

      const clearedAnotherPhoneNumber = phone(item.anotherPhoneNumber)[0]
        || item.anotherPhoneNumber.replace(/[\(\)\.\-\ \+\x]/g, '');

      return {
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        photoURL: item.photoURL,
        companyName: item.companyName,
        phoneNumber: clearedPhoneNumber,
        anotherPhoneNumber: clearedAnotherPhoneNumber,
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

  async list(req, res) {
    const opts = {
      where: {},
    };

    if (req.query.firstName) {
      opts.where.firstName = {
        $like: '%' + req.query.firstName +'%',
      };
    }

    if (req.query.lastName) {
      opts.where.lastName = {
        $like: '%' + req.query.lastName +'%',
      };
    }

    if (req.query.email) {
      opts.where.email = {
        $like: '%' + req.query.email +'%',
      };
    }

    if (req.query.companyName) {
      opts.where.email = {
        $like: '%' + req.query.email +'%',
      };
    }

    if (req.query.phoneNumber) {
      opts.where.phoneNumber = {
        $like: '%' + req.query.phoneNumber +'%',
      };
    }

    try {
      const contacts = await Contact.findAll(opts);
      return res
        .status(200)
        .send(contacts);
    } catch (error) {
      return res
        .status(400)
        .send(error);
    }
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
