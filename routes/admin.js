const express=require('express');
const multer=require('multer')
const router=express.Router();
const adminController=require('../controllers/admin')

const path = 'public/movie_images';
const Storage=multer.diskStorage({
    destination:'public/movie_images',

    filename: (req,file,cb)=>{
        cb(null,file.originalname)

       // cb(null, req.query.filename + path.extname(file.originalname));
    }
    }) //end of disk storage  

       const upload =multer({
       storage:Storage,
       })





//movie routers 
router.get('/admin/add',adminController.movie_create_get)
router.post('/admin/add', upload.single('movie_image'), adminController.movie_create_post)

router.get('/admin/index',adminController.movie_index_get)
router.post('/admin/delete',adminController.movie_delete)

//one movie info 
router.get('/admin/details',adminController.movie_detail_get)
router.get('/admin/edit',adminController.movie_edit_get) //loads the edit info 

router.post('/admin/edit',adminController.movie_edit_post)



//this for uploading an images 


module.exports=router