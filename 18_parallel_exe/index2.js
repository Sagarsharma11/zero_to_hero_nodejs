const fs = require('fs')
const {promisify} = require('util')
const writeFile = promisify(fs.writeFile)
const unlike = promisify(fs.unlink)
const readdir = promisify(fs.readdir)

const delay = (sec) => new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
})

Promise.race([
    delay(5),
    delay(2),
    delay(4),
    delay(6)
])
.then(()=>console.log(`race is on `))


