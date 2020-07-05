const express = require('express')
const srv = express();
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.get('/hello', function(req, res) {
    res.send("Hello")
})

//srv.use('/public', express.static("public"))//IF SOMEBODY GOES TO PUBLIC PATH THEY WILL GO THE STATIC FOLDER (PUBLIC)..EXPRESS.STATIC FUNCTION CAN MAKE A ENTIRE FOLDER ACCESIBLE STATISCALLY ON A GIVEN PATH HERE IT IS /public
// two ways to write it in the below line we wrote about the directory in which the file is present.
srv.use('/public', express.static(__dirname + "/public"))

srv.use('/todos', todoRoute)

srv.listen(4567);