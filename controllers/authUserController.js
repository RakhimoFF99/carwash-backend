const UserModel = require('../models/userModel')
exports.auth = function (req,res) {
    
}
exports.register = async function (req,res) {

    
    try {
         
        const searchUser = await UserModel.findOne({phone:req.body.phone})
         
        if(searchUser) {
            return res.status(400).json(
                {
                    status:false,
                    message:"Foydalanuvchi allaqachon ro'yhatdan o'tgan"
                }
            )
        }
    
        const user = await new UserModel(req.body)
        const data = await user.save()
        res.send(data)
    }
    catch(e) {
        console.log(e)
    }
    
}