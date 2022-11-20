const router = require('express').Router()

const homeController = require('./app/controllers/homeController')
const authController = require('./app/controllers/authController')
const customersController = require('./app/controllers/customersController')
const healthcheckController = require('./app/controllers/healthcheckController')
const loansController = require('./app/controllers/loansController')

const authMiddleware = require('./app/middlewares/authMiddleware')

// Health check
router.get('/health-check', healthcheckController.index)

router.get('/', homeController.index)

// Auth
router.get('/login', authController.loginPage)
router.post('/login', authController.login)
router.get('/logout', authMiddleware, authController.logout)

// Customers
router.get('/customers', authMiddleware, customersController.getCustomers)
router.post('/customers', authMiddleware, customersController.addCustomers)
router.get('/customers/new', authMiddleware, customersController.addCustomersPage)
router.get('/customers/:id', authMiddleware, customersController.getCustomerDetails)

// Loans
router.get('/customers/:id/loans/new', authMiddleware, loansController.addLoansPage)
router.post('/loans', authMiddleware, loansController.addLoans)

module.exports = router