const userModel = require('../models/userModel')


exports.addUser =  async function (req,res) {
    console.log(req.body)
    try {
        const user = await new userModel({
            phone:req.body.phone,
            name:req.body.name,
            password:req.body.password,
    
        })
      const response = await user.save()
      res.status(200).json({
          success:true,
          data:user
      })
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
   
}

exports.getAllUser = async function (req,res) {
    const user = await userModel.find({})
    res.send(user)
}


exports.getUserById =  async function(req,res) {
const user = await userModel.find({_id:req.params.id})
res.send(user)
}


exports.deleteUserById = async function (req,res) {
  const response  = await userModel.deleteOne({_id: req.params.id})
  res.send(response)
}

exports.updateUserById = async (req,res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id,{$set:req.boy})
        if(user) {
            res.status(200).json({
                success:true,
                data:user
            })
        }
        else {
            res.status(400).json({
                success:false,
                message:"Id xato ketdi"
            })
        }
    }
    catch(e) {
        console.log(e)
    }

} 
