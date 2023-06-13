
const mongoose = require('mongoose');

const movieSchema=mongoose.Schema({

  title: {
    type: String,
    required: true
},
 img:{
    type:String,
    // required:true
 },
  description:{ type:String },
  genre:{
    type:String,
    required:true},
  duration:{type:Number},
  showDays: {type: Array, },
  showTimes:{type: Array}

})


const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie