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
    'dialect': 'postgres',
  },
  'test': {
    'username': 'waiyaki',
    'password': null,
    'database': 'todos-test',
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres',
  },
  'aws-dev': {
    'username': 'getcontactsmaster',
    'password': 'launchdb5566',
    'database': 'getcontactsdb',
    'host': 'getcontacts.cr3byarqwba4.us-east-2.rds.amazonaws.com',
    'port': 5432,
    'dialect': 'postgres',
  },
  'aws-prod': {
    'username': 'getcontactsmaster',
    'password': 'launchdb5566',
    'database': 'getcontactsdb',
    'host': 'getcontacts.cr3byarqwba4.us-east-2.rds.amazonaws.com',
    'port': 5432,
    'dialect': 'postgres',
  },
};
