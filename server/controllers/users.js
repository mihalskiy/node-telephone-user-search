const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const __SECRET__ = 'IeUG345VTJjd4ty3fv';
const __EXPIRES_TIME__ = 86400; // expires in 24 hours

const {User} = require('../models');

module.exports = {
  async register(req, res) {
    const {
      userName,
      telephoneNumber,
      password,
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.findOne({
      where: {
        userName,
      },
    });

    if (!user) {
      try {
        const createdUser = await User
          .create({
            userName,
            telephoneNumber,
            password: hashedPassword,
          });

        const token = jwt.sign(
          {
            user: createdUser.id,
          },
          __SECRET__,
          {
            expiresIn: __EXPIRES_TIME__,
          }
        );
        // TODO create table 'sessions' with fields ['token', 'expiresTime']
        // require('MODEL Sessions Table').create({token:  token, expiresTime: expiresTime })

        res
          .send(200, {
            auth: true,
            token,
            id: createdUser.id,
            userName: createdUser.userName,
          });
      } catch (error) {
        res
          .status(400)
          .send(error);
      }
    } else {
      res.status(400).json('Username already exist!');
    }
  },
  async login(req, res) {
    const {userName, password} = req.body;

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
        id: user.id,
      },
      __SECRET__,
      {
        expiresIn: __EXPIRES_TIME__,
      }
    );

    res
      .status(200)
      .send({
        auth: true,
        token,
      });
  },
};
