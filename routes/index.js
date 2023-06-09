const express = require('express')
const router = express.Router()
const indexCtrl = require('../controllers/index')


// Call our API
router.get('/', indexCtrl.index_get)




module.exports = router
=======
const express=require('express');
const router=express.Router();

const indexController=require('../controllers/index')

router.get('/',indexController.index_get)

module.exports=router

