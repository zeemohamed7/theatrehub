const Movie = require('../models/Movie')
const Booking = require('../models/Booking')

exports.booking_get = async (req, res) => {
    const movie = await Movie.find()
    console.log(movie)
    res.render('user/booking', {movie})
}

exports.booking_confirm_post = async(req, res) => {
try {
    const booking = await new Booking(req.body)
console.log(req.body)
    // const time = await req.body.
    // console.log(time)
    booking.save()
    
} catch(err){
    console.log(err.message)
    res.render(err.message)
}

    
}

