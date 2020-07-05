const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("Visible to Everyone")
})

exports = module.exports = route