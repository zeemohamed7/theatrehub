const express=require('express');
const multer=require('multer')
const router=express.Router();
const isLoggedIn = require('../lib/isLoggedIn')

const isAdmin = require('../lib/isAdmin')

const adminController=require('../controllers/admin')

const path = 'public/movie_images';
const Storage=multer.diskStorage({
    destination:'public/movie_images',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
    }) //end of disk storage
       const upload =multer({
       storage:Storage,

       })
//movie routers 

router.get('/admin/add', isLoggedIn,isAdmin, adminController.movie_create_get)
router.post('/admin/add', upload.single('movie_image'), adminController.movie_create_post)
router.post('/admin/add', isLoggedIn,isAdmin,adminController.movie_create_post)
router.get('/admin/index',isLoggedIn, isAdmin,adminController.movie_index_get)
router.post('/admin/delete', isLoggedIn, isAdmin,adminController.movie_delete)




module.exports=router
