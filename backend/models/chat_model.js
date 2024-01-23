const mongoose = require('mongoose')


const chatSchema = new mongoose.Schema({
    chat_id : {
        type : String,
        required : true,
        unique : true
    },
    heading : {
        type: String,
        required : true
    },
    all_chat : [{
        _id: false,
        user_message : {
            type : String,
            required : true
        },
        message_response : {
            type : String,
            required : true
        }
    }],
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
})

const UserChat = mongoose.model('UserChat',chatSchema)


module.exports = UserChat