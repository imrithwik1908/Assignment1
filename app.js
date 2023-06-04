require('dotenv').config() // Requiring dotenv library
var mongoose = require('mongoose')

const app = require('express')()
const http = require('http').Server(app); // creates a server using express app

// Importing the required files into our app.js
const userRoute = require('./routes/userRoutes');
const dbConnect = require('./backend/dbConnect');
const UserDet = require('./models/userModel');


dbConnect() 

app.use('/',userRoute)

http.listen(3000, () => {
    console.log("Server is running on port 3000")
})
 

