const jwt = require('jsonwebtoken');

const {User} = require('../models');

module.exports = {
  async register(req, res) {
    const {
      userName,
      telephoneNumber,
      password,
    } = req.body;

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
            password,
          });

        const token = jwt.sign(
          {
            user: createdUser.id,
          },
          'IeUG345VTJjd4ty3fv',
          {
            expiresIn: 24 * 60 * 60,
          }
        );
        res
          .send(200, {
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
  login(req, res) {
    const {userName, password} = req.body;

    return User
      .findOne({
        where: {
          userName,
        },
      })
      .then((user)=> {
        if (!user) {
          return res
            .status(404)
            .send({
              message: 'user Not Found',
            });
        } else if (!user.validPassword(password)) {
          return res
            .status(404)
            .send({
              message: 'password Not Found',
            });
        } else {
          req.session.user = user.dataValues;
        }
      })
      .then((users) => res.status(201).send(users))
      .catch((error) => res.status(400).send(error));
  },
  logout(req, res) {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  },
};
