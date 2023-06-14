

//Display homepage

const Movie = require('../models/Movie')
//Display homepage




exports.index_get = async(req, res) => {
    try {
        const movies = await Movie.find()// run this line of code and dont run anything after it unless it is completed
      
         res.render('home/index', { movies }) }
         catch (error) {
             console.log(error.message)
             res.send(error.message)
         }
}

exports.about_get = async(req,res) => {
    try {
        res.render('home/about') }
        catch (error) {
            console.log(error.message)
            res.send(error.message)
        }
}



