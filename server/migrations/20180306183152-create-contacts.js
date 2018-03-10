'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      firstName: {
          type: Sequelize.STRING
      },
      lastName: {
          type: Sequelize.STRING
      },
      email: {
          type: Sequelize.STRING
      },
        photoURL: {
          type: Sequelize.STRING
      },
      companyName: {
          type: Sequelize.STRING
      },
      anotherPhoneNumber: {
          type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contacts');
  }
};