const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../../auth/config');

const {User} = require('../../models');

module.exports = async (req, res) => {
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
};
