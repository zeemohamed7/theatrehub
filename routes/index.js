
const express=require('express');
const router=express.Router();

const indexController=require('../controllers/index')

router.get('/',indexController.index_get)


// router.get('/',(err,res)=>{
// res.send('helooo')
// })
















module.exports=router;

