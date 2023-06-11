
const mongoose=require('mongoose');

const Schema=mongoose.Schema


 const movieSchema=new Schema({
  m_id:{type:String, unique: true},
  m_name: {
    type: String,
    required: true, 
},
  m_description:{ type:String },
  m_genre:{type:String ,required:true},
  m_duration:{type:String}
 })

const Movie = mongoose.model('movie',movieSchema)

module.exports = Movie