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
        type: Sequelize.NUMBER
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
      photoString: {
          type: Sequelize.STRING
      },
      company: {
          type: Sequelize.STRING
      },
      anotherPhoneNumber: {
          type: Sequelize.NUMBER
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