// comment
const express = require('express')
const mongoose = require('mongoose')
const expressLyouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')

const multer=require('multer')



//Importing Routes

const indexRoute = require('./routes/index') //HOME route
const authRoute = require('./routes/auth')
const bookingRoute = require('./routes/booking')
const adminRoute = require('./routes/admin')
const moviesRoute = require('./routes/movies')
const userRoute = require('./routes/user')




// initialize the App

const app = express()

// channel

const port = 3000
app.use(expressLyouts)
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret:'This is a secret !',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

// Mount the Routes

app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', moviesRoute)
app.use('/', userRoute)
app.use('/', adminRoute)
app.use('/', bookingRoute)


app.listen(port, () => {
    console.log(`Cinema is on port${port}`)
})

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://deadmelissajames:AZ3K6OEWsqD3hJ1g@sei4cluster.uwzeppu.mongodb.net/Cinema',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occured', err)
})



//image upload 

const  fileStorageEngine = multer.diskStorage({
  destination:(req,file,cb)=>{
    cd(null,'./images')
  },
 filename:(req,file,cb)=>{
cb(null,Date.now()+"--"+file.originalname)
 }
  })
  

  const upload = multer({storage:fileStorageEngine});
     
app.post('/single',upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.send('sinle file uploded')
})


app.post('/multiple',upload.array('images',3),(req,res)=>{
    console.log(req.files)
res.send('mutiple files has been loaded ')

})







