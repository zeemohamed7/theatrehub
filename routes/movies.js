
const express=require('express');
const router=express.Router();

const moviesCtrl=require('../controllers/movies')
const tmdbCtrl = require('../controllers/tmdb')
const loggedIn = require("../lib/isLoggedIn")

// router.get('/movies/index', moviesCtrl.movie_index_get)
router.get('/movies/index', tmdbCtrl.fetchMovies)
router.get('/movies/detail', loggedIn, moviesCtrl.movie_detail_get)


module.exports=router

