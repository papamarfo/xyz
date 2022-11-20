const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const sequelize = require('./config/database')
const routes = require('./routes')
const env = require('dotenv')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

env.config()

// View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Session
app.use(session({
  name: 'session',
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1209600000,
  }
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(flash())

// Routes
app.use(routes)

app.use(function(err, req, res, next) {
  res.status(500).render('500')
})

app.use(function(req, res, next) {
  res.status(404).render('404', {url: req.originalUrl})
})

sequelize.sync().then(() => {
  app.listen(port)
  console.log(`Server running on [http://127.0.0.1:${port}]`)
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})