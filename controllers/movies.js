
const Movie = require('../models/Movie')



exports.movie_index_get = async(req, res) => {
    try {
   const movies = await Movie.find()// run this line of code and dont run anything after it unless it is completed
 
    res.render('movies/index', { movies })}
    catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}


 // render movie detail page 


exports.movie_detail_get = async(req, res) => {
    try{
    
        const movie = await Movie.findById(req.query.id)
        console.log(movie)
        res.render('movies/detail', {movie})


    } catch(error) {
        console.log(error.message)
        res.send(error.message)
    }
}