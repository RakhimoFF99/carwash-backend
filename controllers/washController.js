
const washModel = require('../models/washModel')


exports.addWash = async function (req,res) {
  try {
    const wash  = await new washModel (req.body)
    const response = await wash.save()
    res.send(response)  
}
catch(e) {
  res.status(400).send(e)
}

}
exports.getAllWash =  async function (req,res) {
    const wash  = await washModel.find({}).populate('districtId','region')
    res.send(wash)
}
exports.getWashById = async  function(req,res) {
 const wash = await washModel.find({
     _id:req.params.id
 }).populate('districtId','name').populate('ownerId',"name")

 res.send(wash)
}

exports.deleteWash = async function () {
    const wash = await washModel.deleteOne({
        _id:req.params.id
    })
    res.send(wash)
}

exports.updateWashById = async (req,res) => {
    try {
        const wash = washModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }

    
}
