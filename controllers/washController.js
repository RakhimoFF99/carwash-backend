
const washModel = require('../models/washModel')


exports.addWash = async function (req,res) {
  const wash  = await new washModel (req.body)
  const response = await wash.save()
  res.send(response)
}
exports.getAllWash =  async function (req,res) {
    const wash  = await washModel.find({})
    res.send(wash)
}
exports.getWashById = async  function(req,res) {
 const wash = await washModel.find({
     _id:req.params.id
 })
 res.send(wash)
}

exports.deleteWash = async function () {
    const wash = await washModel.deleteOne({
        _id:req.params.id
    })
    res.send(wash)
}
