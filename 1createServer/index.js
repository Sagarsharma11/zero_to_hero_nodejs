const http = require('http')

http.createServer((req,res)=>{
    res.write("<h1>hello node js</h1>")
    res.end()
}).listen(5000)