const Movie = require('../models/Movie')

exports.booking_get = async (req, res) => {
    const movie = await Movie.find()
    console.log(movie)
    res.render('user/booking', {movie})
}