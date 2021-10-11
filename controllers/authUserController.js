const UserModel = require('../models/userModel')
const config = require('config')
const jwt = require('jsonwebtoken')

exports.auth = async function (req, res) {
    console.log(req.body)
    try {
        const user = await UserModel.findOne({phone:req.body.phone}) 
            if(!user) {
                return res.status(400).json({
                    success:false,
                    message:"Login yoki parol  notogri"
                })
            }
            if(user.password == req.body.password) {
             const token = await jwt.sign({id:user._id,role:user.role}, "2252534elyor")
            res.header('authorization',token).json({success:true,token})
               
            }
            else {
                res.status(400).json(
                    {
                        success:false,
                        message:"Login yoki parol notogri"
                    }
                )
            }
        
        
    }

    catch(e) {
         console.log(e)
    }
}
exports.getUserData = async (req,res) => {
   const user = await UserModel.findById(req.user.id)
   res.status(200).json({
       success:true,
       data:user
   })
}



exports.register = async function (req, res) {

    try {

        const searchUser = await UserModel.findOne({ phone: req.body.phone })

        if (searchUser) {
            return res.status(400).json(
                {
                    status: false,
                    message: "Foydalanuvchi allaqachon ro'yhatdan o'tgan"
                }
            )
        }

        const user = await new UserModel(req.body)
        const data = await user.save()
        res.status(201).json({
            success:true,
            data:data
        })
    }
    catch (e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }

}