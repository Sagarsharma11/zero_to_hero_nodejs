import {createReadStream, createWriteStream} from 'fs'
import { PassThrough, Duplex } from 'stream'

class Throttle extends Duplex{
    constructor(ms){
        super();
        this.delay = ms;
    }
    _write(chunk,encoding,callback){
        this.push(chunk)
        setTimeout(callback,this.delay)
    }
    _read(){}
    _final(){
        this.push(null)
    }

}

const readStream = createReadStream('../powder-day.mp4')
const writeStream = createWriteStream('./copyfile.mp4')
const report = new PassThrough();
const throttle = new Throttle(10)

let total = 0;
report.on('data',(chunk)=>{
    total+=chunk.length
    console.log(`Size : ${total}`)
})

readStream
.pipe(throttle)
.pipe(report)
.pipe(writeStream)
.on('error',console.error)