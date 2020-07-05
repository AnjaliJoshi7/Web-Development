const express = require('express')
const srv = require('express')()

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')

srv.use(express.json())// json is a special type of middleware ..it is  already present inside express , it can decode the body of the request and turn it  into a javascript object if the body is encoded in json
srv.use(express.urlencoded({extended: true}))//it can decode the body if the body is in the urlencode
//if the body is in json format then the json line will ensure that it is decode and if it is in urlencode format then it is the the duty of urlencode middleware to decode it

srv.use('/students', studentRoute)
srv.use('/teachers', teacherRoute)

srv.listen(2233)