//this page to do all basic crud operation for a movie 


const response=require('express')

const Movie=require('../models/Movie')


//show  list of all movies 

const index=(req,res,next)=>{
Movie.find()
.then(response=>{
    res.json({response})

})
.catch(error=>{
res.json({
    message:"an error occured"
})

})

}

//show a single movie by its id 

const show=(req,res,next)=>{
const movieID=req.body.movieID
Movie.findById(movieID)

.then(response=>{
    res.json({
        response
    })
})

.catch(error=>{
res.json({
    message:"an error found"
})
})

}




