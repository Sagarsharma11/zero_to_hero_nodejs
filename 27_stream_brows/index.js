import {createServer} from 'http'
import {stat, createReadStream } from 'fs'
import { promisify } from 'util'

const filename = '../powder-day.mp4'
const fileinfo = promisify(stat)
createServer(async(req,res)=>{
    const {size} = await fileinfo(filename)
    res.writeHead(200,{
        'content-length':size,
        'content-type':'video/mp4'})
    createReadStream(filename).pipe(res)
}).listen(5000,()=>{
    console.log('server running ')
})