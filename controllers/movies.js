
// Display movie detail page for user
const Movie = require('../models/Movie')
const User = require('../models/User')



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
        const todayDate = new Date()
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        
        const dayOptions = []
        for (let i = 0; i < 3; i++){
            const date = (parseInt(("0" + todayDate.getDate()).slice(-2) ) + i).toString()
            const day = weekday[todayDate.getDay() + i]
            dayOptions.push(date +' '+ day)
          
        
        }
        const movie = await Movie.findById(req.query.id)


        res.render('movies/detail', {movie, dayOptions})


    } catch(error) {
        console.log(error)
        res.send(error)
    }
}