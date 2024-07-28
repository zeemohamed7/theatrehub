//this page to do all basic crud operation for a movie
const Movie = require('../models/Movie') //export movie model
const multer=require('multer')
require('dotenv').config();


const Booking = require('../models/Booking')
const timeOptions = ['10:00', '10:15', '10:30', '10:45','11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45','18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45','22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45']
const todayDate = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const dayOptions = []
for (let i = 0; i < 3; i++){
    const date = (parseInt(("0" + todayDate.getDate()).slice(-2) ) + i).toString()
    const day = weekday[todayDate.getDay() + i]
    dayOptions.push(date +' '+ day)
  

}


  

//display all movies in the data base
exports.movie_create_get= async (req,res)=>{
try{

console.log(dayOptions)


res.render('admin/add', { timeOptions, dayOptions })

}
catch(error){
    console.log(error.message)
}
}

//adding a movie to data base with image
exports.movie_create_post=(req,res)=>{
    app.get()
    console.log('req.body', req.body)
console.log('reg file nam',req.file)
Movie.create({
title:req.body.title,
img: req.file.filename,
description:req.body.description,
genre:req.body.genre,
duration:req.body.duration,
date:req.body.date,
time:req.body.time
})
.then(()=>{
    console.log(req.body)
        console.log("your movie has been saved into database")
        return res.redirect('/admin/index')
})
.catch((error)=>{
 console.log("an error occured",error)
  })
}

exports.movie_index_get=async(req,res)=>{
try{
const movies=await Movie.find()
// console.log(movies)
res.render('admin/index',{movies, timeOptions, dayOptions})
}catch(error){
console.log(error.message)
res.send('something is not right')
}
}
exports.movie_delete=async(req,res)=>{
    try{
        console.log('hi')

    await Movie.findByIdAndDelete(req.query.id)
    console.log('Movie has been deleted')
 return res.redirect('/admin/index')
    }
   catch(error){
    res.send(error.message)
   } finally {
    // Execute this code after no matter what
    console.log('We are in the finally block')
}
}
//get all movie details and display it  movie/detail
exports.movie_detail_get=async(req,res)=>{
try{
const movie = await Movie.findById(req.query.id)
res.render('movie/detail',{movie})
}catch(error){
    console.log(error.message)
    res.send(error.message)
}
   } 




exports.movie_edit_get=async(req,res)=>{
try{
const movie = await Movie.findById(req.query.id)
res.render('admin/edit',{movie, timeOptions, dayOptions})
}
catch(error){
    console.log(error.message)
}
}

exports.movie_edit_post=async(req,res)=>{
try{
await Movie.findByIdAndUpdate(req.body.id,req.body)
console.log(req.body)
console.log(req.body.id)
console.log('Your movie details have been updated')

res.redirect('/admin/index')
}
catch(error){
console.log(error.message)
}
}



// exports.all_showtimes_get = async(req, res) => {
//     try {
//         const times = await Movie.find(showTimes) 
//     res.render('admin/add', { none })

// } catch (err) {
//     console.log(err.message)
//     res.render(err.message)
// }
// }

