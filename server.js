
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')

const indexRoute = require('./routes/index')

const PORT = 3000

app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.use('/', indexRoute)


app.listen(PORT, function(){
    console.log(`Cinema is open on ${PORT} `)
})


// Connecting Mongoose to MongoDB
mongoose.connect('mongodb+srv://deadmelissajames:AZ3K6OEWsqD3hJ1g@sei4cluster.uwzeppu.mongodb.net/cinema',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then( function(){
    console.log('Mongoose is connected to MongoDB')
    // to catch any errors if connecting did not work 
}).catch ((err) => { 
    console.log("an error has occured", err)
})