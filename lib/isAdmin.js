const User = require('../models/User')

// function grabAdminId(){
//     adminId = User.find({ emailAddress: "admin@gmail.com" })
//     return adminId
// }

module.exports = function(req, res, next){

    if (req.user.userType === "admin"){
        
        next() 
    } else{
        
        res.redirect('/auth/signin')
        console.log('Admin not logged in')
    }
}
