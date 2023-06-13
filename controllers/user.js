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


exports.user_profile_get = async (req, res) => {
        try {
            let isEditing = false
            console.log(req.query.isEditing) 

            const user = await User.findById(req.query.id)

            if (req.query.isEditing === 'true') {
                let isEditing = true 
                res.render('user/profile', {user, isEditing})
                
            } else {
                let isEditing = false
                res.render('user/profile', {user, isEditing})
            }
            console.log(isEditing)
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
