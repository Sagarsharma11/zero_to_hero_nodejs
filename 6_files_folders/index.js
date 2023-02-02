const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,'files')
console.log(dirpath)

// for(var i=0; i<5; i++){
//     fs.writeFileSync(`${dirpath}/apple${i}.txt`,'this is mayuri kumari he')
// }

fs.readdir(dirpath,(err,files)=>{
    for(var i=0; i<files.length; i++){
        console.log(files[i])
    }
})
