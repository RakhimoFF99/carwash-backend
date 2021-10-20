
const washModel = require('../models/washModel')


exports.addWash = async  (req,res) => {
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
    if(response) {
        res.status(201).json({
            success:true,
            message:"Avto yuvish shahobchasi qo'shildi"
        })
    }
}
catch(e) {
  res.status(400).send(e)
}

}
exports.getAllWash =  async  (req,res) => {
    try {
        const wash  = await washModel.find({}).populate('districtId','region')

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
exports.getWashById = async  (req,res) => {
try {
    const wash = await washModel.find({
        ownerId:req.params.id
    }).populate('districtId','name').populate('ownerId',"name")
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
