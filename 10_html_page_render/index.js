const express = require('express');
const path = require('path')
const app = express();
const public = path.join(__dirname,'template')

app.use(express.static(public))



app.listen(5000)