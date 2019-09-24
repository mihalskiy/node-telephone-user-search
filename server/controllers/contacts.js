const phone = require('phone');
const {Contact} = require('../models');
const elasticSearch = require('../elasticsearch/index')

module.exports = {
  async create(req, res) {
    const {
      firstName,
      lastName,
      email,
      photoURL,
      companyName,
      phoneNumber,
      anotherPhoneNumber,
    } = req.body;

    const clearedPhoneNumber = phone(phoneNumber)[0]
      || phoneNumber.replace(/[\(\)\.\-\ \+\x]/g, '');

    const clearedAnotherPhoneNumber = phone(anotherPhoneNumber)[0]
      || anotherPhoneNumber.replace(/[\(\)\.\-\ \+\x]/g, '');

    try {
      const contact = await Contact
        .create({
          phoneNumber: clearedPhoneNumber,
          anotherPhoneNumber: clearedAnotherPhoneNumber,
          firstName,
          lastName,
          email,
          photoURL,
          companyName,
          userId: req.userId,
        });

      return res
        .status(201)
        .send(contact);
    } catch (error) {
      return res
        .status(400)
        .send(error);
    }
  },

  async createList(req, res) {
    if (!req.body.list || !req.body.list.length) {
      throw new Error('list empty, should provide array of objects');
    }

    const list = req.body.list.map((item) => {
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
        userId: req.userId,
      };
    });

    console.log('list', list);
    try {
      const contacts = await Contact.bulkCreate(list, {
        returning: true,
      });
      return res
        .status(201)
        .send(contacts);
    } catch (error) {
      return res
        .status(400)
        .send(error);
    }
  },

  async findAllByNumber(req, res) {
    const {
      phoneNumber,
      anotherPhoneNumber,
    } = req.query;

    const opts = {
      where: {
        // userId: req.userId,
      },
    };

    if (phoneNumber) {
      opts.where.phoneNumber = {
        $like: `%${phoneNumber}%`,
      };
    }

    if (anotherPhoneNumber) {
      opts.where.anotherPhoneNumber = {
        $like: `%${anotherPhoneNumber}%`,
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

  async findAllByName(req, res) {
    try {

      let body = {
        query: {
          multi_match: {
            query: req.query.q,
            type: "phrase_prefix",
            fields: ["firstName", "lastName", "email", "companyName"],
          }
        }
      };

      let defaultBody = {
        size: 10,
        from: 0,
        query: {
          match_all: {}
        }
      };

      const search = req.query.q ? body : defaultBody;
      const elastic = new elasticSearch();
      elastic.searchData('contact', search)
        .then(results => {
          res
            .status(200)
            .send({
              data: results.hits.hits,
              total: results.hits.total
            })
        })
    } catch (error) {
      return res
        .status(400)
        .send(error);
    }
  },
};
