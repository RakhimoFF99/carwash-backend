const jwt = require('jsonwebtoken')
module.exports =  async function (req,res,next) {
    const token = req.header('auth-token')
    if (!token) {
        return  res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }
 try {
    const user = await jwt.verify(token,'2252534elyor')
    if(user.role !== 'admin') {
        return res.status(400).json({
            success:false,
            message:"No access"
        })
    }
     req.user = user
    next()
 }
 catch(e) {
     res.status(400).json({
         success:false,
         message:"Invalid token"
     })
 }

    
    
}