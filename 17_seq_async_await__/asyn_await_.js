const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const unlike = promisify(fs.unlink)
const beep = () => process.stdout.write('\x07')

const delay = (sec) => new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
})

const doStuffSeq = async() => {
    console.log('starting')
    await delay(1)
    await writeFile('file.txt','hey js')
    beep()
    console.log('file has created...')
    console.log('waiting...')
    await delay(3)
    await unlike('file.txt')
    beep()
    console.log('file has removed')
    delay(1)
    console.log('operatons done') 
}

doStuffSeq().then(()=>console.log('enough done...'))