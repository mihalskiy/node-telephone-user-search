const contacts = require('./contacts');
const register = require('./user/register');
const login = require('./user/login');

module.exports = {
  contacts,
  user: {
    register,
    login,
  },
};
