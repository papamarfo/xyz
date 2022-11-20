const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')
const Loan = require('./loan')

const User = sequelize.define('users', {
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING
  },
  address: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  marital_status: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isIn: [['single', 'married']]
    }
  },
  dob: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    validate: {
      isDate: true
    }
  },
  id_card_type: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isIn: [['passport', 'nhia', 'drivers_license']]
    }
  },
  id_card_number: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },
  employer_name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  employment_status: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isIn: [['active', 'inactive']]
    }
  },
  is_admin: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
})

User.hasMany(Loan, {foreignKey: 'customer_id'})

module.exports = User