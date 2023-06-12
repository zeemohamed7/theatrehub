const express=require('express');

const router=express.Router();


const movieController=require('../controllers/admin')

//movie routers 

router.get('/admin/add',movieController.movie_create_get)
// router.post('/admin/add',movieController.book_create_post)
router.get('/admin/index',movieController.movie_index_get)
router.post('/admin/delete',movieController.movie_delete)

//one movie info 
// router.get('/movie/details',movieController.movie_detail_get)

// router.get('/book/edit',movieController.movie_edit_get) //loads the edit info 

// router.post('/book/edit',movieController.movie_edit_post)


module.exports=router