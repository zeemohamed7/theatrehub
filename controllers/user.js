const bcrypt = require('bcrypt') // import bcrypt packages 
const passport = require('../lib/passportConfig') // import passport

const User = require('../models/User')

exports.user_forgotpassword_get = async (req, res) => {
    res.render('user/forgotpassword')
    
}

exports.user_forgotpassword_post = async (req, res) => {
    try {
        const user = await User.find({emailAddress: req.body.emailAddress})
        if (user) {
            res.render('user/changepassword', {user})
        } else if (!user) {
            res.send('User Not Found')
        }
        console.log(user)
    }
    catch (err) {
        console.log(err)
        res.send('Error Posting')
    }
}

exports.user_changepassword_post = async (req, res) => {
    try {
        const newPassword = req.body.newPassword
        const confirmPassword = req.body.confirmPassword

        if(newPassword === confirmPassword) {
            const pass = req.body.newPassword.toString();
            const hash = bcrypt.hashSync(pass, 10)

            await User.findOneAndUpdate({emailAddress: req.body.emailAddress, password: hash})
            res.redirect('/auth/signin')
        } else {
            res.redirect('/');
        }
        
    }
    catch (err) {
        console.log(err)        
        res.send('Cannot Update Password')        

    }
}

exports.user_details_get = async (req, res) => {
    const user = await User.find()
    res.render('user/details', {user})
    
}
