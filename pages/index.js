const { throws } = require('assert')
const fs = require('fs')
const path = require('path')

if(req.url === '/'){
    fs.readFile(
        path.join(__dirname,'public', 'index.html'),
        (err, content) => {
           if(err) throw err 
           resizeBy.end(content)

        }
    )
}
