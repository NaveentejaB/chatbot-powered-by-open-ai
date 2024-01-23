const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    user_name : {
        type : String,
        unique : true,
        required : true
    },
    user_email : {
        type : String,
        unique : true,
        required : true
    },
    user_password : {
        type : String,
        unique : true,
        required : true
    },
    user_chats : [String]
})


const User = mongoose.model('User',userSchema)


module.exports = User