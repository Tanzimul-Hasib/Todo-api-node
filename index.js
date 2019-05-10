
const express = require('express')
require('dotenv').config()
require('./dbconnect')
const app = express()
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 

const todoRoutes=require('./routes/todos')
app.use('/todos',todoRoutes)

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))