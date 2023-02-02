const express = require('express')
const app = express()

app.set('view engine','ejs')
app.get('/profile',(req,res)=>{
    const user = {
        name:'Sagar Sharma',
        email:'sagarsharmatech00@gmail.com',
        comment:'Java Script is Awesome',
        lang:['js','python','golang','dart']
    }
    res.render('profile',{user})
}).listen(5000)