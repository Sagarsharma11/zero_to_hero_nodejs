const fs = require('fs');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const unlike = promisify(fs.unlink);
const beep = ()=> process.stdout.write("\x07")
const delay = (sec) => new Promise((resolve)=>{
    setTimeout(resolve,sec*1000)
})

const doStuffSeq = ()=> Promise.resolve()
.then(()=>console.log('starting...'))
.then(()=>delay(1))
.then(()=>'waiting')
.then(console.log)
.then(()=>delay(2))
.then(()=>writeFile('file.txt','hey java Script is awesome'))
.then(beep)
.then(()=>'file has created')
.then(console.log)
.then(()=>delay(3))
.then(()=> unlike('file.txt'))
.then(beep)
.then(()=>'file.txt removed')
.then(console.log)
.catch(console.error)
doStuffSeq()