
const express = require('express')
const axios = require('axios');
const mongoose = require('mongoose')
require("dotenv").config()
const expressLyouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')
const isAdmin = require('./lib/isAdmin')
const Movie = require('./models/Movie')


//Importing Routes

const indexRoute = require('./routes/index') //HOME route
const authRoute = require('./routes/auth')
const bookingRoute = require('./routes/booking')
const adminRoute = require('./routes/admin')
const moviesRoute = require('./routes/movies')
const userRoute = require('./routes/user')

const User = require('./models/User')

// initialize the App

const app = express()

// channel

const port = 3000
app.use(expressLyouts)
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})




// Mount the Routes

app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', moviesRoute)
app.use('/', userRoute)
app.use('/', adminRoute)
app.use('/', bookingRoute)


// Fetch movie data from the TMDb API
const fetchMovieData = async() => {
    try {
      const response = await axios.get(`${process.env.API_BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
      const movies = response.data.results;
  
      // Save the movie data to the database
      for (const movie of movies) {
        const newMovie = new Movie({
          title: movie.title,
          director: movie.director,
          cast: movie.cast,
          plot: movie.overview,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          releaseDate: movie.release_date
        });
        await newMovie.save();
      }
  
      console.log('Movie data saved to the database');
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }




mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Mongoose Is Connected to MongoDB');
    fetchMovieData();
}).catch((err) => {
    console.log('An error occured', err)
})

app.listen(port, () => {
    console.log(`Cinema is on port${port}`)
})



