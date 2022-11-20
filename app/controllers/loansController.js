const User = require('../models/user')
const Loan = require('../models/loan')

exports.addLoansPage = async (req, res, next) => {
    let customer = await User.findByPk(req.params.id)

    res.render('loans/create', {
        customer: customer
    })
}

exports.addLoans = async (req, res, next) => {
    try {
        const {
            customer_id,
            amount,
            rate,
            time
        } = req.body

        if (!customer_id || !amount || !rate || !time) {
            req.flash('error', 'All fields are required')
            return res.redirect('/customers/' + customer_id)
        }

        await Loan.create({
            customer_id: customer_id,
            amount: amount,
            rate: rate,
            time: time,
            interest: (amount * rate * time) / 100
        })

        req.flash('success', 'Loan created successfully')
        return res.redirect('/customers/' + customer_id)
    } catch (err) {
        console.error(">> Error while creating loan: ", err)
        req.flash('error', 'Error while creating loan')
        return res.redirect('/customers')
    }
}