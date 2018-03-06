'use strict';
module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoString: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anotherPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    });
  Contacts.associate = (models) => {
    // associations can be defined here
  };
  return Contacts;
};
