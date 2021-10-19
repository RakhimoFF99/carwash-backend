
const washModel = require('../models/washModel')


exports.addWash = async function (req,res) {
    const washSearch = await washModel.findOne({
        phone:req.body.phone
    })
    if(washSearch) {
        return res.status(400).json({
            success:false,
            message:"Avto yuvish shahobchasi allaqachon ro'yhatdan o'tgan"
        })
    }
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
        const wash = washModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        console.log(wash)
        if(wash) {
            res.status(200).json({
                success:true,
                data:wash
            })
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }  
}
exports.findWashByLetter = async (req,res) => {
    try {
        const wash =  await washModel.find({"name": {$regex: '^' + req.params.letter, $options: 'i'}})
        if(wash) {
            res.status(200).send(wash)
    }
}
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }

    
}
