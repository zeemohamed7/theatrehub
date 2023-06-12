//this page to do all basic crud operation for a movie 

const Movie=require('../models/Movie') //export movie model 

//display all movies in the data base 
exports.movie_create_get= async (req,res)=>{
try{
    console.log('movie added')
    res.render('movies/add')

}
catch(error){
    console.log(error.message)
}

}


//adds the movie data into database
exports.movie_create_post=(req,res)=>{
console.log(req.body)

const movie=new Movie(req.body) 
movie.save()
.then(()=>{
    console.log("your movie has been saved into database")
    return res.redirect('/')

})
.catch((error)=>{
    console.log("an error occured",error)
})
}



//get a list of all movies 
exports.movie_index_get=async(req,res)=>{
try{
const movies=await Movie.find()
console.log(movies)
res.render('movies/index', {movies}) //send [movies] as data 
}catch(error){
console.log(error.message)
res.send('something is not right')
}
}


exports.movie_delete=async(req,res)=>{
    console.log(req.query.id)
  
    try{
    await Movie.findByIdAndDelete(req.query.id)
 return res.redirect('/movie/index')
    }
   catch(error){
    res.send(error.message)
   }

}

//get all movie details and display it  movie/detail
exports.movie_detail_get=async(req,res)=>{
try{
const movie=await movie.findById(req.query.id)
res.render('movies/detail',{movie})
}catch(error){
    console.log(error.message)
    res.send(error.message)
}
}

exports.movie_edit_get=async(req,res)=>{
try{
const movie=await Movie.findById(req.query.id)
res.render('movies/edit',{movie})
}
catch(error){
    console.log(error.message)
}
}


exports.movie_edit_post=async(req,res)=>{
try{
    /////uplod.single('my image ')
    //cont img =fs.readfilesync(req.file path )
    //cont encode_img=img.toString('base64)
console.log(req.body.id)
await movie.findByIdAndUpdate(req.body.id,req.body)
res.redirect('/movies/index')
}
catch(error){
console.log(error.message)
}
}