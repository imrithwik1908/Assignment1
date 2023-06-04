const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, 
        unique: false,
    },
    email:{
        type: String,
        required: [true, "Please provide an Email"],
        unique: [true, "Email exists!!"]
    },
    password:{
        type: String,
        required: [true, "Please provide a password!!"],
        unique: false
    },
    role:{
        type:String,
        required:true,
        unique: false,
    }, 
    address:{
        type:String,
        required:true,
        unique: false,
    }
},
    {timestamps: true}
)

const UserDet = mongoose.model("Assignment",UserSchema)

module.exports = UserDet