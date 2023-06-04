const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    orderID:{
        type:String,
        required:true, 
        unique: false,
    },
    To:{
        type: String,
        required:true, 
        unique: false,
    }, 
    From:{
        type: String,
        required:true, 
        unique: false,
    },
    Quantity:{
        type:String,
        required:true,
        unique: false,
    }, 
    address:{
        type:String,
        required:true,
        unique: false,
    },
    transporter:{
        type:String,
        required:true,
        unique: false,
    }, 
},
    {timestamps: true}
)

const MsgDet = mongoose.model("Messages",UserSchema)

module.exports = MsgDet 