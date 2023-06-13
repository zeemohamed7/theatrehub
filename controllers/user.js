//User details and change password
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
        const user = await User.find({emailAddress: req.body.emailAddress})

        const password = req.body.password
        const confirm_password = req.body.confirm_password

        if(password === confirm_password) {
            const pass = req.body.password.toString();
            const hash = bcrypt.hashSync(pass, 10)

            await User.findOneAndUpdate({emailAddress: req.body.emailAddress, password: hash})
            res.redirect('/auth/signin')
        } else {
            res.redirect('/user/changepassword', {user}); 
            console.log('Your new passwords dont match')
        }
        
    }
    catch (err) {
        console.log(err)        
        res.send('Cannot Update Password')        

    }
}

exports.user_profile_get = async (req, res) => {
        try {

                console.log(req.query.isEditing)

            // if true console.log(req.query.isEditing)
            // do nothing

            // else const isEditing = false


            console.log(req.query.id)

            const user = await User.findById(req.query.id)
            console.log(user)

            res.render('user/profile', {user})
        }
        catch (err) {
            console.log('errorrr')
        }
}

