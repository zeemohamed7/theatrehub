//this page to do all basic crud operation for a movie
const Movie = require('../models/Movie') //export movie model
const multer=require('multer')
//display all movies in the data base
exports.movie_create_get= async (req,res)=>{
try{
    console.log('movie added')
    res.render('admin/add')
}
catch(error){
    console.log(error.message)
}
}
//adding a movie to data base with image
exports.movie_create_post=(req,res)=>{
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
//get a list of all movies
exports.movie_index_get=async(req,res)=>{
try{
const movies=await Movie.find()
// console.log(movies)
res.render('admin/index',{movies})
}catch(error){
console.log(error.message)
res.send('something is not right')
}
}
exports.movie_delete=async(req,res)=>{
    try{
        console.log('hi')
    await Movie.findByIdAndDelete(req.query.id)
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
const movie=await Movie.findById(req.query.id)
res.render('admin/edit',{movie})
}
catch(error){
    console.log(error.message)
}
}
exports.movie_edit_post=async(req,res)=>{
try{
console.log(req.body.id)
await Movie.findByIdAndUpdate(req.body.id,req.body)
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
