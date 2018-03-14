function logging(msg) {
  console.log('Sequelize: ', msg);
}

module.exports = {
  'development': {
    'username': 'postgres',
    'password': '555666',
    'database': 'phonelist',
    'host': '127.0.0.1',
    'port': 5432,
    // 'logging': logging,
    // 'operatorsAliases': false,
    'dialect': 'postgres',
  },
  'test': {
    'username': 'waiyaki',
    'password': null,
    'database': 'todos-test',
    'host': '127.0.0.1',
    'port': 5432,
    // 'logging': logging,
    // 'operatorsAliases': false,
    'dialect': 'postgres',
  },
};
