const express=require('express');

const router=express.Router();


const movieController=require('../controllers/movie')

//movie routers 

router.get('/movie/add',movieController.movie_create_get)
router.post('/movie/add',movieController.movie_create_post)
router.get('/movie/index',movieController.movie_index_get)
router.post('/movie/delete',movieController.movie_delete)

//one movie info 
router.get('/movie/details',movieController.movie_detail_get)

router.get('/movie/edit',movieController.movie_edit_get) //loads the edit info 

router.post('/movie/edit',movieController.movie_edit_post)


module.exports=router