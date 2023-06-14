
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
  duration:{type:Number,
    required:true},
  showDays: {type: Array,
    required:true },
  showTimes:{type: Array,
    required:true}

})


const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie