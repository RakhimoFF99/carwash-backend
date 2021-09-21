const userModel = require('../models/userModel')

exports.addUser =  async function (req,res) {
    const user = await new userModel({
        phone:req.body.phone,
        name:req.body.name,
        password:req.body.password,

    })
  const res =  await user.save()
  res.send(res)

}
exports.getAllUser = async function (req,res) {
    const user = await userModel.find({})
    res.send(user)
}
exports.getUserById =  async function(req,res) {
const user = await userModel.find({_id:req.params.id})
res.send(user)
}
