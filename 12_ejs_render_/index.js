const express = require('express');
const app = express();

app.set('view engine','ejs')

app.get('/profile',(req,res)=>{
    const user = {
        name:'Sagar Sharma',
        email:'sagarsharma@email.com',
        comment:'consistency is key'
    }
    res.render('profile',{user})
})

app.listen(5000)