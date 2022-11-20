const User = require('../models/user')
const Loan = require('../models/loan')
const bcrypt = require('bcryptjs')

exports.getCustomers = async (req, res) => {
    try {
        let user = await User.findByPk(req.session.userID)
        let customers = await User.findAll({
            order: [['createdAt', 'DESC']],
            where: {is_admin: false}
        })

        res.render('customers/index', {
            user: user,
            customers: customers
        })
    } catch (err) {
        console.error(">> Error while fetching customers: ", err)
        req.flash('error_msg', 'Error while fetching customers')
        res.render('customers/index')
    }
}

exports.addCustomersPage = async (req, res) => {
    res.render('customers/create')
}

exports.addCustomers = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            marital_status,
            dob,
            id_card_type,
            id_card_number,
            employment_status,
            employer_name
        } = req.body

        if (!name || !email || !phone || !address || !marital_status || !dob || !id_card_type || !id_card_number || !employment_status || !employer_name) {
            req.flash('error', 'All fields are required')
            return res.render('customers/create')
        }

        let customer = await User.findOne({where: {email: email}})

        if (customer) {
            req.flash('error', 'Email "' + email + '" is already registered')
            return res.render('customers/create')
        }
        
        await User.create({
            name: name,
            email: email,
            phone: phone,
            address: address,
            marital_status: marital_status,
            dob: dob,
            id_card_type: id_card_type,
            id_card_number: id_card_number,
            employment_status: employment_status,
            employer_name: employer_name,
            password: bcrypt.hashSync(email), // Set default password using email
            is_admin: false
        })

        req.flash('success', 'Customer created successfully')
        return res.redirect('/customers')
    } catch (err) {
        console.error(">> Error while creating user: ", err)
        req.flash('error', 'Error while creating user')
        return res.redirect('/customers')
    }
}

exports.getCustomerDetails = async (req, res) => {
    try {
        let customer = await User.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: Loan
            }]
        })

        let loans = await customer.getLoans();

        res.render('customers/show', {
            customer: customer,
            loans: loans
        })
    } catch (err) {
        console.error(">> Error while fetching customer details: ", err)
        req.flash('error', 'Error while fetching customer details')
        res.redirect('/customers')
    }
}