const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Loan = sequelize.define('loans', {
  customer_id: {
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  amount: {
    allowNull: false,
    type: DataTypes.DOUBLE
  },
  rate: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  time: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  interest: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
})

module.exports = Loan