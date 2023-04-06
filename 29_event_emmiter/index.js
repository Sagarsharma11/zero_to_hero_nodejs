import express from 'express'
import EventEmitter from 'events'

const app = express()
const event = new EventEmitter()
let count = 0
event.on("countAPI",()=>{
    count++;
    console.log(`event called ${count}`)
})

app.get('/',(req,res)=>{
    res.send('home')
    event.emit("countAPI")
})

app.get('/search',(req,res)=>{
    res.send('search')
})

app.get('/update',(req,res)=>{
    res.send('update')
})

app.listen(5000)