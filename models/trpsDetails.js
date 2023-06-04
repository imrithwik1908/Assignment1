const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    orderID:{
        type:String,
        required:true, 
        unique: false,
    },
    price:{
        type: Number,
        float: true
    },
    message:{
        type:String,
        required:true,
        unique: false,
    }
},
    {timestamps: true}
)

const OrderDet = mongoose.model("Order",UserSchema)

module.exports = OrderDet