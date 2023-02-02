const fs = require('fs')
const {promisify} = require('util')

const writeNote = promisify(fs.writeFile);

writeNote('file.txt','this is my note ')
.then(()=>console.log('file successfully created'))
.catch((err)=>{
    console.log(`error : ${err}`)
})