const express = require('express');
const bcrypt = require('bcrypt');
const UserDet = require('../models/userModel');
const user_route = require('../routes/userRoutes');
const MsgDet = require('../models/messageModel');
const OrderDet = require('../models/trpsDetails');

const homePage = async(req, res) => {
    try {
        
        res.render('home',{invalid:"",signup:""})

    } catch (error) {
        console.log(error.message)
    }
}

const loginLogic = async(req, res) => {
    try {
        
        const email = req.body.email
        const password = req.body.password

        function generateRandomCode() {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numbers = "0123456789";
            let code = "";
          
            // Generate the first two letters (capital alphabets)
            for (let i = 0; i < 2; i++) {
              const randomIndex = Math.floor(Math.random() * letters.length);
              code += letters.charAt(randomIndex);
            }
          
            // Generate the last three numbers
            for (let i = 0; i < 3; i++) {
              const randomIndex = Math.floor(Math.random() * numbers.length);
              code += numbers.charAt(randomIndex);
            }
          
            return code;
          }
          
        const randomCode = generateRandomCode();

        // Process the request and retrieve the received messages from the backend
        var receivedMessages =  await MsgDet.find({})
          
        const userData = await UserDet.findOne({email: email})
        if(userData){

            const passwordMatch = bcrypt.compare(password,userData.password)

            if(passwordMatch){
                req.session.user = userData

                var users = await UserDet.find({_id : {$eq: [req.session.user._id]}})

                var trps = await UserDet.find({role: {$eq: "Transporter"}})

                var ids = await MsgDet.find({transporter: {$eq: req.session.user.name}})

                var orders = await OrderDet.find({})

                // console.log(trps)

                console.log(users[0].role)


                if(users[0].role === "Manufacturer"){
                    res.render('landing',{users: users, code: randomCode, trps: trps, receivedMessages: receivedMessages, orders: orders})
                }
                if(users[0].role === "Transporter"){
                     res.render('trps',{ids: ids, users: users}) 
                }
            } 

        }

    } catch (error) {
        console.log(error.message)
    }
}

const signupLogic = async(req, res) => {
    try {
        
        const name = req.body.name
        const email = req.body.newEmail
        const password = req.body.crtPassword
        const passwordc = req.body.passwordConfirm
        const role = req.body.Role
        const address = req.body.address

        // console.log(name)
        // console.log(email)
        // console.log(password)
        // console.log(passwordc)
        // console.log(role)

        // console.log(req.body)

        const passwordHash = await bcrypt.hash(password,10)

        const user = new UserDet({
            name: name,
            email: email,
            password: passwordHash,
            role: role,
            address: address
        })

        await user.save()
 
        var users = await UserDet.find({_id : {$eq: [req.session.user._id]}})

        // console.log(users)

        res.render('landing',{})

    } catch (error) {
        console.log(error.message)
    }
}

const storeTrMsg = async(req, res) => {
    try {

        const orderID = req.body.ids
        const price = req.body.price
        const message = req.body.message

        const trps = new OrderDet({
            orderID: orderID,
            price: price,
            message: message
        })

        await trps.save()

    } catch (error) {
        console.log(error.message)
    }
}

const storeMsg = async(req, res) => {
    try {
        
        const orderID = req.body.orderID
        const to = req.body.to
        const from = req.body.from
        const quantity = req.body.quantity
        const address = req.body.address
        const transporter = req.body.transporter


        //const passwordHash = await bcrypt.hash(password,10)

        const user = new MsgDet({
            orderID: orderID,
            To: to,
            From: from,
            Quantity: quantity,
            address: address,
            transporter: transporter
        })

        await user.save()
 
        var receivedMessages =  await MsgDet.find({})

        // var users = await UserDet.find({_id : {$eq: [req.session.user._id]}})

        // console.log(users)

        res.reload();

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {homePage,loginLogic,signupLogic,storeTrMsg,storeMsg} 