const regionModel = require('../models/regionModel')

exports.addRegion = async (req,res) => {
    try {
        const region  = await regionModel({
            name:req.body.name,
         
        })
        const response = await region.save()
        if(response) {
            res.status(201).json(
                {
                    success:true,
                    message:"Region qo'shildi"
                    
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
exports.getAllRegion = async (req,res) => {
    try {
        const districts = await regionModel.find({})
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

exports.getRegionById = async (req,res) => {
        try {
            const region = await regionModel.findById(req.params.id)
            if(region) {
                res.status(200).json({
                    success:true,
                    data:region
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

exports.deleteRegionById = async (req,res) => {
    try {
        const region  = await regionModel.deleteOne({
            _id:req.params.id
        })
        if(region) {
            res.status(400).json({
                success:true,
                data:region
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

exports.updateRegionById  = async (req,res) => {
    try {
        const region = await regionModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        if(region) {
            res.status(200).json({
                success:true,
                data:region
            })
        }
        else {
            res.status(400).json({
                success:false,

            })
        }
    
    }
    catch(e) {
        console.log(e)
    }
    
}