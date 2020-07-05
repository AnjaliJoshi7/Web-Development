const fs = require('fs')//fs ia an api of file sysytem in nodejs

fs.writeFile(__dirname + '/myfile.txt', "some data", function(err) {
  if (err) throw err

  console.log("File was written")//dirname is a special variable that refers to directory inside which this file is and you need to include / mtlb jisme tu file likh rhe ho usi me text generate ho
})
