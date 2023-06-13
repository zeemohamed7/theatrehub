const express=require('express');

const router=express.Router();


const adminController=require('../controllers/admin')

//movie routers 

router.get('/admin/add',adminController.movie_create_get)
router.post('/admin/add',adminController.movie_create_post)
router.get('/admin/index',adminController.movie_index_get)
router.post('/admin/delete',adminController.movie_delete)

//one movie info 
router.get('/admin/details',adminController.movie_detail_get)

router.get('/admin/edit',adminController.movie_edit_get) //loads the edit info 

router.post('/admin/edit',adminController.movie_edit_post)


module.exports=router