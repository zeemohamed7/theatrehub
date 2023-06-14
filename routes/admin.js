const express=require('express');

const router=express.Router();
const isLoggedIn = require('../lib/isLoggedIn')

const isAdmin = require('../lib/isAdmin')

const adminController=require('../controllers/admin')

//movie routers 

router.get('/admin/add', isLoggedIn,isAdmin, adminController.movie_create_get)
router.post('/admin/add', isLoggedIn,isAdmin,adminController.movie_create_post)
router.get('/admin/index',isLoggedIn, isAdmin,adminController.movie_index_get)
router.post('/admin/delete', isLoggedIn, isAdmin,adminController.movie_delete)

//one movie info 

router.get('/admin/edit', isLoggedIn,isAdmin,adminController.movie_edit_get) //loads the edit info 
router.post('/admin/edit',isLoggedIn,isAdmin, adminController.movie_edit_post)

// list movie options
// router.get('/admin/add',isLoggedIn, isAdmin, adminController.all_showtimes_get)

module.exports=router