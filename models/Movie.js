
const mongoose=require('mongoose');

 const movieSchema=mongoose.Schema({

  title: {
    type: String,
    required: true, 
},
  description:{ type:String   },
  genre:{type:String ,required:true},
  duration:{type:String}
 })

const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie