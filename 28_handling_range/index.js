import { createServer } from 'http'
import { stat, createReadStream } from 'fs'
import { promisify } from 'util'

const filename = '../powder-day.mp4'
const fileinfo = promisify(stat)
createServer(async (req, res) => {
    const { size } = await fileinfo(filename)
    const range = req.headers.range
    if (range) {
        let [start,end] = range.replace(/bytes=/,'').split('-')
        start = parseInt(start,10);
        end = end ? parseInt(end,10) : size-1;
        res.writeHead(206, {
            'Content-Range':`bytes ${start}-${end}/${size}`,
            'Accept-Ranges':'bytes',
            'Content-Length':(end-start)+1,
            'Content-Type':'video/mp4'
        })
        createReadStream(filename,{start,end}).pipe(res)
    } else {
        res.writeHead(200, {
            'content-length': size,
            'content-type': 'video/mp4'
        })
        createReadStream(filename).pipe(res)
    }
    console.log(`range : ${range}`)
}).listen(5000, () => {
    console.log('server running ')
})