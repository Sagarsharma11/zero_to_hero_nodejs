const fs = require('fs')
const {promisify} = require('util')
const readdir = promisify(fs.readdir)

async function read_directory(){
    const result = await readdir(__dirname)
    console.log(result)
}

read_directory()