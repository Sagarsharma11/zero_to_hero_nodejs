const fs = require('fs')
const {promisify} = require('util')
const writeFile = promisify(fs.writeFile)
const unlike = promisify(fs.unlink)
const readdir = promisify(fs.readdir)

const delay = (sec) => new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
})

Promise.all([
    writeFile('file.md','hello world'),
    writeFile('file.txt','hello world'),
    writeFile('file.json','{"hello":"world"}')
])
.then(()=>readdir(__dirname))
.then(console.log)
.then(()=>{
    delay(5)
})
.then(()=>console.log('enough its done.'))
.catch(console.error)

