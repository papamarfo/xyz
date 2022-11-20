'use strict'

const bcrypt = require("bcryptjs")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Mr Admin',
      email: 'admin@gmail.com',
      is_admin: true,
      password: bcrypt.hashSync('admin@gmail.com'),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
}
