//const  bcrypt  = require ( 'bcryptjs' ) ;


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      userName: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      telephoneNumber: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },

  },
      {
          hooks: {
              beforeCreate: (user) => {
                  const salt = bcrypt.genSaltSync();
                  user.password = bcrypt.hashSync(user.password, salt);
              }
          },
          instanceMethods: {
              validPassword: function (password) {
                  return bcrypt.compareSync(password, this.password);
              }
          }
       }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};