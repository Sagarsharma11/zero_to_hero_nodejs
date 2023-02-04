import {createReadStream, createWriteStream, read} from 'fs'

const readStream = createReadStream('../powder-day.mp4')
const writeStream = createWriteStream('./copy.mp4')

readStream.on('data',(chunks)=>{
    writeStream.write(chunks)
})

readStream.on('error',(error)=>{
    console.error(`error => ${error}`)
})

readStream.on('end',()=>{
    writeStream.end()
    console.log('Stream finished')
})

writeStream.on('close',()=>{
    process.stdout.write('\n file copied \n')
})