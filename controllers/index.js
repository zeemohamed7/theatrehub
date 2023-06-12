//display movies in home pg 

const movies =require('movies')


exports.index_get = (req, res) => {

    res.render('home/index')
}

