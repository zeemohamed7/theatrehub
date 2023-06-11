
const express=require('express');
const router=express.Router();

const moviesCtrl=require('../controllers/movies')

router.get('/movies/index', moviesCtrl.movie_index_get)
router.get('/movies/detail', moviesCtrl.movie_detail_get)


module.exports=router

