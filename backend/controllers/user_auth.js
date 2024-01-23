const User = require('../models/user_model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validatior = require('../utils/validationSchema')

module.exports.register = async(req,res) =>{
    console.log(1);
    const { error } = validatior.userRegisterValidation(req.body);
    console.log(error);
		if (error)
			return res.status(400).json({ 
                error: true, 
                message: error.details[0].message
            })

    const {user_name,user_email,password} = req.body
             
    const user = await User.findOne({user_email:user_email})
    if(user){
        return res.status(400).json({
                message : `email are already registered.`,
                success : false    
            })
    }  
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashPassword = await bcrypt.hash(password, salt)
    await new User({
        user_name,
        user_email,
        user_password : hashPassword
    }).save()
    return res.status(201).json({
            message : `user account created successfully.`,
            success : true
        })
}

module.exports.login = async(req,res) => {
    const { error } = validatior.userLoginValidation(req.body);
		if (error)
			return res.status(400).json({ 
                error: true, 
                message: error.details[0].message 
            })
    const {user_email, password} = req.body

    const user = await User.findOne({user_email:user_email})
    if(!user){
        return res.status(401).json({
            message : `user with given email does't exist.`,
            success : false
        })
    }
    const verifiedPassword = await bcrypt.compare(
        password,
        user.user_password
    )
    if (!verifiedPassword)
        return res.redirect(401,"/login").json({ 
            success: false, 
            message: "Invalid  password" 
        })
    
    const payload = { id:user._id }

    const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY,
        { expiresIn: "15d" }
    )	
    return res.status(200).json({
        redirectUrl :"/",
        accessToken,
        success: true,
        message: "user logged in successfully.",
    })
}

//still have to make logout stuff