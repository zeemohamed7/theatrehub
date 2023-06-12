const express=require('express');

const router=express.Router();


const adminController=require('../controllers/admin')

//movie routers 

router.get('/movie/add',adminController.movie_create_get)
router.post('/movie/add',adminController.book_create_post)
router.get('/movie/index',adminController.movie_index_get)
router.post('/movie/delete',adminController.movie_delete)
//one movie info 
router.get('/movie/details',adminController.movie_detail_get)
router.get('/movie/edit',adminController.movie_edit_get) //loads the edit info 
router.post('/movie/edit',adminController.movie_edit_post)


module.exports=router