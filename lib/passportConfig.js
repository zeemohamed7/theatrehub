const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

// Save ID into the session
passport.serializeUser(function(user, done){
    done(null, user.id) 
})

passport.deserializeUser(async function(id, done){ 
    try 
{   const user = await User.findById(id)
    done(null, user)}
    catch (error){
     done(err)
    }
})

passport.use(new LocalStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password'
},
    async function(emailAddress, password, done){ // done is like next 

        try{
        // Find user by email address
        // findOne cause we are looking for one user

        const user = await User.findOne({emailAddress: emailAddress}) 
        // if there is no user, run done function
        if (!user) {return done(null, false)}
        // verify password using method in User
        if (!user.verifyPassword(password)) {return done(null, false)}
        // if both are fine
        return done(null,user)
        } catch(err){
            return done(err)
        }

    }
))

module.exports = passport 
