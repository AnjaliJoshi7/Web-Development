const route = require('express').Router()

let todos = [];

route.get('/', function(req, res) {
  res.send(todos)
})

route.post('/', function(req, res) {
  todos.push({
      task: req.body.task
  })
  res.send(todos)
})

module.exports = route


//jquery => jquer is a library that help us to do a frontend development, using jquery we can select different elements of our web page and using jquery we send get  and post request from client to our server