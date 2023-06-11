
const bcrypt = require('bcrypt') // import bcrypt packages 
const passport = require('../lib/passportConfig') // import passport
const User = require('../models/User')

// Render sign up page
exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}

// POST sign up information to database
exports.auth_signup_post = async (req, res, error) => {
    try{
        const password = req.body.password
        const confirm_password = req.body.confirm_password
    console.log(password)
    console.log(confirm_password)

  if(password != confirm_password) {
    console.log("Passwords Don't Match")
    res.redirect('/auth/signup')
  } else {
  
    const user = new User(req.body)
    const pass = req.body.password.toString();
    const hash = bcrypt.hashSync(pass, 10) 
    user.password = hash

    await user.save()

    res.redirect('/');
  
}


    } catch(error){
        console.log(error.message)
    }
}

// Render sign in page
exports.auth_signin_get = (req, res) => {
    res.render('auth/signin')
}

// If login successful/failure
exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/signin'
}) 

// Log out user (Invalidates session)
exports.auth_logout_get  = (req, res) => {
    req.logout(function(error){
        if (error){
            return next() 
        }
        res.redirect('/auth/signin')
    }) 
}

