const route = require('express').Router()

route.get('/', (req, res) => {
    if(req.user) {
        return res.send("visible to only logged in users")
    } else {
        res.redirect('/login')
    }
})

route.get('/', (req, res) => {
    res.send("visible to only logged in users.")
})

exports = module.exports = route