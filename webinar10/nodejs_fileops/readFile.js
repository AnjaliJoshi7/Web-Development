//readfile ke andr file ka path jayega
const fs = require('fs')

fs.readFile(__dirname + '/myfile.txt', function(err, data) {
    if (err) throw err

    console.log(data)
    console.log(data.toString())
}
)