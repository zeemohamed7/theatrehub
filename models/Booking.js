
const mongoose=require('mongoose')
// const Showtime = require('../models/Showtime')


//booking for a seat is deon on 2D array 
//0 not booked
//1 is booked
const bookingSchema = mongoose.Schema({
    title: {type: String},
    showDays: {type: String},
    showTimes: {type: String},
    seat: {type: String}
})

const booking=mongoose.model('booking',bookingSchema);
module.exports=booking;



