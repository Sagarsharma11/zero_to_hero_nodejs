import fs from 'fs'

const readStream = fs.createReadStream('../powder-day.mp4')

readStream.on('data',(chunks)=>{
    console.log(`chunks : ${chunks.length} `)
})

readStream.on('end',()=>{
    console.log('Stream fininshed')
})

readStream.on('error',(err)=>{
    console.log(`opps: ${err}`)
})

