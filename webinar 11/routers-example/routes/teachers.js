/*const express = require('express')
const Router = express.Router//inside express there exists a object called router
const route = Router()*/

// the above three line of code can be written like this also
const route = require('express').Router()

let teachers = [
    {name:"Arnav", subject:"Web Dev"},
    {name:"Anjali", subject:"Web Devvvv"}

]

route.get('/', (req, res) => res.send(teachers))
//method for adding new teacher
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers)
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]))//the /.id will also handle /add if it it not written above it or  for making it different we can write it in other way(below line)
/*route.get('/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        next();
    }
    res.send(teachers[req.params.id])
} )
*/


module.exports = route