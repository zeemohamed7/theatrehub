//this page to do all basic crud operation for a movie 


const Movie = require('../models/Movie') //export movie model 

const timeOptions = ['10:00', '10:15', '10:30', '10:45','11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45','18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45','22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45']
const todayDate = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const dayOptions = []
for (let i = 0; i < 3; i++){
    const date = (parseInt(("0" + todayDate.getDate()).slice(-2) ) + i).toString()
    const day = weekday[todayDate.getDay() + i]
    dayOptions.push(date +' '+ day)
  

}

//display all movies in the data base
exports.movie_create_get= async (req,res)=>{
try{

console.log(dayOptions)


res.render('admin/add', { timeOptions, dayOptions })

}
catch(error){
    console.log(error.message)
}
}





//adds the movie data into database
exports.movie_create_post=(req,res)=>{
console.log(req.body)

const movie = new Movie(req.body) 
movie.save()
.then(()=>{
    console.log("your movie has been saved into database")
    return res.redirect('/admin/index')

})
.catch((error)=>{
    console.log("an error occured",error)
})
}



//get a list of all movies 
exports.movie_index_get=async(req,res)=>{
try{
const movies=await Movie.find()
// console.log(movies)
res.render('admin/index',{movies, timeOptions, dayOptions})
}catch(error){
console.log(error.message)
res.send('something is not right')
}
}


exports.movie_delete=async(req,res)=>{
   

    try{

    await Movie.findByIdAndDelete(req.query.id)
 return res.redirect('/admin/index')
    }
   catch(error){
    res.send(error.message)
   } finally {
    // Execute this code after no matter what
    console.log('We are in the finally block')
}

}



exports.movie_edit_get=async(req,res)=>{
try{
const movie=await Movie.findById(req.query.id)
res.render('admin/edit',{movies})
}
catch(error){
    console.log(error.message)
}
}


exports.movie_edit_post=async(req,res)=>{
try{
console.log(req.body.id)
await Movie.findByIdAndUpdate(req.body.id,req.body)
res.redirect('/admin/index')
}
catch(error){
console.log(error.message)
}
}




// exports.all_showtimes_get = async(req, res) => {
//     try {
//         const times = await Movie.find(showTimes) 
//     res.render('admin/add', { none })

// } catch (err) {
//     console.log(err.message)
//     res.render(err.message)
// }
// }
