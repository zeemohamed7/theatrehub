
const mongoose=require('mongoose');

const Schema=mongoose.Schema


 const movieSchema=new Schema({
  title: {
    type: String,
    required: true, 
},
 picture:{
    type:String,
    required:true
 },
  description:{ type:String },
  genre:{type:String ,required:true},
  duration:{type:Number},
  date: {type:Date},
  time:{type: String}

})


const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie