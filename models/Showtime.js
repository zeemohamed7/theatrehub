//this is a model for show time 

const mongoose=require('mongoose');

// session_id:{type: String},
// movie_name:{type: String, ref:"Movie"},
// start_date:{type: Date},
// ticket_price:{type: Number},
// seats: {type: Array}

const showtimeSchema=mongoose.Schema({
showtime_id:{type:String , unique:true},
movie_name:{type:String ,ref:"Movie"},
start_date:{type:Date},
start_time:{type:time},
ticket_price:{type:Number},
seats:{type:Array}
})

const showtime=mongoose('showtime',showtimeSchema);

module.exports=showtime;