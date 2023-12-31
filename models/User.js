const mongoose=require('mongoose');
const bcrypt = require('bcrypt')


const userSchema=mongoose.Schema({
firstName:{
    type: String,
    required:true,
    minlength:[2,'name must be at least 2 character'],
    maxlength:[30,'name cannot be more than 30']
},
lastName:{
type: String,
required:true,
minlength:[2,'name must be at least 2 character'],
maxlength:[30,'name cannot be more than 30']
},
emailAddress:{
    type: String,
    required:true,
    lowcase:true,
    unique:true
},
password:{
    type: String,
    required:true
},
userType: {
    type:String,
    enum:['admin','user'],
    default: "user"
}
},//end of schema 

{
timestamps:true
}
)

userSchema.methods.verifyPassword = function(password){
    console.log('Verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User