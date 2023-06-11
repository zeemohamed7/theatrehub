
const Movie = require('../models/Movie')

exports.movies_get = (req, res) => {

    res.render('movies/index')
}

exports.movies_detail_get = async (req, res) => {
     // render movie detail page
    try{
        const book = await Movie.findById(req.query.id)
        res.render('movies/detail', {movie})


    } catch(error) {
        console.log(error.message)
        res.send(error.message)
    }
}
