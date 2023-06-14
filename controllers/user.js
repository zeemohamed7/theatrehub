//User details and change password
const bcrypt = require('bcrypt') // import bcrypt packages 
const passport = require('../lib/passportConfig') // import passport

const User = require('../models/User')
const { object } = require('webidl-conversions')


exports.user_forgotpassword_get = async (req, res) => {
    res.render('user/forgotpassword')
    
}

exports.user_forgotpassword_post = async (req, res) => {
    try {
        const user = await  User.findOne({emailAddress: req.body.emailAddress})
        if (user) {
            res.render('user/changepassword', {user})
        } else {
            
            console.log('User Not Found')
            res.redirect('/auth/signup')
            
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
exports.user_changepassword_get = async (req, res) => {
    res.render('user/changepassword')
}

exports.user_profile_get = async (req, res) => {
        try {

                console.log(req.query.isEditing)
            console.log(req.query.id)

            const user = await User.findById(req.query.id)
            console.log(user)

            if (req.query.isEditing === 'true') {
                let isEditing = true 
                res.render('user/profile', {user, isEditing})
                
            } else {
                let isEditing = false
                res.render('user/profile', {user, isEditing})
            }
            console.log(isEditing)
            res.render('user/profile', {user})
        }
        catch (err) {
            console.log('errorrr')
        }
}


exports.user_profile_post = async(req, res) => {
    try{
        await User.findByIdAndUpdate(req.body.id, req.body)

        res.redirect('/')
    }
    catch(error){
        console.log(error)
    }
}

exports.booking_seats_get = async (req, res) => {
    res.render('/seats')
    
}

exports.booking_seats_post = async(req, res) => {
    try{
        await seats.find()

        res.redirect('/seats')
    }
    catch(error){
        console.log(error)
    }
}