const districtModel = require('../models/districtModel')


exports.addDistrict = async (req,res) => {
    try {
        const district  = await districtModel({
            name:req.body.name,
            regionId = req.body.regionId
        })
        const response = await district.save()
        if(response) {
            res.status(201).json(
                {
                    success:true,
                    message:"Tuman qo'shildi"
                    
                }
            )
        }
     
    }
    catch(e) {
        res.status(400).json(
            {
                success:false,
                message:e
            }
        )
  
    }

}  

exports.getAllDistrict = async (req,res) => {
    try {
        const districts = await districtModel.find({})
        if(districts) {
            res.status(200).json({
                success:true,
                data:districts
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

exports.getDistrictById = async (req,res) => {
    try {
        const district = await districtModel.findById({
            _id:req.params.id
        })
        if(district) {
            res.status(200).json(
             {
                 success:true,
                 data:district
             }
            )
        }
        else {
            res.status(400).json(
                {
                    success:false,
                    message:"Id xato ketdi"
                }
             
            )
        }
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
  
    
}
exports.deleteDistrictById = async (req,res) => {
 try {
    const district = await districtModel.deleteOne({
        _id:req.params.id
    })
 } 
 catch(e) {
     res.status(400).json(
         {
            success:false,
            message:e

         }
        
     )
 }
}

exports.updateDistrictById = async (req,res) => {
    try {
        const district = await districtModel.findByIdAndUpdate(req.params.id)
        if(district) {
            res.status(200).json({
                success:true,
                data:district
            })
        }
        else {
            res.status(400).json({
                success:false,
                message:"Id xato ketdi"
            })
        }
    }
   
}