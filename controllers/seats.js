const Seats = require('../models/Booking')


exports.seats_create_get = async (req, res) => {
    try {
        const seats = await Seats.find()
        console.log(seats)
        res.render('seats/booking', { seats})

    } catch (error) {
        console.log(error.message)
        res.send('there is an issue')
    }
}

exports.seats_create_post = (req, res) => {
  console.log(req.body)
  const seats = new Seats (req.body)

  seats.save()
  .then(() => {
    console.log('your seat booked')
    res.redirect('/booking/seats')
  })
  .catch((err) =>{
    console.log('an error occured', err);
  })
}