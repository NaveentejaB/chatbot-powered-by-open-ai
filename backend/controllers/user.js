const User = require('../models/user_model')
const UserChat = require('../models/chat_model')
const { v4: uuidv4 } = require('uuid');
const OpenAI = require("openai");
const jwt = require('jsonwebtoken')


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


module.exports.startNewChat = async(req,res) => {
    
    const {prompt} = req.body //handling that prompt is not empty in frontend
    const user_id =jwt.decode(req.headers["x-access-token"]).id 
    const chat_id = uuidv4()
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{"role": "user", "content":prompt,}],
    //   max_tokens:100
    // })
    // console.log(response);
    // const result = response.choices[0].message.content
    const response = "hello teja"
    const heading = response

    const chat = {
      chat_id : chat_id,
      heading : heading
    }
    await new UserChat({
      chat_id,
      heading,
      user_id 
    }).save()
    const msg_plus_response = {
      user_message : prompt,
      message_response : response
    }
    const updateUserChat = await UserChat.findOneAndUpdate({chat_id:chat_id},{$push:{
      all_chat : msg_plus_response
    }})
    res.redirect(302,`/c/:${chat_id}`)
    
}

module.exports.specificChat = async(req,res) => {
  const {chat_id} = req.params
  const {prompt} = req.body
  const response = "hi appu!!"
  const msg_ress = {
    user_message : prompt,
    message_response : response
  }
  const chat = await UserChat.findOne({chat_id:chat_id})
  if(!chat)
    return res.status(404).json({
        message : `chat doesnt with the given id : ${chat_id}`,
        success : false
    })
  const updateUserChat = await UserChat.findOneAndUpdate({chat_id:chat_id,
    $push : {all_chat : msg_ress} })

  res.status(201).json({
    response : response,
    success : true
  })
}