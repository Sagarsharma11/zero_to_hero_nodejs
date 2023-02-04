import fs from 'fs'

const readStream = fs.createReadStream('../powder-day.mp4')

readStream.on('data',(chunks)=>{
    console.log(`chunks : ${chunks.length} `)
})

readStream.on('end',()=>{
    console.log('stream finished')
})

readStream.on('error',(err)=>{
    console.log(`opps: ${err}`)
})

readStream.pause();
process.stdin.on('data',(chunks)=>{
    if(chunks.toString().trim()==='finish'){
        readStream.resume()
    }
    readStream.read()
})