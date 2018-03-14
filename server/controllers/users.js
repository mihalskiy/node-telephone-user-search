const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const phone = require('phone');

const config = require('../auth/config');

const {User} = require('../models');

module.exports = {
  async register(req, res) {
    const {
      userName,
      phoneNumber,
      password,
    } = req.body;

    if (!userName || !phoneNumber || !password) {
      return res
        .status(400)
        .send('Fields [userName, phoneNumber, password] are required');
    }
    const clearedPhoneNumber =
      phone(phoneNumber)[0] || phoneNumber.replace(/[\(\)\.\-\ \+\x]/g, '');
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log('clearedPhoneNumber', clearedPhoneNumber);

    let user;
    try {
      user = await User.findOne({
        where: {
          userName,
        },
      });
    } catch (error) {
      return res
        .status(400)
        .send(error);
    }

    if (!user) {
      try {
        const createdUser = await User
          .create({
            userName,
            phoneNumber: clearedPhoneNumber,
            password: hashedPassword,
          });

        const token = jwt.sign(
          {
            userId: createdUser.id,
          },
          config.secret,
          {
            expiresIn: config.expireTime,
          }
        );

        return res
          .send(200, {
            auth: true,
            token,
            id: createdUser.id,
            userName: createdUser.userName,
          });
      } catch (error) {
        return res
          .status(400)
          .send(error);
      }
    } else {
      return res.
        status(400)
        .send('Username already exist!');
    }
  },
  async login(req, res) {
    const {
      userName,
      password,
    } = req.body;

    if (!userName || !password) {
      res
        .status(400)
        .send('Fields [userName, password] are required');
    }

    const user = await User
      .findOne({
        where: {
          userName,
        },
      });

    if (!user) {
      return res
        .status(404)
        .send({
          message: 'user Not Found',
        });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({
          auth: false,
          token: null,
        });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      config.secret,
      {
        expiresIn: config.expireTime,
      }
    );

    return res
      .status(200)
      .send({
        auth: true,
        token,
      });
  },
};
