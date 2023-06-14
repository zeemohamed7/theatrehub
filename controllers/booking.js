const Movie = require('../models/Movie')
const Booking = require('../models/Booking')
const { render } = require('ejs')


exports.booking_confirm_post = async(req, res) => {
try {
    const booking = await new Booking(req.body)
console.log(req.body)
    const user = req.user.emailAddress
// console.log(user)

    // const time = await req.body.
    // console.log(time)
    booking.save()
    res.render('booking/bookingSaved', {user})
    
} catch(err){
    console.log(err.message)
    res.render(err.message)
}

    
}

