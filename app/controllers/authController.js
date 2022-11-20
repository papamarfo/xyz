const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.loginPage = (req, res, next) => {
    res.render('login')
}

exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body

        if (!(email && password)) {
            req.flash('error', 'All fields are required')
            return res.render('login')
        }

        let user = await User.findOne({where: {email: email}})
        
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.isLoggedIn = true
            req.session.userID = user.id
            return res.redirect('/customers')
        }

        req.flash('error', 'Invalid credentials')
        res.render('login')
    } catch (err) {
        console.error(">> Error while logging in: ", err)
        req.flash('error', 'Error while logging in. Please try again')
        res.render('login')
    }
}

exports.logout = (req, res) => {
    req.session.destroy(function() {
        res.redirect('/login')
    })
}