const fs = require('fs')
const path = require('path')
const pathname = path.join(__dirname,'crud')
const filepath = `${pathname}/apple.txt`;

fs.writeFileSync(filepath,'this is apple')
fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item)
})

fs.appendFile(filepath,' and this text is append',(err)=>{
    if(!err) console.log('file is updated')
})

fs.rename(filepath,`${pathname}/fruit.txt`,(err)=>{
    if(!err) console.log('file is renamed')
})

fs.unlinkSync(`${pathname}/fruit.txt`)