const express = require("express")
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')

const todoRoutes = require("./routes/todos")



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/todos', todoRoutes);


const port = process.env.PORT || 3000

app.listen(port, function() {
    console.log("app is running on ", port)
})