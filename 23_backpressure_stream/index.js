import { createReadStream, createWriteStream } from 'fs'

const readStream = createReadStream('../powder-day.mp4')
const writeStream = createWriteStream('./copy.mp4',{
    highWaterMark: 1654325
})

readStream.on('data', (chunks) => {
    const result = writeStream.write(chunks);
    if (!result) {
        console.log('back pressure')
        readStream.pause()
    }
})

readStream.on('error', (error) => {
    console.error(`error => ${error}`)
})

readStream.on('end', () => {
    writeStream.end()
    console.log('Stream finished')
})

writeStream.on('drain',()=>{
    console.log('draning......')
    readStream.resume()
})

writeStream.on('close', () => {
    process.stdout.write('\n file copied \n')
})