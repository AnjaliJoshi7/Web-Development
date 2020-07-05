const route = require('express').Router()

let students = [
    {name:"anjali", college: "MAIT", year: "1"},
    {name:"priya", college: "Igdtu", year: "2"},
    {name:"rahul", college: "DTU", year: "1"},
    {name:"heena", college: "VIPS", year: "3"}
    
]

route.get('/', (req, res) => res.send(students))
route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(students)
})
route.get('/:id', (req, res) => res.send(students[req.params.id]))

module.exports = route