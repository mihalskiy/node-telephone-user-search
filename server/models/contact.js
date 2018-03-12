module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 10,
          msg: 'Phone number must be atleast 10 characters in length',
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'First name must be atleast 3 characters in length',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3,
          msg: 'Last name must be atleast 3 characters in length',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email address must be between 6 and 128 characters in length',
        },
        isEmail: {
          msg: 'Email address must be valid',
        },
      },
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anotherPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 10,
          msg: 'Another number must be atleast 10 characters in length',
        },
      },
    },
  });
  Contact.associate = (models) => {

  };
  return Contact;
};
