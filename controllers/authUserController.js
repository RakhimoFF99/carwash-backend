const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.auth = async function (req, res) {
    try {
        const user = await UserModel.findOne({phone:req.body.phone},(err,user) => {
            console.log(err)
            if(err) return res.send(err)
            if(!user) {
                return res.status(400).json({
                    success:true,
                    message:"Login yoki parol  notogri"
                })
            }
            if(user.password == req.body.password) {
    
                res.status(200).json({
                    success:true,
                    data:user
                })
            }
            else {
                res.status(400).json(
                    {
                        success:false,
                        message:"Login yoki parol notogri"
                    }
                )
            }
        
        })
    }
    catch(e) {
         console.log(e)
    }
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
        res.send(data)
    }
    catch (e) {
        console.log(e)
    }

}