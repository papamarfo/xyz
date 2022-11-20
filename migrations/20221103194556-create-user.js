'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      marital_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dob: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      id_card_type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      id_card_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      employer_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      employment_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      is_admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      password: {
        allowNull: true,
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
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}