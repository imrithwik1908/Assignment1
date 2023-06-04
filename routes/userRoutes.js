const express = require('express');

const user_route = express()

const bodyParser = require('body-parser')

const session = require('express-session')

const SESSION_SECRET = process.env.SESSION_SERECT

user_route.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
})) 

user_route.use(bodyParser.json())
user_route.use(bodyParser.urlencoded({extended: true}))

user_route.set('view engine', 'ejs')
user_route.set('views', './views')

user_route.use(express.static('public'))
user_route.use(express.static('public/images'))

user_route.use(express.static(__dirname + '../public'))

const userController = require('../controllers/userControllers')

// Loading the home page
user_route.get('/',userController.homePage)
user_route.post('/login',userController.loginLogic)
user_route.post('/signup',userController.signupLogic) 

// Define a route to handle the POST request
// user_route.post('/messages-disp', userController.getMessages)

user_route.post('/message', userController.storeMsg)

user_route.post('/trps', userController.storeTrMsg)




// // // Loading the login page
// user_route.get('/login',userController.loadLogin)
// user_route.post('/login',userController.loginLogic)




module.exports = user_route