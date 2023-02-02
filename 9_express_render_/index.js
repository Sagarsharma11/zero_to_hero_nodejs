const express = require('express')
const path = require('path')
const app = express()

const publicpath = path.join(__dirname,'template')


app.get('',(req,res)=>{
    res.send("<h1>hello world</h1><a href='/about'>click me</a>")
}).listen(5000)

app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/pagenotfound.html`)
})