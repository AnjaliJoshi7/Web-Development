const express = require('express')
const srv = express()

srv.get('/a', (req, res) => {res.send("AAAAA")})//if the body of the language is of one line then you can omit the curly brackets and this => is another short way to write a function
srv.get('/b', (req, res) => {res.send("BBBBB")})
srv.use((req, res) => res.send("<h2>404 not found</h2>"))// we use srv.use instead of get because we mot only wanted to handle get req ,with req we wanted this middleware to handle other req also like post, delivery req but in a browser its the same thing you can either use or get 
srv.listen(2543)