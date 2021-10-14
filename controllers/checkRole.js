const userModel = require('../models/userModel')
module.exports = async (req,res,next) => {
    const userId  =  req.user.id
    const user = await userModel.findById(userId)
    if(user.role !== 'admin') {
        res.status(400).json({
            success:false,
            message:"Access restricted"
        })
    }
    next()
}