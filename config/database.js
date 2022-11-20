const { Sequelize } = require('sequelize')
const config = require('./config')
const env = require('dotenv')

env.config()

let dbHost;
let dbPort;
let dbDatabase;
let dbUsername;
let dbPassword;

if (process.env.NODE_ENV === 'development') {
  dbHost = config.development.host
  dbPort = config.development.port
  dbDatabase = config.development.database
  dbUsername = config.development.username
  dbPassword = config.development.password
  dialect = config.development.dialect
}

if (process.env.NODE_ENV === 'production') {
  dbHost = config.production.host
  dbPort = config.production.port
  dbDatabase = config.production.database
  dbUsername = config.production.username
  dbPassword = config.production.password
  dialect = config.production.dialect
}

const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dialect
})

module.exports = sequelize