// comment
const express = require('express')
const mongoose = require('mongoose')
const expressLyouts = require('express-ejs-layouts')
const session = require('express-session')

//Importing Routes

const indexRoute = require('./routes/index')



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

// app.use(session({
//     secret:'This is a secret !',
//     saveUninitialized: true,
//     resave: false,
//     cookie: {maxAge: 86400000}
// }))
// app.use(passport.initialize())
// app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

// Mount the Routes

app.use('/', indexRoute)

app.listen(port, () => {
    console.log(`The Cinema section is on port now ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/Cinema',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occured', err)
})



