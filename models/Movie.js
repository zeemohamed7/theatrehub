
const mongoose=require('mongoose');

const Schema=mongoose.Schema


 const movieSchema=new Schema({
  name: {
    type: String,
    required: true, 
},
  picture:{type:String,required:true},
  description:{ type:String ,required: true, },
  genre:{type:String ,required:true},
  duration:{type:Number ,required: true },
  Date:{type:Date ,required: true},
  Time:{type:Date , required: true }
 })

const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie