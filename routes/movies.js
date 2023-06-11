
const express=require('express');
const router=express.Router();

const moviesCtrl=require('../controllers/movies')

router.get('/movies/index', moviesCtrl.movies_get)
router.get('/movies/detail', moviesCtrl.movies_detail_get)

module.exports=router

