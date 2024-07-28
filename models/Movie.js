
const mongoose = require('mongoose');
const movieSchema=mongoose.Schema({
  title: {
    type: String,
    required: true
},
 img:String,
  description:{ type:String },
  genre:{
    type:String,
    required:true},
  duration:{type:Number},
  showdays: {type:Date},
  showtimes:{type: String}

})
const Movie = mongoose.model('movie',movieSchema)
module.exports = Movie