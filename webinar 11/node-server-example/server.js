const express = require('express') 
const server = express()

server.get('/', function(req, res, next){
    console.log("yo")
     res.send("Hello world")
})

/*server.get('/greet/:tod/:name', function(req, res, next){
    let tod = 'Morning'
    switch(req.params.tod) {
        case 'evening' : tod = "EVening"; break;
        case 'morning' : tod = "Morning"; break;
    }
    let greeting = "Good " + tod +", " + req.params.name
   // let greeting = "Good Morning,  " + req.params.name //:name is not a string its a variable and it is available inside req.params.name
    res.send(greeting)
})*/

server.get('/greet/:tod/', function(req, res, next){
    let tod = 'Morning'
    switch(req.params.tod) {
        case 'evening' : tod = "EVening"; break;
        case 'morning' : tod = "Morning"; break;
    }
    let greeting = "Good " + tod +", " + req.query.name// when we run this code over browser(we can only run this code over browser not in terminal) so for the above server get we were writing localhost:2121/greet/evening/anjali here evening is the tod variable and anjali is the name variable but for query we need to write like (localhost:2121/greet/evening/?name=Anjali)
    res.send(greeting)
})
//sending html response
server.get('/html', function(req, res, next){zz
    res.send(`
        <html>
            <body>
                <h1>This is a HTML page</h1>
                <i>This looks really nice</i>
            </body>
        </html>
    `)// `- it is called back tics and we can write multi line strings  in it.
})
server.listen(2121)//to start a server 