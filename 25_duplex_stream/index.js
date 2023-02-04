import {createReadStream , createWriteStream} from 'fs'
import { PassThrough } from 'stream'

const readStream = createReadStream('../powder-day.mp4')
const writeStream = createWriteStream('./copyfile.mp4')
const report = new PassThrough();

let total = 0;
report.on('data',(chunk)=>{
    total+=chunk.length
    console.log(`Size : ${total}`)
})

readStream.pipe(report).pipe(writeStream).on('error',console.error)